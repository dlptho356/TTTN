import { useEffect, useMemo, useState } from "react";

const HeaderContent = ({
  className,
  logo,
  navBar,
  socialMedia,
  sizeH,
  webpath = window.location.pathname,
  onOpenMobileMenu,
  isMobileMenuOpen,
  onCloseMobileMenu,
}) => {
  const renderNavLinks = () => (
    <ul className="justify-start relative items-center flex flex-wrap w-full gap-10">
      {Array.isArray(navBar) &&
        navBar.map((item, idx) => (
          <li key={idx} className={`inline font-bold ${sizeH[item?.level]}`}>
            <a
              href={item?.url}
              style={{ color: item?.color }}
              className={`relative pb-1 after:transiton-all after:duration-300 ease-in-out hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:-bottom-1 hover:after:h-1 hover:after:w-full hover:after:bg-[#f4851a]  
                ${
                webpath === item?.url
                  ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1  after:bg-[#f4851a]"
                  : ""
              }`}
            >
              {item?.content}
            </a>
          </li>
        ))}
    </ul>
  );

  const renderSocial = () => (
    <ul className="relative flex-row items-center flex gap-0.5 justify-center">
      {Array.isArray(socialMedia) &&
        socialMedia.map((item, idx) => (
          <li key={idx}>
            <a href={item?.url} className="">
              <img
                src={item?.icon}
                className="w-8 h-8 object-contain"
                alt={item?.alt || ""}
              />
            </a>
          </li>
        ))}
    </ul>
  );

  return (
    <div className={className}>
      <div className="shadow-[1px_1px_10px_rgba(0,0,0,0.15)]">
        <div className="flex flex-row md:px-40 items-center justify-center ">
          <div className="flex flex-col w-87.5 mr-7.5 h-25 justify-center">
            <a href="#" className="block" title="Metik - Chạm mê tít">
              <img src={logo} alt="Metik logo" className="md:w-62.5 md:h-25 w-30 h-15" />
            </a>
          </div>

          <div className="mr-auto grow flex-col items-center justify-center hidden md:flex">
            {renderNavLinks()}
          </div>

          <div className="hidden md:flex flex-col justify-center items-center">
            {renderSocial()}
          </div>

          <div className="ml-auto flex items-center md:hidden">
            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="p-2 rounded-md focus:outline-none cursor-pointer"
              aria-label="Open menu"
            >
              <span className="block w-7 h-0.5 bg-gray-800 mb-1" />
              <span className="block w-7 h-0.5 bg-gray-800 mb-1" />
              <span className="block w-7 h-0.5 bg-gray-800" />
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        {typeof onCloseMobileMenu === "function" && (
          <div
            className={`fixed inset-0 z-1005 transition-opacity duration-300 ${
              isMobileMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={!isMobileMenuOpen}
          >
            <div
              className="absolute inset-0 bg-black/30"
              onClick={onCloseMobileMenu}
            />

            <div
              className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="p-5 flex items-center justify-between">
                <div className="text-sm font-bold">Menu</div>
                <button
                  type="button"
                  onClick={onCloseMobileMenu}
                  className="p-2 rounded-md focus:outline-none"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <div className="px-5 pb-8">
                <nav className="mt-2">
                  <ul className="flex flex-col md:gap-4">
                    {Array.isArray(navBar) &&
                      navBar.map((item, idx) => (
                        <li 
                        key={idx}
                        className="hover:bg-[#0000000d] py-3 border-t border-[#ececec]"
                        >
                          <a
                            href={item?.url}
                            style={{ color: item?.color }}
                            onClick={onCloseMobileMenu}
                            className={`block font-bold ${sizeH[item?.level]}`}
                          >
                            {item?.content}
                          </a>
                        </li>
                      ))}
                  </ul>
                </nav>

                {Array.isArray(socialMedia) && socialMedia.length > 0 && (
                  <div className="mt-8">
                    <div className="text-xs text-gray-500 mb-3">
                      Mạng xã hội
                    </div>
                    {renderSocial()}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AdminHeader = (props) => {
  const { background = {}, logo, navBar = [], socialMedia = [] } = props || {};

  const [showSticky, setShowSticky] = useState(false);
  const [animate, setAnimate] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sizeH = useMemo(
    () => ({
      1: "text-5xl",
      2: "text-4xl",
      3: "text-3xl",
      4: "text-2xl",
      5: "text-xl",
      6: "text-lg",
    }),
    [],
  );

  const getBackgroundStyle = () => {
    const bg = background || {};

    if (bg.type === "gradient") {
      return {
        background: `linear-gradient(${bg.gradientDirection || "to bottom right"}, ${
          bg.gradientFrom || "#667eea"
        }, ${bg.gradientTo || "#764ba2"})`,
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

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > 300) {
        setShowSticky(true);
        setAnimate(true);
      }

      if (current <= 10) {
        setShowSticky(false);
        setAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="bg-top bg-cover bg-no-repeat bg-fixed w-full z-0"
        style={getBackgroundStyle()}
      >
        <HeaderContent
          className="w-full"
          logo={logo}
          navBar={navBar}
          socialMedia={socialMedia}
          sizeH={sizeH}
          isMobileMenuOpen={isMobileMenuOpen}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
        />

        <div className="w-full h-px" aria-hidden="true" />
      </div>

      <div
        className={`fixed top-0 left-0 w-full z-1001 ${showSticky ? "translate-y-0" : "-translate-y-full"} 
          ${animate ? "transition-transform duration-300 ease-in-out" : ""}`}
      >
        <div className="bg-white/90 backdrop-blur shadow-[0_6px_22px_rgba(0,0,0,0.12)]">
          <HeaderContent
            className="w-full"
            logo={logo}
            navBar={navBar}
            socialMedia={socialMedia}
            sizeH={sizeH}
            isMobileMenuOpen={isMobileMenuOpen}
            onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
            onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
