import { useEffect, useState } from "react";
import { loadJsonFromDataFolder } from "../loadJsonFromDataFolder";

const AdminProduct = (props) => {
  const { background = {}, products = [], title = {} } = props || {};

  const [fallbackProducts, setFallbackProducts] = useState(null);

  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) return;

    let cancelled = false;
    loadJsonFromDataFolder("./data/pageData.json")
      .then((json) => {
        if (cancelled) return;
        const first = json?.content?.[0];
        const nextProducts = first?.props?.products;
        if (Array.isArray(nextProducts)) setFallbackProducts(nextProducts);
      })
      .catch(() => {
      });

    return () => {
      cancelled = true;
    };
  }, [products]);

  const finalProducts = (Array.isArray(products) && products.length > 0)
    ? products
    : (Array.isArray(fallbackProducts) ? fallbackProducts : []);


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
    <div className="" 
    style={getBackgroundStyle()}
    >
      <div className="relative h-12.5 w-100 flex items-center">
        <div className="absolute w-50 h-3.75 bg-[#ffd000] top-6.5 left-10">
        </div>
        <p 
        className={`absolute font-bold ml-5 ${sizeH[title?.level]}`}
        style={{color: title?.color}}
        >
            {title?.content}
        </p>
          
      </div>  
      <div className="flex gap-5 p-5 items-center justify-center">
        {Array.isArray(finalProducts) &&
          finalProducts.map((item, idx) => (
            <div 
            key={idx}
            className="w-70 h-auto items-center justify-center group overflow-hidden shadow-[0_1px_3px_-2px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] hover:shadow-[0_3px_6px_-4px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.23)]"
            >
              <div className="overflow-hidden w-70 h-[80%]">
                <img
                src={item?.url}
                alt={item?.subtitle?.content || ""}
                className="object-cover w-full h-75 transition-transform duration-600 ease-in-out group-hover:scale-110"
                />
              </div>
              {item?.subtitle?.content ? (
                <p style={{ color: item?.subtitle?.color}}
                className={`flex justify-center items-center pt-5 py-6 font-bold ${sizeH[item?.subtitle?.level]}`}
                >
                  {item.subtitle.content}
                </p>
              ) : null}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminProduct;

