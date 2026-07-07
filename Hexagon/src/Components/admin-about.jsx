const AdminAbout = (props) => {
  const {
    background = {},
    title = {},
    subtitle = {},
    container = {},
    box = [],
  } = props || {};

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

    if (bg.type === "image+gradient" && bg.imageUrl) {
      return {
        backgroundImage: `linear-gradient(${bg.gradientDirection || "to bottom right"}, ${
          bg.gradientFrom || ""
        }, ${bg.gradientTo || ""}), url('${bg.imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }

    if (bg.type === "image+color" && bg.imageUrl) {
      return {
        backgroundImage: `linear-gradient(${bg.color || "#ffffff"}, ${bg.color || "#ffffff"}), url('${bg.imageUrl}')`,
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
    <div className="py-16" style={getBackgroundStyle()}>
      <div className="w-full mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-full flex items-center justify-center order-2 md:order-1 relative">
            <div className="relative p-3 w-full">
              <div className="absolute -inset-4 bg-linear-to-r from-emerald-100 to-teal-100 rounded-2xl transform rotate-2"></div>
              <img
                src={container?.imgUrl}
                alt="Văn phòng Hexagon"
                className="relative rounded-lg shadow-2xl object-cover max-h-75 md:max-h-100 w-full"
              />
            </div>
            <div className="absolute -bottom-4 right-4 md:bottom-8 md:-right-6 bg-white p-5 rounded-xl shadow-[0_10px_40px_rgba(217,119,6,0.3)] max-w-70 z-10 transition-transform hover:-translate-y-2 duration-300">
              <p
                className={`italic leading-relaxed ${sizeH[container?.context1?.level]}`}
                style={{ color: container?.context1?.color }}
              >
                {container?.context1?.content}
              </p>
              <p
                className={`font-bold tracking-wider text-right ${sizeH[container?.context1?.level]}`}
                style={{ color: container?.context2?.color }}
              >
                {container?.context2?.content}
              </p>
            </div>
          </div>
          <div className="text-left order-1 md:order-2">
            <h2
              className={`font-bold mb-4 leading-tight ${sizeH[title?.level]}`}
              style={{ color: title?.color }}
            >
              {title?.content}
            </h2>
            <p
              className={`mb-6 leading-relaxed ${sizeH[subtitle?.level]}`}
              style={{ color: subtitle?.color }}
            >
              {subtitle?.content}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
              {Array.isArray(box) &&
                box.map((item, idx) => {
                  return (
                    <div key={idx} className="bg-slate-50 rounded-lg p-4">
                      <h3
                        className={`font-semibold mb-2 ${sizeH[item?.title?.level]}`}
                        style={{ color: item?.title?.color }}
                      >
                        {item?.title?.content}
                      </h3>
                      <p
                        className={`leading-relaxed ${sizeH[item?.subtitle?.level]}`}
                        style={{ color: item?.subtitle?.color }}
                      >
                        {item?.subtitle?.content}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminAbout;
