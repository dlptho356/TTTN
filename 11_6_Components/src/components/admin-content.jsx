// import React from 'react';

export const ContainerRadiusFields = ({ value = [], onChange }) => {
  const sides = [
    { label: "Trên Trái", class: "rounded-tl-[100px]" },
    { label: "Trên Phải", class: "rounded-tr-[100px]" },
    { label: "Dưới Trái", class: "rounded-bl-[100px]" },
    { label: "Dưới Phải", class: "rounded-br-[100px]" },
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

const AdminContent = (props) => {
  const { container = {}, background = {}, children } = props || {};
  const layout = container?.containerLayout || {};
  const eyebrow = container?.eyebrow || {};
  const headding = container?.headding || {};
  const subtitle = container?.subtitle || {};
  const containerRadius = container?.containerRadius || [];

  const button = container?.button || {};
  const containerSideClasses = containerRadius.join(" ");

  const buttonRadius = container?.button?.buttonRadius || [];
  const buttonSideClasses = buttonRadius.join(" ");

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

  const getBtnBgStyle = () => {
    const btnbg = button?.buttonBg || {};

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

    return { 
      background: 'linear-gradient(135deg, #00c6ff, #0072ff)',
      boxShadow: '0 10px 25px rgba(0, 114, 255, 0.35)'
    };
  };

  const sizeH = {
    0: 'text-7xl',
    1: 'text-5xl',
    2: 'text-4xl',
    3: 'text-3xl',
    4: 'text-2xl',
    5: 'text-xl',
    6: 'text-lg',
  };

  const align = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end',
  };

  return (
    <div
      className={`flex flex-col justify-center p-20 h-137.5 w-full ${align[layout.align]}`}
      style={getBackgroundStyle()}
    >
      <div
        className={`w-max md:w-150 h-auto bg-[#ffffff1f] backdrop-blur-[30px] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] border border-white flex flex-col p-4 ${containerSideClasses}`}
      >
        <p
          className={`px-4 my-3 h-auto text-wrap ${sizeH[eyebrow.level]}`}
          style={{ color: eyebrow.color || '#000000', fontWeight: 600 }}
        >
          {eyebrow.content}
        </p>
        <div className="text-wrap">
          <h1
            className={`px-4 mb-3 h-22 font-bold ${sizeH[headding.level]}`}
            style={ 
              headding?.color && headding.color !== '#000000' 
              ? {
                color: headding?.color
              } 
              : {
              fontsize: '80px',
              display: 'inline-block',
              filter: 'drop-shadow(0 0 12px rgba(255, 215, 0, 0.45))',
              background: 'linear-gradient(135deg, #ffffff 30%, var(--color-accent-gold, #FFE066) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }
            }
          >
            {headding.content}
          </h1>
        </div>
        <p
          className={`px-4 text-wrap ${sizeH[subtitle.level]}`}
          style={{ color: subtitle.color || '#000000', fontWeight: 600 }}
        >
          {subtitle.content}
        </p>
        <div className="w-full flex justify-center my-5">
          <button
            className={`px-10 w-auto h-15 cursor-pointer text-wrap ${sizeH[button.level]} ${buttonSideClasses} transition-all  :hover-translate-y-[3px] hover:shadow-[0_15px_35px_rgba(0,114,255,0.55)] `}
            style={{
              color: button.colorText || '#FFFFFF',
              fontWeight: 600,
              ...getBtnBgStyle(),
            }}
          >
            <a href={button.url || '#'}>
              {button.content}
            </a>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AdminContent;

