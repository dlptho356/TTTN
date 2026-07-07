const AdminServices = (props) => {
  const { background = {}, title = {}, subtitle = {}, card = [] } = props || {};

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

  const getCardBackgroundStyle = (item) => {
    const cardBg = item?.cardBg || {};

    if (cardBg.type === "gradient") {
      return {
        background: `linear-gradient(${cardBg.gradientDirection || "to bottom right"}, ${
          cardBg.gradientFrom || "#667eea"
        }, ${cardBg.gradientTo || "#764ba2"})`,
      };
    }

    if (cardBg.type === "image" && cardBg.imageUrl) {
      return {
        backgroundImage: `url('${cardBg.imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }

    if (cardBg.type === "image+gradient" && cardBg.imageUrl) {
      return {
        backgroundImage: `linear-gradient(${cardBg.gradientDirection || "to bottom right"}, ${
          cardBg.gradientFrom || ""
        }, ${cardBg.gradientTo || ""}), url('${cardBg.imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }

    if (cardBg.type === "image+color" && cardBg.imageUrl) {
      return {
        backgroundImage: `linear-gradient(${cardBg.color || "#ffffff"}, ${cardBg.color || "#ffffff"}), url('${cardBg.imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }

    return { backgroundColor: cardBg.color || "#ffffff" };
  };

  const getCardBackgroundHover = (item) => {
    const cardBgHover = item?.cardBgHover || {};

    if (cardBgHover.type === "gradient") {
      return {
        background: `linear-gradient(${cardBgHover.gradientDirection || "to bottom right"}, ${
          cardBgHover.gradientFrom || "#667eea"
        }, ${cardBgHover.gradientTo || "#764ba2"})`,
      };
    }

    if (cardBgHover.type === "image" && cardBgHover.imageUrl) {
      return {
        backgroundImage: `url('${cardBgHover.imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }

    if (cardBgHover.type === "image+gradient" && cardBgHover.imageUrl) {
      return {
        backgroundImage: `linear-gradient(${cardBgHover.gradientDirection || "to bottom right"}, ${
          cardBgHover.gradientFrom || ""
        }, ${cardBgHover.gradientTo || ""}), url('${cardBgHover.imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }

    if (cardBgHover.type === "image+color" && cardBgHover.imageUrl) {
      return {
        backgroundImage: `linear-gradient(${cardBgHover.color || "#ffffff"}, ${cardBgHover.color || "#ffffff"}), url('${cardBgHover.imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }

    return { backgroundColor: cardBgHover.color || "#ffffff" };
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
    <div className="py-8" style={getBackgroundStyle()}>
      <div className="container max-w-full mx-auto px-25 ">
        <div className="text-center mb-4">
          <h2
            className={`font-bold leading-tight ${sizeH[title?.level]}`}
            style={{ color: title?.color }}
          >
            {title?.content}
          </h2>
          <p
            className={`mt-2 leading-relaxed px-4 ${sizeH[subtitle?.level]}`}
            style={{ color: subtitle?.color }}
          >
            {subtitle?.content}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {Array.isArray(card) &&
            card.map((item, idx) => {
              return (
                <a
                  key={idx}
                  href={item?.url}
                  className="group relative block w-full h-100 rounded-xl overflow-hidden cursor-pointer shadow-lg transition-transform duration-300 hover:-translate-y-2"
                >
                  <div
                    className="absolute inset-0 w-full h-full bg-cover "
                    style={getCardBackgroundStyle(item)}
                  ></div>
                  <div
                    className="absolute inset-0 w-full h-full bg-cover opacity-0 transition-opacity duration-500 ease-out will-change-[opacity] group-hover:opacity-100"
                    style={getCardBackgroundHover(item)}
                  ></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-start">
                    <div className="tranform translate-y-0">
                      <h3
                        className={`font-bold mb-0 group-hover:mb-3 transition-all duration-300 ${sizeH[item?.title?.level]}`}
                        style={{ color: item?.title?.color }}
                      >
                        {item?.title?.content}
                      </h3>
                      <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                        <p
                          className={`line-clamp-3 mb-4 ${sizeH[item?.subtitle?.level]}`}
                          style={{ color: item?.subtitle?.color }}
                        >
                          {item?.subtitle?.content}
                        </p>
                        <span className="inline-block text-blue-600 font-bold text-lg">
                          Xem chi tiết →
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default AdminServices;
