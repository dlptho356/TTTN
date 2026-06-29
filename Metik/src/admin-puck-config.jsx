import AdminHeader from "./Components/admin-header";
import AdminBanner from "./Components/admin-banner";
import AdminProduct from "./Components/admin-product";

export const puckConfig = {
  components: {
    Header: {
      label: "Header",
      fields: {
        background: {
          type: "object",
          label: "Background",
          objectFields: {
            type: {
              type: "select",
              label: "Loại",
              options: [
                { label: "Màu", value: "color" },
                { label: "Gradient", value: "gradient" },
                { label: "Ảnh", value: "image" },
                { label: "Gif", value: "gif" },
              ],
            },
            color: { type: "text", label: "Màu nền", default: "#ffffff" },
            gradientFrom: {
              type: "text",
              label: "Gradient từ",
              default: "#667eea",
            },
            gradientTo: {
              type: "text",
              label: "Gradient đến",
              default: "#764ba2",
            },
            gradientDirection: {
              type: "text",
              label: "Hướng",
              default: "to bottom right",
            },
            imageUrl: { type: "text", label: "URL ảnh nền" },
            gif: { type: "text", label: "URL gif" },
          },
        },
        logo: {
          type: "text",
          label: "Logo url",
        },
        navBar: {
          type: "array",
          label: "Thanh Nav bar",
          arrayFields: {
            content: { type: "text", label: "Nội dung", contentEditable: true },
            color: { type: "text", label: "Màu chữ" },
            url: { type: "text", label: "URL" },
            level: {
              type: "select",
              label: "Cấp độ",
              options: [
                { label: "H1", value: 1 },
                { label: "H2", value: 2 },
                { label: "H3", value: 3 },
                { label: "H4", value: 4 },
                { label: "H5", value: 5 },
                { label: "H6", value: 6 },
              ],
            },
          },
          getItemSummary: (item) => {
            const content = item.navbar?.content || item.content || "";
            return `${content || "Nav components"}`;
          },
        },
        socialMedia: {
          type: "array",
          label: "Mạng xã hội",
          arrayFields: {
            icon: { type: "text" },
            url: { type: "text" },
          },
        },
      },

      defaultProps: {
        background: {
          type: "color",
          color: "#FFFFFF",
        },
        logo: "/logometik.png.webp",
        navBar: [
          {
            content: "TRANG CHỦ",
            color: "#4a4a4ad9",
            url: "/",
            level: 6,
          },
          {
            content: "GIỚI THIỆU",
            color: "#4a4a4ad9",
            url: "/gioithieu",
            level: 6,
          },
          {
            content: "SẢN PHẨM",
            color: "#4a4a4ad9",
            url: "#",
            level: 6,
          },
          {
            content: "TIN TỨC",
            color: "#4a4a4ad9",
            url: "#",
            level: 6,
          },
          {
            content: "LIÊN HỆ",
            color: "#4a4a4ad9",
            url: "#",
            level: 6,
          },
        ],
        socialMedia: [
          {
            icon: "/Media/facebook.svg",
            url: "#",
          },
          {
            icon: "/Media/linkedin.svg",
            url: "#",
          },
          {
            icon: "/Media/tiktok.png",
            url: "#",
          },
        ],
      },

      render: (props) => <AdminHeader {...props} />,
    },

    Banner: {
      label: "Banner",
      fields: {
        images: {
          type: "array",
          label: "Ảnh banner",
          arrayFields: {
            imageUrl: { type: "text" },
          },
        },
      },

      defaultProps: {
        images: [
          {
            imageUrl: "/Banner/banner-metik.webp",
          },
          {
            imageUrl: "/Banner/banner-metik-2-1-scaled.webp",
          },
        ],
      },

      render: (props) => <AdminBanner {...props} />,
    },

    NewProduct: {
      label: "Sản phẩm",
      fields: {
        background: {
          type: "object",
          label: "Background",
          objectFields: {
            type: {
              type: "select",
              label: "Loại",
              options: [
                { label: "Màu", value: "color" },
                { label: "Gradient", value: "gradient" },
                { label: "Ảnh", value: "image" },
                { label: "Gif", value: "gif" },
              ],
            },
            color: { type: "text", label: "Màu nền", default: "#ffffff" },
            gradientFrom: {
              type: "text",
              label: "Gradient từ",
              default: "#667eea",
            },
            gradientTo: {
              type: "text",
              label: "Gradient đến",
              default: "#764ba2",
            },
            gradientDirection: {
              type: "text",
              label: "Hướng",
              default: "to bottom right",
            },
            imageUrl: { type: "text", label: "URL ảnh nền" },
            gif: { type: "text", label: "URL gif" },
          },
        },
        title: {
          type: "object",
              label: "Paragraph",
              objectFields: {
                content: {
                  type: "textarea",
                  label: "Nội dung",
                  contentEditable: true,
                },
                color: { type: "text", label: "Màu chữ", default: "#000000" },
                level: {
                  type: "select",
                  label: "SizeH",
                  options: [
                    { label: "H1", value: 1 },
                    { label: "H2", value: 2 },
                    { label: "H3", value: 3 },
                    { label: "H4", value: 4 },
                    { label: "H5", value: 5 },
                    { label: "H6", value: 6 },
                  ],
                },
              },
        },

        products: {
          type: "array",
          label: "Sản phẩm",
          arrayFields: {
            url: { type: "text", label: "link ảnh" },
            subtitle: {
              type: "object",
              label: "Subtitle",
              objectFields: {
                content: {
                  type: "text",
                  label: "Nội dung",
                  contentEditable: true,
                },
                color: { type: "text", label: "Màu chữ" },
                level: {
                  type: "select",
                  label: "Cấp độ",
                  options: [
                    { label: "H1", value: 1 },
                    { label: "H2", value: 2 },
                    { label: "H3", value: 3 },
                    { label: "H4", value: 4 },
                    { label: "H5", value: 5 },
                    { label: "H6", value: 6 },
                  ],
                },
              },
            },
          },
        }
      },

      defaultProps: {
        title: {
          content: "SẢN PHẨM MỚI",
          color: "#48a842",
          level: 4,
        }
      },

      render: (props) => <AdminProduct {...props} />
    }



  },




  root: {
    render: ({ children }) => <div className="min-h-screen">{children}</div>,
  },
};
export default puckConfig;
