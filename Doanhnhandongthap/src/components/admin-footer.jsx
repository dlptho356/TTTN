const AdminFooter = (props) => {
  const {
    background = {},
    address = {},
    navLink = {},
    elseCol = {},
  } = props || {};

  const navli = navLink?.li;
  const elseLi = elseCol?.li;
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
      className="relative w-full overflow-hidden"
      style={getBackgroundStyle()}
    >
      <div className="max-w-[90%] relative m-auto pt-30">
        <div className="grid grid-cols-[42%_28%_30%] gap-10 pb-25 mb-0">
          <div className="flex flex-col">
            <a
              href="#"
              className="flex flex-row gap-5 items-center text-center mb-5"
            >
              <img
                src={address?.logo?.text || ""}
                alt="Logo"
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <span
                  className={`font-bold ${sizeH[address?.title1?.level]} `}
                  style={{ color: address?.title1?.color }}
                >
                  {address?.title1?.content}
                </span>
                <span
                  className={`font-bold ${sizeH[address?.title2?.level]}`}
                  style={{ color: address?.title2?.color }}
                >
                  {address?.title2?.content}
                </span>
              </div>
            </a>
            <p className="text-[12px] font-semibold text-[#1a237e] text-left tracking-[0.08em] mb-3.5 ">
              TRỤ SỞ CHÍNH
            </p>
            <div className="flex flex-col gap-3.5">
              <div className="flex gap-2.5 items-start color-[#1a237e]">
                <span className="flex items-center justify-center shrink-0 mt-0.5">
                  <img className="w-5 h-5 block" src={address?.gps?.logo} />
                </span>
                <span>{address?.gps?.content}</span>
              </div>
              <div className="flex gap-2.5 items-start color-[#1a237e]">
                <span className="flex items-center justify-center shrink-0 mt-0.5">
                  <img src={address?.email?.logo} className="w-5 h-5 block" />
                </span>
                <span>{address?.email?.content}</span>
              </div>
              <div className="flex gap-2.5 items-start color-[#1a237e]">
                <span className="flex items-center justify-center shrink-0 mt-0.5">
                  <img src={address?.phone?.logo} className="w-5 h-5 block" />
                </span>
                <span>{address?.phone?.content}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-[#1a237e] mb-5 font-bold">{navLink?.title}</p>
            <ul className="flex flex-col gap-3 p-0 m-0">
              {Array.isArray(navli) &&
                navli.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <a
                        href={item?.url}
                        className="text-[#1a237e] transition-all hover:text-[#e91e8c] hover:pl-1"
                      >
                        {item?.content}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="flex flex-col">
            <p className="text-[#1a237e] mb-5 font-bold">{elseCol?.title}</p>
            <ul className="flex flex-col gap-3 p-0 m-0">
              {Array.isArray(elseLi) &&
                elseLi.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <a
                        href={item?.url}
                        className="text-[#1a237e] transition-all hover:text-[#e91e8c] hover:pl-1"
                      >
                        {item?.content}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <hr className="border-t-white" />

        <div className="flex justify-between items-center flex-wrap gap-4 py-5">
          <p className="text-[12px] text-[#f5f6fa] m-0">
            Copyright © CLB Doanh nhan Dong Thap. All rights reserved
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex items-center justify-center transition-all duration-300 hover:-translate-y-3"
            >
              <img
                src="/social/facebook.svg"
                alt="facebook"
                className="w-6 h-6 object-contain"
              />
            </a>
            <a
              href="#"
              className="flex items-center justify-center transition-all duration-300 hover:-translate-y-3"
            >
              <img
                src="/social/tiktok.png"
                alt="facebook"
                className="w-6 h-6 object-contain"
              />
            </a>
            <a
              href="#"
              className="flex items-center justify-center transition-all duration-300 hover:-translate-y-3"
            >
              <img
                src="/social/youtube.png"
                alt="facebook"
                className="w-6 h-6 object-contain"
              />
            </a>
            <a
              href="#"
              className="flex items-center justify-center transition-all duration-300 hover:-translate-y-3"
            >
              <img
                src="/social/linkedin.svg"
                alt="facebook"
                className="w-6 h-6 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminFooter;
