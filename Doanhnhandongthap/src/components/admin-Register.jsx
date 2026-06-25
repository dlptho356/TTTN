const AdminRegister = (props) => {
  const {
    background = {},
    title = {},
    contact = [],
    registerButton = {},
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
    <div
      className="h-142 pt-16 pb-24 md:pt-25 md:pb-40 text-center relative overflow-hidden bg-center bg-cover bg-no-repeat"
      style={getBackgroundStyle()}
    >
      <div
        className="absolute inset-0 max-w-full min-h-screen bg-cover bg-no-repeat bg-center overflow-hidden z-1"
        style={{ backgroundImage: "url('/Background/bg-lienhe.png')" }}
      ></div>

      <div className="relative max-w-[90%] m-auto z-10">
        <div
          className={`font-bold text-center whitespace-pre-line ${sizeH[title?.level]}`}
          style={{ color: title?.color || "" }}
        >
          {title?.content}
        </div>
        <div className="flex gap-7.5 justify-center m-11.25 flex-wrap">
          {Array.isArray(contact) &&
            contact.map((item, idx) => {
              return (
                <a
                  key={idx}
                  href={item?.url}
                  className="bg-[#ffffffbf] border-[#ffffffbf] py-3.5 px-7.5 rounded-[40px] flex items-center gap-4 no-underline shadow-[0_4px_20px_rgba(0,0,0,0.05)] transiton-all duration-300 hover:-translate-y-3 hover:shadow-[0_10px_25px_rgba(0, 0, 0, 0.1)] hover:bg-[#ffffff]"
                >
                  <span>{item?.icon}</span>
                  <span className="text-[#0000001a]">|</span>
                  <span className="font-bold text-[#0B5077]">
                    {item?.content}
                  </span>
                </a>
              );
            })}
        </div>
        <button className="bg-linear-to-br from-[#0f2e5c] to-[#0d5c8a] text-white border-none py-4 px-11.25 text-[15px] font-bold rounded-[40px] cursor-pointer shadow-[0_8px_25px_rgba(15,46,92,0.25)] transiton-all duration-300 hover:-translate-y-3 hover:shadow-[0_15px_35px_rgba(15,46,92,0.45)]">
          {registerButton?.content}
        </button>
      </div>
    </div>
  );
};
export default AdminRegister;
