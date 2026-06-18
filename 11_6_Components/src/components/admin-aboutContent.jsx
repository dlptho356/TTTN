import { useMemo, useState } from 'react';


export const AboutContainerRadiusFields = ({ value = [], onChange }) => {
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

const pageSize = 3;

const Info = ({ infoItems = [] }) => {
  const allInfo = useMemo(() => (Array.isArray(infoItems) ? infoItems : []), [infoItems]);
  const pageCount = Math.max(1, Math.ceil(allInfo.length / pageSize));
  const [page, setPage] = useState(0);

  const infoData = useMemo(() => {
    const start = page * pageSize;
    return allInfo.slice(start, start + pageSize);
  }, [allInfo, page]);


  return (
    <div className="flex flex-col h-auto p-4 gap-4">
      <div className="flex flex-col h-105 gap-4">
        {infoData.map((info, idx) => (
          <div
            key={idx}
            className="w-full bg-[#ffffff1f] backdrop-blur-[30px] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] flex items-start gap-4 p-4 overflow-hidden rounded-l-[100px] hover:-translate-y-0.75 hover:shadow-[0_15px_35px_rgba(0,114,255,0.55)]"
          >
            <div className="shrink-0">
              <img
                src={info?.avatarUrl || ''}
                alt={info?.name || 'avatar'}
                className="w-24 h-24 rounded-full object-cover bg-white/20"
              />
            </div>

            <div className="flex flex-col gap-1 h-auto">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-sm font-semibold" style={{ color: '#0047AB' }}>
                  Họ tên:
                </span>
                <span className="text-sm" style={{ color: '#0B5077' }}>
                  {info?.name || 'Họ tên'}
                </span>
              </div>

              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-sm font-semibold" style={{ color: '#0047AB' }}>
                  Chức vụ CLB:
                </span>
                <span className="text-sm" style={{ color: '#0B5077' }}>
                  {info?.clubPosition || 'Chức vụ clb'}
                </span>
              </div>

              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-sm font-semibold" style={{ color: '#0047AB' }}>
                  Chức vụ Doanh nghiệp:
                </span>
                <span className="text-sm" style={{ color: '#0B5077' }}>
                  {info?.companyPosition || 'Chức vụ doanh nghiệp'}
                </span>
              </div>

              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-sm font-semibold" style={{ color: '#0047AB' }}>
                  Doanh nghiệp:
                </span>
                <span className="text-sm " style={{ color: '#0B5077' }}>
                  {info?.company || 'Doanh nghiệp'}
                </span>
              </div>
            </div>
          </div>
        ))}

        {infoData.length === 0 ? (

          <div className="text-sm h-100" style={{ color: '#0B5077' }}>
            Chưa có info
          </div>
        ) : null}
      </div>

      <div className="flex items-center justify-center gap-4 pt-2">
        <button
          type="button"
          onClickCapture={(e) => {
            e.stopPropagation();
            setPage((p) => Math.max(0, p - 1));
          }}
          disabled={page <= 0}
          className="px-4 py-2 rounded bg-white/20 disabled:opacity-50"
          style={{ color: '#000000' }}
        >
          &larr;
        </button>

        <div className="text-sm" style={{ color: '#000000' }}>
          {page + 1} / {pageCount}
        </div>

        <button
          type="button"
          onClickCapture={(e) => {
            e.stopPropagation();
            setPage((p) => Math.min(pageCount - 1, p + 1));
          }}
          disabled={page >= pageCount - 1}
          className="px-4 py-2 rounded bg-white/20 disabled:opacity-50"
          style={{ color: '#000000', contentEditAble: true }}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

const AdminaboutContent = (props) => {
  const { background = {}, container = [] } = props || {};


  const sizeH = {
    1: 'text-5xl',
    2: 'text-4xl',
    3: 'text-3xl',
    4: 'text-2xl',
    5: 'text-xl',
    6: 'text-lg',
  };

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
  const getContainerBackgroundStyle = (item) => {

        const ctnBg = item?.containerBackground || {};

        if (ctnBg.type === 'gradient') {
            return {
                background: `linear-gradient(${ctnBg.gradientDirection || 'to bottom right'}, ${ctnBg.gradientFrom || '#667eea'}, ${ctnBg.gradientTo || '#764ba2'})`,
            };
        }

        if (ctnBg.type === 'image' && ctnBg.imageUrl) {
            return {
                backgroundImage: `url('${ctnBg.imageUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            };
        }

        if (ctnBg.type === 'gif' && ctnBg.gif) {
            return {
                backgroundImage: `url('${ctnBg.gif}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            };
        }

        return { backgroundColor: ctnBg.color || '#ffffff' };
    };
  return (
    <div className="flex flex-col py-5 w-full" style={getBackgroundStyle()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Array.isArray(container) &&
          container.map((item, idx) => {
            const containerRadius = item?.containerRadius || [];
            let containerSideClasses = containerRadius.join(' ');
            const itemType = item?.type || 'paragraph';

            const title = item?.title || {};

            if (containerRadius.length === 0) {
              if (idx % 2 === 0) {
                containerSideClasses = 'rounded-tr-4xl rounded-br-4xl';
              } else {
                containerSideClasses = 'rounded-tl-4xl rounded-bl-4xl'
              }
            }

            if (itemType === 'paragraph') {
              const p = item?.paragraph || {};
              return (
                <div
                  key={idx}
                  className={`w-full bg-[#ffffff] border border-blue-300 backdrop-blur-[30px] h-150 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] p-6 ${containerSideClasses} :hover zoom-100`}
                  style={getContainerBackgroundStyle(item)}
                >
                  <div
                    className={`${sizeH[title?.level] || sizeH[2]} font-bold mb-3`}
                    style={{ color: title?.color || '#000000', fontWeight: 'bold' }}
                  >
                    {title?.content || 'Về câu lạc bộ'}
                  </div>

                  <p
                    className={`${sizeH[p?.level] || sizeH[5]} font-bold whitespace-normal wrap-break-words break-all w-full`}
                    style={{ color: p?.color || '#000000' }}
                  >
                    {p?.content || 'Văn bản'}
                  </p>
                </div>  
              );
            }

            return (
              <div
                key={idx}
                className={`w-full bg-[#ffffff] border border-blue-300 backdrop-blur-[30px] h-150 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] p-6 ${containerSideClasses}`}
                style={getContainerBackgroundStyle(item)}
              >
                <div
                  className={`${sizeH[title?.level] || sizeH[2]} font-bold mb-3`}
                  style={{ color: title?.color || '#000000', fontWeight: 'bold' }}
                >
                  {title?.content || 'Cơ cấu tổ chức'}
                </div>
                <Info infoItems={item?.infoItems || []} />

              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AdminaboutContent;

