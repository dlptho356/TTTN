import { useEffect, useRef, useCallback } from "react";

export const ContainerRadiusFields = ({ value = [], onChange }) => {
  const sides = [
    { label: "Trên Trái", class: "rounded-tl-4xl" },
    { label: "Trên Phải", class: "rounded-tr-4xl" },
    { label: "Dưới Trái", class: "rounded-bl-4xl" },
    { label: "Dưới Phải", class: "rounded-br-4xl" },
  ];

  const toggleSide = (sideClass, isChecked) => {
    if (isChecked) {
      onChange([...value, sideClass]);
    } else {
      onChange(value.filter((s) => s !== sideClass));
    }
  };

  return (
    <div>
      <label className="font-semibold uppercase">Chọn góc để bo tròn</label>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {sides.map((side) => (
          <label
            key={side.class}
            className="flex items-center space-x-2 cursor-pointer p-1 hover:bg-gray-50 rounded"
          >
            <input
              type="checkbox"
              checked={value.includes(side.class)}
              onChange={(e) => toggleSide(side.class, e.target.checked)}
              className="w-4 h-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500 "
            />
            <span className="text-xs text-gray-700">{side.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};


const AdminIntroduce = (props) => {
  const {
    background = {},
    title = {},
    subtitle = {},
    container = [],
  } = props || {};

  const itemRefs = useRef([]);

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
    itemRefs.current.forEach((el) => updateOpacity(el));
  }, [updateOpacity]);

  useEffect(() => {
    updateAllItems();

    window.addEventListener("scroll", updateAllItems, { passive: true });
    window.addEventListener("resize", updateAllItems, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateAllItems);
      window.removeEventListener("resize", updateAllItems);
    };
  }, [container, updateAllItems]);
  
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
        <div
          className={`mb-10 ${sizeH[subtitle?.level]}`}
          style={{ color: subtitle?.color }}
        >
          {subtitle?.content}
        </div>
        <div className="grid grid-cols-2 gap-10 items-center justify-center">
          {Array.isArray(container) &&
            container.map((item, idx) => {
              const containerSideClasses =(item?.containerRadius || []).join(" ");
              const itemType = item?.type;
              const contentType = item?.content?.type;
              const list = item?.content?.list;
              const listColor = item?.content?.color;

              if (itemType === "img") {
                return (
                  <div
                    key={idx}
                    ref={(el) => {
                      itemRefs.current[idx] = el;
                      if (el) {
                        requestAnimationFrame(() => updateOpacity(el));
                      }
                    }}
                    className="scroll-fade-item"
                  >
                    <img src={item?.imageUrl} className={`object-contain w-[350rem] ${containerSideClasses}`} />
                  </div>
                );
              } else if (
                itemType === "content" &&
                contentType === "paragraph"
              ) {
                return (
                  <div
                    key={idx}
                    ref={(el) => {
                      itemRefs.current[idx] = el;
                      if (el) {
                        requestAnimationFrame(() => updateOpacity(el));
                      }
                    }}
                    className={`${containerSideClasses} scroll-fade-item`}
                  >
                    <p 
                    className={`tracking-[0.5px] text-lg`}
                    style={{ color: item?.content?.color }}
                    >
                        {item?.content?.paragraph}</p>
                  </div>
                );
              } else if (itemType === "content" && contentType === "list") {
                return (
                  <div
                    key={idx}
                    ref={(el) => {
                      itemRefs.current[idx] = el;
                      if (el) {
                        requestAnimationFrame(() => updateOpacity(el));
                      }
                    }}
                    className={`${containerSideClasses} scroll-fade-item`}
                  >
                    <ul className="list-disc inline-block pl-5 items-start justify-start">
                      {Array.isArray(list) &&
                        list.map((item, idx) => {
                          return (
                            <li 
                            key={idx} 
                            className={`text-lg tracking-[0.5px]`}
                            style={{ color: listColor }}
                            >
                              {item?.content}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>
    </div>
  );
};

export default AdminIntroduce;