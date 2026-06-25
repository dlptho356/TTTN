const NewsContent = (props) => {
  const { background = {}, title = {}, newsContainer = [] } = props || {};

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
    <div className="py-25" style={getBackgroundStyle()}>
      <div className="max-w-[80%] m-auto">
        <div className="flex justify-between items-center border-b border-black/6 mb-12.5 pb-4">
          <p
            className={`font-bold ${sizeH[title?.level]}`}
            style={{ color: title?.color || "" }}
          >
            {title?.content}
          </p>
          <a
            href="#"
            className="flex flex-row gap-1 group font-bold text-[#0B355B] duration-300 hover:text-[#f43f5e]"
          >
            Xem thêm
            <span className="transition-all duration-300 group-hover:translate-x-3 hover:">
              &rarr;
            </span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6  gap-7.5">
          {Array.isArray(newsContainer) &&
            newsContainer.map((item, idx) => {
              const topNews = idx < 2;

              const layoutSpan = topNews
                ? "md:col-span-3 col-span-1"
                : "md:col-span-2 col-span-2";

              const specifyComponents = () => {
                if (topNews) {
                  return (
                    <span className="absolute top-3.75 right-3.75 bg-[linear-gradient(135deg,#ffd700_0%,#f59e0b_100%)] text-[#0B5077] font-semibold rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)] px-3 py-1">
                      Mới nhất
                    </span>
                  );
                } else {
                  return (
                    <a
                      href="#"
                      className="absolute flex bottom-5 right-6 w-8 h-8 rounded-full bg-[#f1f5f9] text-[#0B5077] items-center justify-center transition-all duration-300 group-hover:text-[#f1f5f9] group-hover:bg-[#0B5077]"
                    >
                      ➔
                    </a>
                  );
                }
              };

              return (
                <div
                  key={idx}
                  className={`group flex flex-col max-w-full relative overflow-hidden bg-[#FFFFFF] border border-solid border-[#eef3f7] shadow-[0_10px_30px_rgba(0,0,0,0.04)] rounded-4xl ${layoutSpan} transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-[#dbeafe]`}
                >
                  <img
                    src={item?.imageUrl || ""}
                    className="w-full h-55 object-cover overflow-clip clip-margin-[content-box] transform duration-300 group-hover:scale-105"
                  />
                  {specifyComponents()}
                  <div className="flex flex-col p-6">
                    <p className="text-[#64748b] mb-2.5">{item?.date}</p>
                    <p
                      className={`font-bold mb-3 ${sizeH[item?.title?.level]}`}
                      style={{ color: item?.title?.color || "#0B5077" }}
                    >
                      {item?.title?.content}
                    </p>
                    <p
                      className={`mb-5 ${sizeH[item?.subtitle?.level]}`}
                      style={{ color: item?.subtitle?.color || "#64748b" }}
                    >
                      {item?.subtitle?.content}
                    </p>
                    <a
                      href="#"
                      className="flex flex-row gap-1 group/a font-bold text-[#0B355B] duration-300 hover:text-[#f43f5e]"
                    >
                      Xem thêm
                      <span className="transition-all duration-300 group-hover/a:translate-x-3">
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default NewsContent;
