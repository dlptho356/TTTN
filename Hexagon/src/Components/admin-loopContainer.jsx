const AdminLoop = (props) => {
  const { title, background = {}, loopContain = [] } = props || {};

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
    return { backgroundColor: bg.color || "#1b5078" };
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
    <div className="py-9 w-full" style={getBackgroundStyle()}>
      <div className="w-[90%] flex flex-col items-center justify-center mx-auto overflow-hidden">
        <div
          className={`font-bold px-5 mb-7 ${sizeH[title?.level]}`}
          style={{ color: title?.color || "" }}
        >
          {title?.content}
        </div>
        <div
          className="relative flex w-full overflow-hidden group
                    before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-1/12 before:pointer-events-none
                    before:bg-linear-to-r before:from-[#12846d] before:to-[#12846d00]

                    after:absolute after:top-0 after:right-0 after:z-10 after:h-full after:w-1/12 after:pointer-events-none
                    after:bg-linear-to-l after:from-[#12846d] after:to-[#12846d00]
                "
        >
          <div className="flex gap-6 shrink-0 animate-[marquee_24s_linear_infinite] group-hover:[animation-play-state:paused] pr-6">
            {Array.isArray(loopContain) &&
              loopContain.map((item, idx) => {
                return (
                  <div
                    key={`row1-${idx}`}
                    className="bg-[#FFFFFF] rounded-2xl w-45 h-27 p-4 flex items-center justify-center hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(10,37,64,0.08)] transition-all duration-300 shrink-0"
                  >
                    <img
                      src={item?.logo}
                      alt=""
                      className="object-contain max-h-16 max-w-35"
                    />
                  </div>
                );
              })}
          </div>
          <div
            className="flex gap-6 shrink-0 animate-[marquee_24s_linear_infinite] group-hover:[animation-play-state:paused] pr-6"
            aria-hidden="true"
          >
            {Array.isArray(loopContain) &&
              loopContain.map((item, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="bg-[#FFFFFF] rounded-2xl w-45 h-27 p-4 flex items-center justify-center hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(10,37,64,0.08)] transition-all duration-300 shrink-0"
                >
                  <img
                    src={item?.logo}
                    alt=""
                    className="object-contain max-h-16 max-w-35"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminLoop;
