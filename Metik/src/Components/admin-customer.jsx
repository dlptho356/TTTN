import { useEffect, useRef, useCallback } from "react";

const StarRating = () => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const AdminCustomer = (props) => {
  const {
    background = {},
    title = {},
    customers = [],
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
  }, [customers, updateAllItems]);

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
        <div className="relative h-12.5 w-100 flex items-center">
          <div className="absolute w-50 h-3.75 bg-[#ffd000] top-6.5 left-10"></div>
          <p
            className={`absolute font-bold ${sizeH[title?.level]}`}
            style={{ color: title?.color }}
          >
            {title?.content}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          {Array.isArray(customers) &&
            customers.map((item, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  fadeRefs.current[idx] = el;
                  if (el) requestAnimationFrame(() => updateOpacity(el));
                }}
                className="scroll-fade-item w-full rounded-2xl flex text-center"
              >
                <img
                  src={item?.avatar}
                  alt={item?.name || ""}
                  className="w-30 h-30 rounded-full object-cover mr-3"
                />
                <div className="flex flex-col justify-center">
                  <StarRating />
                  <p
                    className="text-justify leading-relaxed italic"
                    style={{ color: item?.contentColor || "#4e4e4e" }}
                  >
                    {item?.content}
                  </p>
                  <p
                    className="font-bold text-lg text-left mt-2"
                    style={{ color: item?.nameColor || "#333333" }}
                  >
                    {item?.name}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCustomer;