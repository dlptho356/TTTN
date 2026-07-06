import { useMemo } from "react";

const STATUS_OPTIONS = [
  { value: "all", label: "Tất cả" },
  { value: "published", label: "Đã xuất bản" },
  { value: "draft", label: "Draft" },
];

const LANGUAGE_OPTIONS = [
  { value: "all", label: "Tất cả" },
  { value: "vi", label: "VI" },
  { value: "en", label: "EN" },
];

const PageManager = ({
  pages,
  filters,
  onFiltersChange,
  onCreatePage,
  onEditPage,
  onDuplicatePage,
  onDeletePage,
}) => {
  const filteredPages = useMemo(() => {
    return pages.filter((page) => {
      const matchLang =
        filters.language === "all" || page.language === filters.language;
      const matchStatus =
        filters.status === "all" || page.status === filters.status;
      const matchDate =
        !filters.updatedAt || page.updatedAt === filters.updatedAt;
      return matchLang && matchStatus && matchDate;
    });
  }, [pages, filters]);

  // “Dịch” (VI ↔ EN) tạo trang đối ứng dựa trên ngôn ngữ của page đang được bấm.
  const handleTranslate = (page) => {
    const targetLanguage = page.language === "en" ? "vi" : "en";
    onDuplicatePage(page.id, targetLanguage);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Quản lý Pages</h1>
          <p className="text-slate-500">
            Tạo và quản lý các trang với PUCK Visual Builder
          </p>
        </div>
        <button
          type="button"
          onClick={onCreatePage}
          className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-500"
        >
          + Tạo Page Mới
        </button>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-3">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Ngôn ngữ</span>
            <select
              value={filters.language}
              onChange={(event) =>
                onFiltersChange({ ...filters, language: event.target.value })
              }
              className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2"
            >
              {LANGUAGE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Trạng thái
            </span>
            <select
              value={filters.status}
              onChange={(event) =>
                onFiltersChange({ ...filters, status: event.target.value })
              }
              className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2"
            >
              {STATUS_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Ngày cập nhật
            </span>
            <input
              type="date"
              value={filters.updatedAt}
              onChange={(event) =>
                onFiltersChange({ ...filters, updatedAt: event.target.value })
              }
              className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2"
            />
          </label>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Tiêu đề
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Slug
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Ngôn ngữ
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Trạng thái
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Cập nhật
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {filteredPages.map((page) => (
              <tr key={page.id} className="hover:bg-slate-50">
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-900">{page.title}</div>
                  <div className="text-sm text-slate-500">SEO: {page.seo}</div>
                </td>
                <td className="px-6 py-4 text-slate-600">{page.slug}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase text-slate-700">
                    {page.language.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      page.status === "published"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {page.status === "published" ? "Đã xuất bản" : "Draft"}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-600">{page.updatedAt}</td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    type="button"
                    onClick={() => onEditPage(page.id)}
                    className="rounded-xl bg-slate-100 px-3 py-2 text-sm text-slate-700 hover:bg-slate-200"
                  >
                    Sửa
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTranslate(page)}
                    className="rounded-xl bg-slate-100 px-3 py-2 text-sm text-slate-700 hover:bg-slate-200"
                  >
                    Dịch
                  </button>

                  <button
                    type="button"
                    onClick={() => onDeletePage(page.id)}
                    className="rounded-xl bg-rose-100 px-3 py-2 text-sm text-rose-700 hover:bg-rose-200"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
            {filteredPages.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-12 text-center text-slate-500"
                >
                  Không có page nào phù hợp.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageManager;
