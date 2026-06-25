export const MultiContainerRadiusFields = ({ value = [], onChange }) => {
  const sides = [
    { label: "Trên Trái", class: "rounded-tl-[100px]" },
    { label: "Trên Phải", class: "rounded-tr-[60px]" },
    { label: "Dưới Trái", class: "rounded-bl-[60px]" },
    { label: "Dưới Phải", class: "rounded-br-[60px]" },
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
              className="w-4 h-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-xs text-gray-700">{side.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

const AdminMultipleContent = (props) => {
  const {
    headding,
    subtitle,
    container = [],
    background = {},
    button = {},
    children,
  } = props || {};

  const getBackgroundStyle = () => {
    const bg = background || {};

    if (bg.type === "gradient") {
      return {
        background: `linear-gradient(${bg.gradientDirection || "to bottom right"}, ${bg.gradientFrom || "#667eea"}, ${bg.gradientTo || "#764ba2"})`,
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
  const getBtnBgStyle = () => {
    const btnbg = button?.buttonBg || {};

    if (btnbg.type === "gradient") {
      return {
        background: `linear-gradient(${btnbg.gradientDirection || "to bottom right"}, ${btnbg.gradientFrom || "#667eea"}, ${btnbg.gradientTo || "#764ba2"})`,
      };
    }

    if (btnbg.type === "image" && btnbg.imageUrl) {
      return {
        backgroundImage: `url('${btnbg.imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }

    if (btnbg.type === "gif" && btnbg.gif) {
      return {
        backgroundImage: `url('${btnbg.gif}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }

    return {
      backgroundColor: btnbg.color || "#ffffff1f",
    };
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
      className={`flex flex-col px-20 py-5 h-auto w-full`}
      style={getBackgroundStyle()}
    >
      <div className="flex flex-col items-center p-4">
        <h1
          className={`px-4 mb-3 ${sizeH[headding?.level] || sizeH[2]}`}
          style={{ color: headding?.color || "#000000", fontWeight: "bold" }}
        >
          {headding?.content}
        </h1>

        {subtitle?.content ? (
          <p
            className={`px-4 mb-12 ${sizeH[subtitle?.level] || sizeH[2]}`}
            style={{ color: subtitle?.color || "#000000", fontWeight: 600 }}
          >
            {subtitle?.content}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {Array.isArray(container) &&
          container.map((item, idx) => {
            const containerRadius = item?.containerRadius || [];
            const containerSideClasses = containerRadius.join(" ");

            const title = item?.title;

            const rawIcon = item?.icon;
            const icon = {
              type: rawIcon?.type || "image",
              imageUrl:
                rawIcon?.imageUrl ||
                "https://cdn-icons-png.flaticon.com/512/10221/10221159.png",
              content: rawIcon?.content || "URL",
            };
            const button = item?.button;

            return (
              <div
                key={idx}
                className={`w-max md:w-85 h-auto md:h-66 bg-linear-to-b from-[#2CB2FF] to-[#0B5077] border-none shadow-[0_15px_35px_rgba(12,74,115,0.25)] transition-all duration-300 ease-in-out  flex flex-col items-center justify-center p-4 overflow-hidden ${containerSideClasses} 
                                hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(12,74,115,0.4)] hover:bg-linear-135 hover:from-[#21adff] hover:to-[#0e5685] group`}
              >
                {icon ? (
                  icon.type === "image" || !icon.type ? (
                    <div
                      className="mb-3"
                      style={{ backgroundColor: "inherit" }}
                    >
                      <img
                        src={icon.imageUrl}
                        alt={icon.content || "icon"}
                        className="h-16 w-16 object-contain group-hover:scale-110 transform duration-300"
                      />
                    </div>
                  ) : (
                    <div
                      className="mb-3"
                      style={{
                        backgroundColor: "inherit",
                        color: title?.color || "#000000",
                      }}
                    >
                      {icon.content}
                    </div>
                  )
                ) : null}
                <div
                  className={`mb-3 ${sizeH[title?.level] || sizeH[2]}`}
                  style={{
                    color: title?.color || "#000000",
                    fontWeight: "bold",
                  }}
                >
                  {title?.content || "Tiêu đề"}
                </div>

                <a
                  href={button?.url || "#"}
                  className={`flex items-center px-6 w-auto h-13 border text-(--btn-color) [background:var(--btn-bg)] transition-colors duration-300 ${sizeH[button?.level] || sizeH[4]} ${button?.buttonRadius?.join?.(" ") || ""} hover:border-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#0c4c73] hover:shadow-[0 5px 15px rgba(255, 255, 255, 0.2)]`}
                  style={{
                    "--btn-color": button?.color || "#FFFFFF",
                    fontWeight: 600,
                    "--btn-bg":
                      getBtnBgStyle(button?.buttonBg)?.background ||
                      getBtnBgStyle(button?.buttonBg)?.backgroundColor ||
                      "#0c4c73",
                  }}
                  type="button"
                >
                  {button?.content}
                </a>
              </div>
            );
          })}
      </div>
      {children}
    </div>
  );
};

export default AdminMultipleContent;
