const AdminFooter = (props) => {
  const {
    background = {},
    logo,
    subtitle = {},
    contactTitle = {},
    contactItems = [],
    copyright = {},
  } = props || {};

  const getBackgroundStyle = () => {
    const bg = background || {};

    if (bg.type === "gradient") {
      return {
        background: `linear-gradient(${bg.gradientDirection || "to bottom right"}, ${
          bg.gradientFrom || "#f8c123"
        }, ${bg.gradientTo || "#e19a00"})`,
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

    return { backgroundColor: bg.color || "#f8c123" };
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
    <footer className="w-full" style={getBackgroundStyle()}>
      <div className="max-w-300 mx-auto px-5 py-16">
        <div className="flex flex-col lg:flex-row md:gap-10 lg:items-start justify-between">
          <div className="lg:w-1/2 flex flex-col gap-5">
            {logo && (
              <div className="w-auto">
                <img src={logo} alt="Metik logo" className="w-60 h-auto object-contain" />
              </div>
            )}
            <div>
              <p className="mt-4 leading-relaxed text-2xl " style={{ color: subtitle?.color || "#1f2937" }}>
                {subtitle?.content}
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-10">
            <div>
              <p className={`font-bold border-b p-3 border-[#ffffff70] ${sizeH[contactTitle?.level] || "text-xl"}`} style={{ color: contactTitle?.color }}>
                {contactTitle?.content}
              </p>
              <div className="mt-5 space-y-4">
                {Array.isArray(contactItems) && contactItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <span className="mt-1 text-2xl inline items-center " style={{ color: item?.iconColor || "#1f2937" }}>
                      {item?.icon || "•"}
                    </span>
                    <div>
                      <a href={item?.url} className="transition-colors duration-300 cursor-pointer">
                          <p className="leading-snug inline items-center justify-center text-xl hover:text-white!" style={{ color: item?.valueColor || "#1f2937" }}>
                            {item?.value}
                          </p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-15 bg-[#f4851a] items-center justify-center flex flex-col">
          <p className="text-lg " style={{ color: copyright?.color || "#1f2937" }}>
            {copyright?.content}
          </p>
        </div>
    </footer>
  );
};

export default AdminFooter;
