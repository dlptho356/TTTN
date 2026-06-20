const AdminHeader = (props) => {
    const {
        background = {},
        title1 = {},
        title2 = {},
        navbar = [],
        logo,
        children,

    } = (props) || {};

    const getBackgroundStyle = () => {
        const bg = background || {};

        if (bg.type === 'gradient') {
        return {
            background: `linear-gradient(${bg.gradientDirection || 'to bottom right'}, ${bg.gradientFrom || '#667eea'}, ${bg.gradientTo || '#764ba2'})`,
        };
        }

        if (bg.type === 'image' && bg.imageUrl) {
        return {
            backgroundImage: `url('${bg.imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };
        }

        if (bg.type === 'gif' && bg.gif) {
        return {
            backgroundImage: `url('${bg.gif}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };
        }
        return { backgroundColor: bg.color || '#1b5078' };
    };
    
    const sizeH = {
    1: 'text-5xl',
    2: 'text-4xl',
    3: 'text-3xl',
    4: 'text-2xl',
    5: 'text-xl',
    6: 'text-lg',
  };

  return (
    <div className="flex h-35 w-full mx-auto items-center justify-between z-50 p-5" style= {getBackgroundStyle()}>
        <div className="">
            <a href="#" className="flex flex-row gap-5 items-center text-center">
                <img src={logo?.text || ''} alt="Logo" className="w-22 h-22"/>
                <div className="flex flex-col">
                    <span 
                    className={`font-bold ${sizeH[title1?.level]} `}
                    style={{ color: title1?.color }}
                    >
                        {title1?.content}
                    </span>
                    <span 
                    className={`font-bold ${sizeH[title2?.level]}`}
                    style={{ color: title2?.color }}
                    >
                        {title2?.content}
                    </span>
                </div>
            </a>
        </div>
        <div>
            <nav className="flex items-center justify-between gap-5">
                {Array.isArray(navbar) && navbar.map((item, idx) => {
                    const content = item?.content;

                    return (
                        <div
                        key={idx}
                        className="" 
                        style={{color: item?.color}}
                        >
                            {content}
                        </div>
                    )
                })}
            </nav>
        </div>
        <div className="flex h-10 items-center bg-linear-to-b from-[#CBA359] via-[#FBC944] via-18% -via-65% to-[#FCAF14] to-94% rounded-[50px] p-[3px_5px] gap-0.5 shrink-0 cursor-pointer transition-[box-shadow,filter] duration-300 shadow-none filter-none">
            <span className="font-bold text-[#c8860a] cursor-pointer transition-all duration-200 tracking-[0.06em] leading-none flex items-center justify-center w-7 h-7 rounded-full bg-[#5a3200] shrink-0">
                VN
            </span>
            <span className="font-bold text-[#7a4e00] cursor-pointer transition-all duration-200 tracking-[0.04em] leading-none pl-0.5">
                EN
            </span>
        </div>

        {children}
    </div>
  );
}

export default AdminHeader;