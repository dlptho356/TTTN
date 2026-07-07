const AdminNews = (props) => {
    const {
        background ={},
        title = {},
        subtitle = {},
        newsContainer = [],
        button = {},
    } = (props) || {}

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
        background: "linear-gradient(135deg, #00c6ff, #0072ff)",
        boxShadow: "0 10px 25px rgba(0, 114, 255, 0.35)",
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
    <div className="py-10 md:py-16" style={getBackgroundStyle()}>
      <div className="container w-full mx-auto px-4 ">
        <div className="text-center mb-8 md:mb-12">
          <h2
            className={`font-bold leading-tight ${sizeH[title?.level]}`}
            style={{ color: title?.color || "" }}
          >
            {title?.content}
          </h2>
          <p
            className={`mt-2 leading-relaxed px-4  ${sizeH[subtitle?.level]}`}
            style={{ color: subtitle?.color || "" }}
          >
            {subtitle?.content}
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {Array.isArray(newsContainer) &&
            newsContainer.map((item, idx) => {
              const topNews = idx < 2;

              const layoutSpan = topNews
                ? "md:col-span-3 col-span-1"
                : "md:col-span-2 col-span-2";
              
              const DateIcon = () => (
                <svg class="w-3 h-3 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              )  

              return (
                <a
                  key={idx}
                  className={`cursor-pointer group flex flex-col max-w-full overflow-hidden bg-[#FFFFFF] border border-gray-200 shadow-sm rounded-xl ${layoutSpan} transition-all duration-300 hover:shadow-md hover:border-yellow-400/50`}
                  href={item?.url}
                >
                  <div className="overflow-hidden md:h-48 h-52">
                      <img
                        src={item?.imageUrl || ""}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                  </div>
                  <div className="flex flex-col p-5 flex-1">
                    <h3
                      className={`font-bold mb-2 line-clamp-2 group-hover:text-yellow-600! transition-colors leading-snug ${sizeH[item?.title?.level]}`}
                      style={{ color: item?.title?.color || "#0B5077" }}
                    >
                      {item?.title?.content}
                    </h3>
                    <p
                      className={`mb-4 leading-relaxed line-clamp-3 flex-1 ${sizeH[item?.subtitle?.level]}`}
                      style={{ color: item?.subtitle?.color || "#64748b" }}
                    >
                      {item?.subtitle?.content}
                    </p>
                    <div className="pt-3 flex items-center justify-between border-t border-gray-100 mt-auto">
                        <div className="flex items-center gap-3 text-gray-400 text-xs">
                            <span className="flex items-center gap-1">
                                <DateIcon />
                                {item?.date}
                            </span>
                        </div>
                        <span
                          className=" font-semibold text-yellow-600 group-hover:underline"
                        >
                          Xem chi tiết
                            &rarr;
                        </span>
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
        <div className="text-center mt-10">
            <a 
            href={button?.url} 
            className="inline-flex items-center gap-2 px-8 py-3 font-bold rounded-lg hover:ring-2 hover:ring-green-500 transition-all duration-200"
            style={{...getBtnBgStyle(), color: button?.colorText}}
            >
                {button?.content}
            </a>
        </div>    
      </div>
    </div>
    )
}
export default AdminNews