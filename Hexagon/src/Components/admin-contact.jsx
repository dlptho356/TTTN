const AdminContact = (props) => {
    const {
        background = {},
        title = {},
        subtitle = {},
        contactAddress = [],
        social = [],
        Map = {}
    } = (props) || {}

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

    const getSocialBackgroundStyle = (item) => {
        const bgSC = item?.SocialBackground || {};

        if (bgSC.type === "gradient") {
        return {
            background: `linear-gradient(${bgSC.gradientDirection || "to bottom right"}, ${bgSC.gradientFrom || "#667eea"}, ${bgSC.gradientTo || "#764ba2"})`,
        };
        }

        if (bgSC.type === "image" && bgSC.imageUrl) {
        return {
            backgroundImage: `url('${bgSC.imageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        };
        }

        if (bgSC.type === "gif" && bgSC.gif) {
        return {
            backgroundImage: `url('${bgSC.gif}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        };
        }
        return { backgroundColor: bgSC.color || "#1b5078" };
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
        className="py-10 md:py-24"
        style={getBackgroundStyle()}
        >
            <div className="container max-w-full w-ful mx-auto px-4 md:px-20 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <div className="flex flex-col md:mt-10 gap-6">
                        <div className="">
                            <h2 
                            className={`font-bold mb-2 ${sizeH[title?.level]}`}
                            style={{color: title?.color}}
                            >
                                {title?.content}
                            </h2>

                            <p 
                            className={`leading-relaxed ${sizeH[subtitle?.level]}`}
                            style={{color: subtitle?.color}}
                            >
                                {subtitle?.content}        
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 mt-2">
                            {Array.isArray(contactAddress) && contactAddress.map((item, idx) => {

                                return (
                                    <div 
                                    key={idx}
                                    className="flex items-center gap-4 "
                                    >
                                        <div 
                                        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-(--dynamic-color)/40 bg-(--dynamic-color)/10"
                                        style={{
                                            '--dynamic-color': item?.icon?.color ,
                                        }}
                                        >
                                            <span 
                                            className="w-5 h-5 items-center justify-center flex"
                                            style={{color: item?.icon?.color}}
                                            >
                                                {item?.icon?.url}    
                                            </span>                    
                                        </div>
                                        <div className="">
                                            <p 
                                            className={`font-semibold ${sizeH[item?.title?.content]}`}
                                            style={{color: item?.title?.color}}
                                            >
                                                {item?.title?.content}
                                            </p>
                                            <p 
                                            className={` ${sizeH[item?.subtitle?.content]}`}
                                            style={{color: item?.subtitle?.color}}
                                            >
                                                {item?.subtitle?.content}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 border-t border-gray-200 pt-6">
                            {Array.isArray(social) && social.map((item, idx) => {

                                return (
                                    <a 
                                    key={idx}
                                    href={item?.url} 
                                    className={`px-4 py-1.5 font-bold rounded-lg transition-all duration-300 border border-(--dynamic-color)/101 shadow-sm  hover:brightness-150 ${sizeH[item?.text?.level]}`}
                                    style={{
                                        ...getSocialBackgroundStyle(item),
                                        '--dynamic-color': item?.SocialBackground?.color,
                                        color: item?.text?.color
                                    }}
                                    >
                                        {item?.text?.content}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-full h-full min-h-100 rounded-lg overflow-hidden shadown-xl">
                        <div className="relative text-right w-full h-full ">
                            <div className="overflow-hidden bg-none w-full h-full ">
                                <iframe 
                                src={Map?.embedUrl || Map?.url || ""} 
                                className="w-full h-full"
                                title={"Google Map"}
                                loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminContact