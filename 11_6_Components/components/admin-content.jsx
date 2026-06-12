import React from 'react';

export const ContainerRadiusFields = ({ value = [], onChange }) => {
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
      <label className="font-semibold uppercase">
          Chọn góc để bo tròn
      </label>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {sides.map((side) => (
          <label key={side.class} className="flex items-center space-x-2 cursor-pointer p-1 hover:bg-gray-50 rounded">
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

    return { backgroundColor: btnbg.color || '#ffffff' };
  }

  const sizeH = {
    1: 'text-5xl',
    2: 'text-4xl',
    3: 'text-3xl',
    4: 'text-2xl',
    5: 'text-xl',
    6: 'text-lg',
  }

  const align = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end'
  }

  return (
    <div className={`flex flex-col justify-center p-20 min-h-165 w-full  ${align[layout.align]}`} style={getBackgroundStyle()}>
      <div className={`w-100 h-60 bg-[#ffffff1f] backdrop-blur-[30px] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]  flex flex-col p-4 ${containerSideClasses}`}>
        <p className={`px-4 my-3 ${sizeH[eyebrow.level]}`} style={{ color: eyebrow.color || '#000000', fontWeight: 'semi-bold' }}>
          {eyebrow.content}
        </p>
        <h1 className={`px-4 mb-3 ${sizeH[headding.level]}`} style={{ color: headding.color || '#000000', fontWeight: 'bold' }}>
          {headding.content}
        </h1>
        <p className={`px-4 ${sizeH[subtitle.level]}`} style={{ color: subtitle.color || '#000000', fontWeight: 'semi-bold' }}>
          {subtitle.content}
        </p>
        <div className="w-full flex justify-center">
          <button className={`px-4 w-33 h-13 ${sizeH[button.level]} ${buttonSideClasses}`} style={{ color: button.colorText || '#000000', fontWeight: 'semi-bold', ...getBtnBgStyle()}}>
            {button.content}
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AdminContent;


