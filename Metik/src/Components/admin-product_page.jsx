const AdminProductPage = (props) => {
  const {
    background = {},
    breadcrumb = [],
    products = [],
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

  const sizeH = {
    1: "text-5xl",
    2: "text-4xl",
    3: "text-3xl",
    4: "text-2xl",
    5: "text-xl",
    6: "text-lg",
  };

  return (
    <div className="flex flex-col justify-center items-center p-10" style={getBackgroundStyle()}>
      <div className="w-[80%]">
        {Array.isArray(breadcrumb) && breadcrumb.length > 0 && (
          <div className="mb-6 text-sm text-gray-500">
            {breadcrumb.map((item, idx) => {
              const text = item && typeof item === "object" ? item.content || item.label || "" : item;
              return (
                <span key={idx}>
                  <span className={idx === breadcrumb.length - 1 ? "font-semibold text-gray-900" : ""}>
                    <a 
                    href={item?.url || "#"}
                    className="hover:text-gray-900"
                    >{text}</a>
                  </span>
                  {idx < breadcrumb.length - 1 && <span className="px-2">/</span>}
                </span>
              );
            })}
          </div>
        )}

        <div className="md:flex gap-5 justify-center grid grid-cols-2">
          {Array.isArray(products) &&
            products.map((item, idx) => (
              <div
                key={idx}
                className="w-70 h-auto items-center justify-center group overflow-hidden shadow-[0_1px_3px_-2px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] hover:shadow-[0_3px_6px_-4px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.23)]"
              >
                <div className="overflow-hidden w-70 h-[80%]">
                  <img
                    src={item?.url}
                    alt={item?.subtitle?.content || ""}
                    className="object-cover w-full h-75 transition-transform duration-600 ease-in-out group-hover:scale-110"
                  />
                </div>
                {item?.subtitle?.content ? (
                  <p
                    style={{ color: item?.subtitle?.color }}
                    className={`flex justify-center items-center pt-5 py-6 font-bold ${sizeH[item?.subtitle?.level]}`}
                  >
                    {item.subtitle.content}
                  </p>
                ) : null}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProductPage;
