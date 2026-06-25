const AdminSectionComunity = (props) => {
  const { background = {}, title = {}, ComContainer = [] } = props || {};

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
    <div
      className="py-25 h-auto "
      style={
        getBackgroundStyle() /*{{backgroundImage: "url('/Background/bg-giatri.png')"}}*/
      }
    >
      <div className="max-w-[80%] m-auto  ">
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

        <div className="flex-col flex h-auto gap-5 relative md:w-122.5 md:h-170 ">
          {Array.isArray(ComContainer) &&
            ComContainer.map((item, idx) => {
              const place = () => {
                if (idx == 0) {
                  return "md:top-13 md:left-0 z-1 top-auto left-auto";
                } else if (idx == 1) {
                  return "md:-top-5 md:left-70 z-2 top-auto left-auto";
                } else if (idx == 2) {
                  return "md:top-90 md:left-35.5 z-3 top-auto left-auto";
                }
              };

              return (
                <div
                  key={idx}
                  className={`relative group md:absolute flex flex-col py-5 px-3 items-center justify-center w-65 h-90 bg-[#ffffff80] backdrop-blur-xl border border-[#ffffffd1] rounded-tl-[70px] rounded-br-[70px] rounded-tr-[15px] rounded-bl-[15px] ${place()} transition-all duration-300 hover:-translate-y-2 hover:bg-[#ffffffb3] hover:shadow-[0_22px_52px_rgba(12,74,115,0.16)]`}
                >
                  <div className="w-27.5 h-27.5 shrink-0 rounded-full bg-[#FFFFFF] flex items-center justify-center my-4 transform duration-300 group-hover:scale-105">
                    <img
                      src={item?.imageUrl || ""}
                      className="w-25 h-25 object-fit "
                    />
                  </div>

                  <div className="flex flex-col items-center justify-center p-4 gap-2 text-center">
                    <p
                      className={`font-bold mb-3 ${sizeH[item?.title?.level]}`}
                      style={{ color: item?.title?.color || "#0b4c8c" }}
                    >
                      {item?.title?.content}
                    </p>
                    <p
                      className={`mb-5 ${sizeH[item?.subtitle?.level]}`}
                      style={{ color: item?.subtitle?.color || "#334155" }}
                    >
                      {item?.subtitle?.content}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default AdminSectionComunity;
