import CountUpNumb from "./countUp";

const sectionNumbers = (props) => {
  const { background = {}, title = {}, numbersContainer = [] } = props || {};

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
    <div
      className="w-full relative py-27.5 overflow-hidden"
      style={getBackgroundStyle()}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-187.5  max-w-full h-full bg-contain bg-no-repeat bg-center mix-blend-screen opacity-80 pointer-events-none z-1"
        style={{ backgroundImage: "url('/Gif/hoa.webp')" }}
      ></div>
      <div className="relative h-auto flex flex-col items-center justify-center z-2 m-auto w-[90%]">
        <div
          className={`font-bold px-5 mb-17.5 shadow-[0, 1px, 2px, rgba(255, 255, 255, 0.5)] ${sizeH[title?.level]}`}
          style={{ color: title?.color || "" }}
        >
          {title?.content}
        </div>
        <div className="md:flex h-auto px-5 py-2.5 grid grid-cols-[repeat(2,1fr)] gap-7.5 items-center justify-center">
          {Array.isArray(numbersContainer) &&
            numbersContainer.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center"
                >
                  <CountUpNumb
                    contentNumber={item?.number?.content}
                    duration={2}
                    className={`font-bold font-['Georgia','Playfair_Display','Times_New_Roman',serif] ${sizeH[item?.number?.level]}`}
                  />

                  <p
                    className={`font-semibold ${sizeH[item?.subtitle?.level]} `}
                    style={{ color: item?.subtitle?.color || "" }}
                  >
                    {item?.subtitle?.content}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default sectionNumbers;
