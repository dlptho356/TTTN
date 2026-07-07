/* eslint-disable react-hooks/static-components */
import { useEffect, useState } from "react";
const AdminHeader = (props) => {
  const {
    background = {},
    backgroundAfterScroll,
    title = {},
    logo,
    navBar = [],
  } = props || {};

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    if (isScrolled) {
      return {
        backgroundColor: backgroundAfterScroll || "#044f40f2",
      }; /* lỗi không nhận được màu afterscroll */
    }

    return { backgroundColor: bg.color };
  };

  const sizeH = {
    1: "text-5xl",
    2: "text-4xl",
    3: "text-3xl",
    4: "text-2xl",
    5: "text-xl",
    6: "text-lg",
  };

  const VnFlag = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
      className="w-6 h-4 object-cover rounded-sm shrink-0"
    >
      <defs>
        <clipPath id="vn-a">
          <path fillOpacity=".7" d="M-85.3 0h682.6v512H-85.3z"></path>
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        clipPath="url(#vn-a)"
        transform="translate(80)scale(.9375)"
      >
        <path fill="#da251d" d="M-128 0h768v512h-768z"></path>
        <path
          fill="#ff0"
          d="M349.6 381 260 314.3l-89 67.3L204 272l-89-67.7 110.1-1 34.2-109.4L294 203l110.1.1-88.5 68.4 33.9 109.6z"
        ></path>
      </g>
    </svg>
  );
  const EnFlag = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
      className="w-6 h-4 object-cover rounded-sm shrink-0"
    >
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path
        fill="#fff"
        d="m75 0 244 181L562 0h78v45L403 240l237 195v45h-75L320 299 78 480H0v-45l234-195L0 45V0h75z"
      />
      <path
        fill="#C8102E"
        d="m0 0 274 203V0h92v203L606 0h34v25L399 240l241 199v41h-36L366 277v203h-92V277L37 480H0v-26l243-201L0 25V0h0z"
      />
      <path fill="#fff" d="M240 0h160v480H240zM0 160h640v160H0z" />
      <path fill="#C8102E" d="M267 0h106v480H267zM0 187h640v106H0z" />
    </svg>
  );

  return (
    <header
      className={`h-20 w-full z-50 fixed top-0 left-0 flex items-center justify-center transition-colors duration-300 backdrop-blur-xl`}
      style={getBackgroundStyle()}
    >
      <nav className="h-20 w-full flex items-center justify-between py-2 px-15">
        <div className="flex flex-row items-center justify-between gap-4">
          <a href="/" className="h-16 w-16">
            <img
              src={logo}
              className="max-w-full h-auto overflow-clip"
              alt="logo"
            />
          </a>
          <h1
            className={`font-bold ${sizeH[title.level] || "text-xl"}`}
            style={{ color: title.color }}
          >
            {title?.content}
          </h1>
        </div>

        <div className="flex items-center justify-between gap-10">
          <div className="flex items-center gap-5">
            {Array.isArray(navBar) &&
              navBar.map((item, idx) => {
                return (
                  <a
                    key={idx}
                    href={item?.url}
                    className={`transition-colors duration-300 hover:text-[#fbbf24]! ${sizeH[item?.level]}`}
                    style={{ color: item?.color }}
                  >
                    {item?.content}
                  </a>
                );
              })}
          </div>
          <div className="flex items-center gap-2">
            <button className="cursor-pointer">
              <VnFlag />
            </button>
            <button className="cursor-pointer">
              <EnFlag />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
