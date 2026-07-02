import { useEffect, useRef, useCallback } from "react";

const AdminAboutUs = (props) => {
  const {
    background = {},
    title = {},
    paragraph = [],
    videoUrl,
  } = props || {};

  const fadeRefs = useRef([]);

  const updateOpacity = useCallback((el) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const visibleTop = Math.max(0, rect.top);
    const visibleBottom = Math.min(viewportHeight, rect.bottom);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    const totalHeight = rect.height;

    const ratio = totalHeight > 0 ? visibleHeight / totalHeight : 0;
    el.style.opacity = Math.min(1, ratio * 1.2);
  }, []);

  const updateAllItems = useCallback(() => {
    fadeRefs.current.forEach((el) => updateOpacity(el));
  }, [updateOpacity]);

  useEffect(() => {
    updateAllItems();
    window.addEventListener("scroll", updateAllItems, { passive: true });
    window.addEventListener("resize", updateAllItems, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateAllItems);
      window.removeEventListener("resize", updateAllItems);
    };
  }, [paragraph, videoUrl, updateAllItems]);

  const getBackgroundStyle = () => {
    const bg = background || {};

    if (bg.type === "gradient") {
      return {
        background: `linear-gradient(${bg.gradientDirection || "to bottom right"}, ${
          bg.gradientFrom || "#667eea"
        }, ${bg.gradientTo || "#764ba2"})`,
      };
    }

    if (bg.type === "image" && bg.imageUrl) {
      return {
        backgroundImage: `url('${bg.imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }

    if (bg.type === "gif" && bg.gif) {
      return {
        backgroundImage: `url('${bg.gif}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }

    return { backgroundColor: bg.color || "#ffffff" };
  };

  const sizeH = {
    1: "text-5xl",
    2: "text-4xl",
    3: "text-3xl",
    4: "text-2xl",
    5: "text-xl",
    6: "text-lg",
  };

  return (
    <div
      className="flex flex-col justify-center items-center p-10"
      style={getBackgroundStyle()}
    >
      <div className="flex flex-col justify-center w-[80%]">
        <div className="relative h-12.5 w-100 flex items-center mb-10">
          <div className="absolute w-50 h-3.75 bg-[#ffd000] top-6.5 left-10"></div>
          <p
            className={`absolute font-bold ${sizeH[title?.level]}`}
            style={{ color: title?.color }}
          >
            {title?.content}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1 space-y-6">
            {Array.isArray(paragraph) &&
              paragraph.map((item, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    fadeRefs.current[idx] = el;
                    if (el) requestAnimationFrame(() => updateOpacity(el));
                  }}
                  className="scroll-fade-item"
                >
                  <p
                    className="text-justify leading-relaxed text-lg"
                    style={{ color: item?.color || "#4a4a4ad9" }}
                  >
                    {item?.content}
                  </p>
                </div>
              ))}
          </div>

          {videoUrl && (
            <div
              ref={(el) => {
                const videoIndex = Array.isArray(paragraph) ? paragraph.length : 0;
                fadeRefs.current[videoIndex] = el;
                if (el) requestAnimationFrame(() => updateOpacity(el));
              }}
              className="scroll-fade-item flex-shrink-0 w-full md:w-[400px]"
            >
              <video
                src={videoUrl}
                controls
                className="w-full rounded-lg shadow-lg"
                style={{ maxHeight: "400px" }}
              >
                Trình duyệt của bạn không hỗ trợ video.
              </video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAboutUs;