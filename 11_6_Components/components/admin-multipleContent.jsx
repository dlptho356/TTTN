export const MultiContainerRadiusFields = ({ value = [], onChange }) => {
  const sides = [
    { label: "Trên Trái", class: "rounded-tl-4xl" },
    { label: "Trên Phải", class: "rounded-tr-4xl" },
    { label: "Dưới Trái", class: "rounded-bl-4xl" },
    { label: "Dưới Phải", class: "rounded-br-4xl" },
  ];

  const toggleSide = (sideClass, isChecked) => {
    if (isChecked) {
      onChange([...value, sideClass]);
    } else {
      onChange(value.filter((s) => s !== sideClass));
    }
  };

  return (
    <div>
      <label className="font-semibold uppercase">Chọn góc để bo tròn</label>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {sides.map((side) => (
          <label
            key={side.class}
            className="flex items-center space-x-2 cursor-pointer p-1 hover:bg-gray-50 rounded"
          >
            <input
              type="checkbox"
              checked={value.includes(side.class)}
              onChange={(e) => toggleSide(side.class, e.target.checked)}
              className="w-4 h-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-xs text-gray-700">{side.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

const AdminMultipleContent = (props) => {
    const {
        headding,
        subtitle,
        container = [],
        background = {},
        children,

    } = props || {};
    
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

        return { backgroundColor: bg.color || '#ffffff' };
    };
    const getBtnBgStyle = (btnbg = {}) => {
        if (btnbg.type === 'gradient') {
            return {
                background: `linear-gradient(${btnbg.gradientDirection || 'to bottom right'}, ${btnbg.gradientFrom || '#667eea'}, ${btnbg.gradientTo || '#764ba2'})`,
            };
        }

        if (btnbg.type === 'image' && btnbg.imageUrl) {
            return {
                backgroundImage: `url('${btnbg.imageUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            };
        }

        if (btnbg.type === 'gif' && btnbg.gif) {
            return {
                backgroundImage: `url('${btnbg.gif}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            };
        }

        return { backgroundColor: btnbg.color || '#ffffff' };
    };
    const sizeH = {
        1: 'text-5xl',
        2: 'text-4xl',
        3: 'text-3xl',
        4: 'text-2xl',
        5: 'text-xl',
        6: 'text-lg',
    };

    // icon size/color options removed — icon will inherit container styles

    const getTextValue = (value) => {
        if (value == null) return '';
        if (typeof value === 'string' || typeof value === 'number') return String(value);
        if (Array.isArray(value)) return value.map(getTextValue).filter(Boolean).join(' ');
        if (typeof value === 'object') {
            const keys = ['content', 'text', 'title', 'label', 'value', 'name'];
            for (const key of keys) {
                if (value[key] != null) {
                    const result = getTextValue(value[key]);
                    if (result) return result;
                }
            }
            for (const key of Object.keys(value)) {
                const result = getTextValue(value[key]);
                if (result) return result;
            }
        }
        return '';
    };

    const defaultIcon = (Array.isArray(container) && container.length && container[0]?.icon) ? container[0].icon : { type: 'text', content: '★' };

    return (
        <div
            className={`flex flex-col px-20 py-5 h-160 w-full`}
            style={getBackgroundStyle()}
        >
            <div className="flex flex-col items-center p-4">
                <h1
                    className={`px-4 mb-3 ${sizeH[headding?.level] || sizeH[2]}`}
                    style={{ color: headding?.color || '#000000', fontWeight: 'bold' }}
                >
                    {headding?.content}
                </h1>

                        {subtitle?.content ? (

                    <p
                        className={`px-4 ${sizeH[subtitle?.level] || sizeH[2]}`}
                        style={{ color: subtitle?.color || '#000000', fontWeight: 600 }}
                    >
                        {subtitle?.content}
                    </p>
                ) : null}
            </div>

            <div className="flex flex-wrap justify-center gap-5">
                {Array.isArray(container) && container.map((item, idx) => {
                        const containerRadius = item?.containerRadius || [];

                        const containerSideClasses = containerRadius.join(' ');
                        const title = item?.title || item?.container?.title || item?.container || item || {};
                        const iconData = item?.icon || item?.container?.icon || defaultIcon;
                        const buttonData = item?.button || item?.container?.button || {};
                        const button = {
                            content: 'Văn bản',
                            url: '#',
                            colorText: '#000000',
                            level: 4,
                            buttonBg: { type: 'color', color: '#fde047' },
                            buttonRadius: [],
                            ...buttonData,
                        };

                        return (
                            <div
                                key={idx}
                                className={`w-max md:w-85 h-50 bg-[#ffffff1f] backdrop-blur-[30px] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] flex flex-col items-center justify-center p-4 ${containerSideClasses}`}
                            >
                                {iconData ? (
                                    iconData.type === 'image' && iconData.imageUrl ? (
                                        <div className="mb-3" style={{ backgroundColor: 'inherit' }}>
                                            <img
                                                src={iconData.imageUrl}
                                                alt={getTextValue(iconData.content) || 'icon'}
                                                className="h-16 w-16 object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <div className="mb-3" style={{ backgroundColor: 'inherit', color: title?.color || '#000000' }}>
                                            {getTextValue(iconData.content) }
                                        </div>
                                    )
                                ) : null}
                                <div
                                    className={`mb-3 ${sizeH[title?.level] || sizeH[2]}`}
                                    style={{ color: title?.color || '#000000', fontWeight: 'bold' }}
                                >
                                    {(() => {
                                        const v = getTextValue(title?.content ?? title);
                                        return v || 'Tiêu đề';
                                    })()}
                                </div>


                                <button
                                    className={`px-4 w-33 h-13 ${sizeH[button?.level]} ${button?.buttonRadius?.join?.(' ') || ''}`}
                                    style={{
                                        color: button?.colorText || '#000000',
                                        fontWeight: 600,
                                        ...getBtnBgStyle(button?.buttonBg),
                                    }}
                                    type="button"
                                >
                                    <a href={button?.url || '#'}>{getTextValue(button?.content) || 'Văn bản'}</a>
                                </button>


                            </div>
                        );
                    })}
            </div>

            {children}
        </div>
    );
};

export default AdminMultipleContent;