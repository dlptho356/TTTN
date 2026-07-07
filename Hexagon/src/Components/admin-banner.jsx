import { TypeAnimation } from "react-type-animation";
import { IoIosArrowDown } from "react-icons/io";

// import { useMemo } from 'react';
const AdminBanner = (props) => {
  const {
    background = {},
    imgUrl,
    eyebrow = {},
    title1 = {},
    title2 = {},
    subtitle = {},
    button = [],
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
  
  const getBtnBgStyle = (item) => {
    const btnbg = item?.buttonBg || {};

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
      background: btnbg?.color || "",
    };
  };

  const getHoverClass = (item) => {
    const btnbg = item?.buttonBg || {};
    const type = btnbg?.type || "color";

    switch (type) {
      case "gradient":
        return "hover:brightness-110 hover:shadow-yellow-500/30";
      case "image":
      case "gif":
        return "hover:scale-105 hover:brightness-110";
      case "color":
      default:
        return "hover:bg-white/20!";
    }
  };

  const title1Array = Array.isArray(title1) ? title1 : [];
  let animationSequence = [];
  let safeStringKey = "";

  if (title1Array.length > 0) {
    const validItems = title1Array.filter(
      (item) => item && (item.text || item.timeset || item.timset),
    );

    animationSequence = validItems.flatMap((item) => [
      item.text || "",
      Number(item.timeset || item.timset) || 1000,
    ]);

    safeStringKey = validItems
      .map((item) => `${item.text || ""}-${item.timeset || item.timset || ""}`)
      .join("|");
  }

  const sizeH = {
    1: "text-5xl",
    2: "text-4xl",
    3: "text-3xl",
    4: "text-2xl",
    5: "text-xl",
    6: "text-lg",
  };

  const getTitle2Style = () => {
    if (title2?.textColorType === "gradient") {
      return {
        background: `linear-gradient(${title2?.gradientAngle || "135deg"}, ${title2?.gradientColor1 || "#ffffff"}, ${title2?.gradientColor2 || "#a8e6d8"}, ${title2?.gradientColor3 || "#F7931E"})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        display: "inline-block",
      };
    }
    return {
      color: title2?.color || "#ffffff",
    };
  };

  const sharedColor = title1Array?.[0]?.color ?? "#ffffff";
  const sharedLevel = title1Array?.[0]?.level;

  return (
    <div
      className="h-182.25 flex relative pt-24 pb-12 overflow-hidden items-center justify-center"
      style={getBackgroundStyle()}
    >
      <div className="w-full mx-auto px-4 relative h-145 flex justify-center">
        <div className="grid grid-cols-2 gap-12 w-[93%] ">
          <div className="py-10 ">
            <div
              className={`font-bold mb-5 rounded-full bg-yellow-500/10 border border-yellow-500/50 backdrop-blur-sm px-4 py-1.5 inline-block`}
              style={{ color: eyebrow?.color }}
            >
              {eyebrow?.content}
            </div>
            <div className="flex-1">
              {animationSequence.length > 0 && (
                <TypeAnimation
                  key={safeStringKey}
                  sequence={animationSequence}
                  wrapper="span"
                  speed={50}
                  className={`w-full h-auto mb-3 ${sizeH[sharedLevel]}`}
                  style={{
                    display: "inline-block",
                    fontWeight: "bold",
                    color: sharedColor,
                    lineHeight: "1.2",
                  }}
                  repeat={Infinity}
                />
              )}
            </div>
            <span
              className={`font-bold w-full h-auto mb-5 ${sizeH[title2?.level]}`}
              style={getTitle2Style()}
            >
              {title2?.content}
            </span>
            <div
              className={` ${sizeH[subtitle?.level]}`}
              style={{ color: subtitle?.color }}
            >
              {subtitle?.content}
            </div>
            <div className="flex flex-row pt-4 gap-4 w-full h-auto">
              {Array.isArray(button) &&
                button.map((item, idx) => (
                  <div
                    key={idx}
                    className={`px-8 py-3.5 mx-0 rounded-lg ${sizeH[item?.level]} border border-white/10 transition-all duration-300 ${getHoverClass(item)} `}
                    style={{ ...getBtnBgStyle(item), color: item?.colorText }}
                  >
                    <a href={item?.url}>{item?.content}</a>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src={imgUrl} className="w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-8 flex justify-center animate-bounce z-20">
        <a
          href="/gioithieu"
          className="text-gray-300 flex flex-col items-center gap-1 transition-colors hover:text-white"
        >
          <span className="text-sm font-medium tracking-wide">
            Cuộn xuống để khám phá
          </span>
          <span className="">
            <IoIosArrowDown />
          </span>
        </a>
      </div>
    </div>
  );
};
export default AdminBanner;
