import CountUpNumb from "./countUp";

const AdminIntroduce = (props) => {
  const { 
        title = {},
        background = {}, 
        container = {},
        numbersContainer = [],
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
    className="w-full flex items-center justify-center"
    style={getBackgroundStyle()}
    >
        <div className="max-w-[80%] px-15 py-5">
            <div className="text-center mb-12.5">
                <p
                className={`font-bold mb-2.5 ${sizeH[title?.level]}`}
                style={{color: title?.color}}
                >
                    {title?.content}
                </p>
                <div className="w-22.5 h-1 bg-[#f7941d] m-auto rounded-3xl"></div>
            </div>
            <div className="grid grid-cols-2 gap-12.5 items-center">
                <img src="/Introduce/photo-workingdesk.jpg" className="w-full rounded-[14px] object-cover shadow-[0_10px_30px_rgba(0,0,0,0.1)]"/>
                <div className="">
                    <p 
                    className={`mb-5 font-bold ${sizeH[container?.title?.level]}`}
                    style={{color: container?.title?.color}}
                    >
                        {container?.title?.content}
                    </p>
                    <p 
                    className={`mb-4.5`}
                    style={{color: container?.subtitle1?.color}}
                    >
                        {container?.subtitle1?.content}
                    </p>
                    <p 
                    className={`mb-4.5`}
                    style={{color: container?.subtitle2?.color}}
                    >
                        {container?.subtitle2?.content}
                    </p>
                    
                    <div className=" bg-[#f7f8fa] p-6.25 border-l-[5px] border-solid border-[#f7941d] rounded-[10px] mt-5">
                        <p className="grid grid-cols-[auto_1fr] leading-relaxed">
                            <strong className="inline-block! mr-1">{container?.highlightCont?.paragraph1?.keyword}</strong>
                            
                            <span className="inline-block!">{container?.highlightCont?.paragraph1?.content}</span>
                        </p>
                        
                        <p className="grid grid-cols-[auto_1fr] leading-relaxed">
                            <strong className="inline-block! mr-1">{container?.highlightCont?.paragraph2?.keyword}</strong>
                            
                            <span className="inline-block!">{container?.highlightCont?.paragraph2?.content}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-15">
                {Array.isArray(numbersContainer) && numbersContainer.map((item, idx) => {
                    return (
                        <div 
                        key={idx}
                        className="text-center p-7.5 bg-white rounded-[14px] shadow-[0_5px_20px_rgba(0,0,0,0.08)]">
                            <CountUpNumb
                                contentNumber={item?.number?.content}
                                duration={1}
                                className={`font-bold text-[#0f5b94] mb-2.5 ${sizeH[item?.number?.level]}`}
                            />

                            <p
                                className={`font-semibold ${sizeH[item?.subtitle?.level]} `}
                                style={{ color: item?.subtitle?.color || "" }}
                            >
                                {item?.subtitle?.content}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
};
export default AdminIntroduce;
