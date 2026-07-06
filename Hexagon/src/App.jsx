import { useEffect, useMemo, useState } from "react";
import { Puck, Render } from "@measured/puck";
import puckConfig from "./admin-puck-config";
import PageManager from "./Components/PageManager";

import "./App.css";

const STORAGE_KEY = "hexagon-page-manager";

function App() {
  const [preview, setPreview] = useState(false);
  const [currentPageId, setCurrentPageId] = useState(null);
  const [pages, setPages] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) && parsed.length > 0 ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  });
  const [filters, setFilters] = useState({
    language: "all",
    status: "all",
    updatedAt: "",
  });

  const currentPage = useMemo(
    () => pages.find((page) => page.id === currentPageId) || null,
    [pages, currentPageId],
  );

  const handleCreatePage = () => {
    const newPage = {
      id: `page-${pages.length + 1}`,
      title: "Trang mới",
      seo: "Trang mới",
      slug: "/trang-moi",
      language: "vi",
      status: "draft",
      updatedAt: new Date().toISOString().split("T")[0],
      data: { content: [] },
    };
    setPages((prev) => [newPage, ...prev]);
    setCurrentPageId(newPage.id);
  };

  const handleEditPage = (id) => {
    const page = pages.find((item) => item.id === id);
    if (!page) return;
    setCurrentPageId(id);
    setPreview(false);
  };

  const handleDuplicatePage = (id, targetLanguage = null) => {
    const page = pages.find((item) => item.id === id);
    if (!page) return;

    const nextLanguage = targetLanguage ?? "en";

    const slugBase = page.slug.replace(/(-en)?$/, "");
    const nextSlug = nextLanguage === "en" ? `${slugBase}-en` : slugBase;

    // Chọn dữ liệu theo nhánh ngôn ngữ đích (nếu có cấu trúc theo language),
    // hoặc fallback các cấu trúc khác để tránh render lỗi.
    const isLangSplit = page?.data && (page.data.vi || page.data.en);

    const sourceData = isLangSplit
      ? (page.data?.[nextLanguage] ??
        page.data?.content ??
        page.data?.vi ??
        page.data?.en ?? { content: [] })
      : page.data?.content
        ? page.data
        : (page.data?.[page.language] ??
          page.data?.vi ??
          page.data?.en ?? { content: [] });

    const duplicatePage = {
      ...page,
      id: `page-${pages.length + 1}`,
      title: `${page.title} (Dịch)`,
      slug: nextSlug,
      language: nextLanguage,
      status: "draft",
      updatedAt: new Date().toISOString().split("T")[0],
      data: JSON.parse(JSON.stringify(sourceData)),
    };

    setPages((prev) => [duplicatePage, ...prev]);
    setPreview(false);
  };

  const handleDeletePage = (id) => {
    setPages((prev) => prev.filter((page) => page.id !== id));
    if (currentPageId === id) setCurrentPageId(null);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
  }, [pages]);

  const handlePublish = (data) => {
    if (!currentPage) return;

    setPages((prev) =>
      prev.map((page) =>
        page.id === currentPage.id
          ? {
              ...page,
              data,
              status: "published",
              updatedAt: new Date().toISOString().split("T")[0],
            }
          : page,
      ),
    );
    setPreview(true);
  };

  const currentPageData = currentPage?.data ?? {};

  if (preview) {
    return (
      <div>
        <div className="cursor-pointer fixed z-5000 bg-blue-400 top-5 left-5 rounded-2xl">
          <button
            onClick={() => setPreview(false)}
            className="cursor-pointer p-5 h-5 flex items-center justify-center text-white"
          >
            Edit
          </button>
        </div>

        <Render
          key={`${currentPageId}-preview`}
          config={puckConfig}
          data={currentPageData}
        />
      </div>
    );
  }

  if (currentPage) {
    return (
      <div className="min-h-screen">
        <div className="sticky top-0 z-50 border-b border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm text-slate-500">Đang chỉnh sửa</div>
              <h2 className="text-xl font-semibold">{currentPage.title}</h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                Ngôn ngữ: {currentPage.language?.toUpperCase() || "VI"}
              </div>
              <button
                type="button"
                onClick={() => setCurrentPageId(null)}
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
              >
                Quay lại quản lý Page
              </button>
              <button
                type="button"
                onClick={() => setPreview(true)}
                className="rounded-xl bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-500"
              >
                Xem trước
              </button>
            </div>
          </div>
        </div>

        <Puck
          key={`${currentPageId}`}
          config={puckConfig}
          data={currentPageData}
          onPublish={handlePublish}
        />
      </div>
    );
  }

  return (
    <PageManager
      pages={pages}
      filters={filters}
      onFiltersChange={setFilters}
      onCreatePage={handleCreatePage}
      onEditPage={handleEditPage}
      onDuplicatePage={handleDuplicatePage}
      onDeletePage={handleDeletePage}
    />
  );
}

export default App;
