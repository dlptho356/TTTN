import AdminHeader from "./Components/admin-header";
import AdminBanner from "./Components/admin-banner";
import AdminProduct from "./Components/admin-product";
import AdminIntroduce, { ContainerRadiusFields } from "./Components/admin-introduce";
import AdminAboutUs from "./Components/admin-aboutUs";
import AdminIntroducePage from "./Components/admin-introduce_page";
import AdminProductPage from "./Components/admin-product_page";
import AdminMap from "./Components/admin-map";
import AdminCustomer from "./Components/admin-customer";
import AdminFooter from "./Components/admin-footer";
import pageData from "./data/pageData.json";
import { FaPhoneAlt } from "react-icons/fa";
import { TiMail } from "react-icons/ti";
import { MdLocationPin } from "react-icons/md";


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
        },
      },

      defaultProps: {
        title: {
          content: "SẢN PHẨM MỚI",
          color: "#48a842",
          level: 4,
        },
        products: pageData.content?.[0]?.props?.products || [],
      },

      render: (props) => <AdminProduct {...props} />,
    },

    ProductPage: {
      label: "Trang sản phẩm",
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
            gradientFrom: { type: "text", label: "Gradient từ", default: "#667eea" },
            gradientTo: { type: "text", label: "Gradient đến", default: "#764ba2" },
            gradientDirection: { type: "text", label: "Hướng", default: "to bottom right" },
            imageUrl: { type: "text", label: "URL ảnh nền" },
            gif: { type: "text", label: "URL gif" },
          },
        },
        breadcrumb: {
          type: "array",
          label: "Breadcrumb",
          arrayFields: {
            content: { type: "text", label: "Nội dung", contentEditable: true },
            url: { type: "text", label: "URL" },
          },
          getItemSummary: (item) => item?.content || "Breadcrumb",
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
                content: { type: "text", label: "Nội dung", contentEditable: true },
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
        },
      },

      defaultProps: {
        breadcrumb: [
          { content: "Trang chủ",
            url: "/"
           },
          { content: "Sản phẩm", 
            url: /*"/san-pham" link duong dan*/"" },
        ],
        products: pageData.content?.[0]?.props?.products || [],
      },

      render: (props) => <AdminProductPage {...props} />,
    },

    Map: {
      label: "Trang Liên hệ",
      fields: {
        location: { type: "text", label: "Địa chỉ", default: "Lô C3-1, Đường D2-N7, Khu Công nghiệp Tân Phú Trung, Củ Chi, TP HCM" },
        zoom: { type: "number", label: "Zoom", default: 15 },
        embedUrl: { type: "text", label: "URL bản đồ", default: "https://maps.app.goo.gl/EtpJLsAj1rysZDiL9" },
      },

      defaultProps: {
        location: "Lô C3-1, Đường D2-N7, Khu Công nghiệp Tân Phú Trung, Củ Chi, TP HCM",
        zoom: 15,
        embedUrl: "https://maps.app.goo.gl/9VK8dB6TRcwQwhwy9",
      },

      render: (props) => <AdminMap {...props} />,
    },

    Introduce: {
      label: "Giới thiệu về Metik",
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
        subtitle: {
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
        container: {
          label: "Khung nội dung",
          type: "array",
          arrayFields: {
            containerRadius: {
              type: "custom",
              label: "Chọn góc để bo tròn",
              render: ContainerRadiusFields,
            },
            type: {
              type: "select",
              label: "Loại",
              options: [
                { label: "Ảnh", value: "img" },
                { label: "Nội dung", value: "content" },
              ],
            },
            imageUrl: { type: "text", label: "URL ảnh" },
            content: {
              type: "object",
              label: "Cấu hình Nội dung",
              objectFields: {
                type: {
                  type: "select",
                  label: "Loại",
                  options: [
                    { label: "Đoạn văn", value: "paragraph" },
                    { label: "Danh sách liệt kê", value: "list" },
                  ],
                },
                paragraph: {
                  type: "text",
                  label: "Nội dung đoạn văn",
                  contentEditable: true,
                },

                list: {
                  type: "array",
                  label: "Danh sách",
                  arrayFields: {
                    content: {type: "text", contentEditable: true,},
                  },
                },
                color: { type: "text", label: "Màu" },
              },
            },
          },
        },
      },

      defaultProps: {
        background: {
          type: "gradient",
          gradientFrom: "#ffffff",
          gradientTo: "#ffe2b8",
          gradientDirection: "to bottom",
        },
        title: {
          content: "GIỚI THIỆU VỀ METIK",
          color: "#48a842",
          level: 4,
        },
        subtitle: {
          content:
            "Metik là thương hiệu snack thuộc OCHAO, được phát triển trong hệ sinh thái HUNGHAU Holdings với định hướng mang đến những sản phẩm ăn vặt thơm ngon, vui tươi và phù hợp với nhịp sống hiện đại.",
          color: "#4a4a4ad9",
          level: 6,
        },
        container: [
          {
            type: "img",
            imageUrl: "/introduce/hinh3.webp",
            containerRadius: ["rounded-tr-4xl", "rounded-bl-4xl"],
          },
          {
            type: "content",
            
            content: {
              type: "paragraph",
              paragraph: "Ra đời từ nền tảng sản xuất bánh kẹo của OCHAO, METIK kế thừa hệ thống nhà máy hiện đại, quy trình sản xuất khép kín và tiêu chuẩn kiểm soát chất lượng nghiêm ngặt. METIK tập trung phát triển các dòng snack giòn, nhẹ, dễ ăn và phù hợp với nhiều nhóm khách hàng. Sản phẩm được nghiên cứu với nhiều hương vị hấp dẫn như rong biển, bắp, phô mai, BBQ và các hương vị đặc trưng khác.",
              color: "#4a4a4ad9",
            },
            
          },
          {
            type: "content",
            content: {
              type: "list",
              color: "#4a4a4ad9",
              list: [
                {
                  content:
                    "Sử dụng nguyên liệu có nguồn gốc rõ ràng, phù hợp với tiêu chuẩn sản xuất thực phẩm.",
                },
                {
                  content:
                    "Quy trình sản xuất hiện đại, khép kín và đảm bảo vệ sinh an toàn thực phẩm.",
                },
                {
                  content:
                    "Kiểm soát chất lượng chặt chẽ trong từng công đoạn, từ nguyên liệu đầu vào đến thành phẩm.",
                },
              ],
            },
          },
          {
            type: "img",
            imageUrl: "/introduce/hinh0003.webp",
            containerRadius: ["rounded-tr-4xl", "rounded-bl-4xl"],
          },
          {
            type: "img",
            imageUrl: "/introduce/hinh2.jpg.webp",
            containerRadius: ["rounded-tr-4xl", "rounded-bl-4xl"],
          },
          {
            type: "content",
            color: "#4a4a4ad9",
            content: {
              type: "paragraph",
              paragraph:
                "Với hương vị hấp dẫn, phong cách trẻ trung và tinh thần vui nhộn, METIK hướng đến hình ảnh một thương hiệu snack năng động, gần gũi và dễ tạo thiện cảm với người tiêu dùng VIệt Nam.",
              color: "#4a4a4ad9",
            },
          },
        ],
      },

      render: (props) => <AdminIntroduce {...props} />,
    },

    AboutUs: {
      label: "Về chúng tôi",
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
          label: "Tiêu đề",
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
        paragraph: {
          type: "array",
          label: "Đoạn văn",
          arrayFields: {
            content: {
              type: "textarea",
              label: "Nội dung",
              contentEditable: true,
            },
            color: { type: "text", label: "Màu chữ" },
          },

          getItemSummary: (item) => {
            const content = item?.content;
            if (typeof content !== "string") return "Paragraph";
            const text = content.replace(/<[^>]*>/g, "");
            return text.length > 50 ? text.substring(0, 50) + "..." : text || "Paragraph";
          }
        },
        videoUrl: {
          type: "text",
          label: "URL video (trong thư mục public)",
        },
      },

      defaultProps: {
        background: {
          type: "gradient",
          gradientFrom: "#ffffff",
          gradientTo: "#ffe2b8",
          gradientDirection: "to bottom",
        },
        title: {
          content: "VỀ CHÚNG TÔI",
          color: "#48a842",
          level: 4,
        },
        paragraph: [
          {
            color: "#4a4a4ad9",
            content: 'Với phương châm "Chạm mê tít - Snap into Joy", Metik mong muốn trở thành người bạn đồng hành trong những khoảnh khắc vui vẻ hằng ngày. Từ những buổi gặp gỡ bạn bè, giờ giải lao, chuyến đi chơi đến những phút thư giãn tại nhà, Metik mang đến trải nghiệm ăn vặt giòn ngon, trẻ trung và đầy cảm hứng.',
          },
          {
            color: "#4a4a4ad9",
            content: 'Metik không chỉ là một sản phẩm snack. Metik là cảm giác giòn vui khi mở gói, là hương vị dễ mê trong từng miếng bánh và là nguồn năng lượng tích cực cho những khoảnh khắc thường ngày.',
          },
        ],
        videoUrl: "/Video/METIK-ChamMeTit.mp4",
      },

      render: (props) => <AdminAboutUs {...props} />,
    },

    IntroducePage: {
      label: "Trang giới thiệu",
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
            gradientFrom: { type: "text", label: "Gradient từ", default: "#667eea" },
            gradientTo: { type: "text", label: "Gradient đến", default: "#764ba2" },
            gradientDirection: { type: "text", label: "Hướng", default: "to bottom right" },
            imageUrl: { type: "text", label: "URL ảnh nền" },
            gif: { type: "text", label: "URL gif" },
          },
        },
        paragraph: {
          type: "array",
          label: "Đoạn văn",
          arrayFields: {
            content: { type: "textarea", label: "Nội dung", contentEditable: true },
            color: { type: "text", label: "Màu chữ" },
          },
          getItemSummary: (item) => {
            const content = item?.content;
            if (typeof content !== "string") return "Paragraph";
            const text = content.replace(/<[^>]*>/g, "");
            return text.length > 50 ? text.substring(0, 50) + "..." : text || "Paragraph";
          },
        },
        videoUrl: { type: "text", label: "URL video (trong thư mục public)" },
      },

      defaultProps: {
        background: {
          type: "color",
          color: "#ffffff",
        },
        paragraph: [
          {
            color: "#4a4a4ad9",
            content:
              'Với tinh thần "Chạm mê tít – Snap into Joy", metik mong muốn trở thành người bạn đồng hành trong những khoảnh khắc vui vẻ hằng ngày. Từ những buổi gặp gỡ bạn bè, giờ giải lao, chuyến đi chơi đến những phút thư giãn tại nhà, metik mang đến trải nghiệm ăn vặt giòn ngon, trẻ trung và đầy cảm hứng.',
          },
          {
            color: "#4a4a4ad9",
            content:
              'Metik không chỉ là một sản phẩm snack. Metik là cảm giác giòn vui khi mở gói, là hương vị dễ mê trong từng miếng bánh và là nguồn năng lượng tích cực cho những khoảnh khắc thường ngày.',
          },
        ],
        videoUrl: "/Video/METIK-ChamMeTit.mp4",
      },

      render: (props) => <AdminIntroducePage {...props} />, 
    },

    Customer: {
      label: "Khách hàng",
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
          label: "Tiêu đề",
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
        customers: {
          type: "array",
          label: "Khách hàng",
          arrayFields: {
            avatar: { type: "text", label: "URL ảnh đại diện" },
            name: { type: "text", label: "Tên", contentEditable: true },
            nameColor: { type: "text", label: "Màu tên" },
            content: { type: "textarea", label: "Nội dung", contentEditable: true },
            contentColor: { type: "text", label: "Màu nội dung" },
          },
          getItemSummary: (item) => item?.name || "Khách hàng",
        },
      },

      defaultProps: {
        background: {
          type: "gradient",
          gradientFrom: "#ffffff",
          gradientTo: "#ffe2b8",
          gradientDirection: "to bottom",
        },
        title: {
          content: "KHÁCH HÀNG NÓI GÌ?",
          color: "#48a842",
          level: 4,
        },
        customers: [
          {
            avatar: "/Customer/huynhvinh.webp",
            name: "Sinh viên Huỳnh Vinh, TP/HCM",
            nameColor: "#333333",
            content: "\"Snack metik ăn vừa giòn, vừa ngon vừa cuốn miệng. Em thường lựa chọn để mang theo tới trường.\"",
            contentColor: "#4e4e4e",
          },
          {
            avatar: "/Customer/myduyen.webp",
            name: "Bạn Mỹ Duyên, Đồng Tháp",
            nameColor: "#333333",
            content: "\"Metik gợi nhớ cho em rất nhiều kỉ niệm thời thơ ấu. Hy vọng nhãn hàng trong tương lai sẽ ra nhiều sản phẩm độc đáo hơn nữa.\"",
            contentColor: "#4a4a4a",
          },
        ],
      },

      render: (props) => <AdminCustomer {...props} />,
    },

    Footer: {
      label: "Footer",
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
            color: { type: "text", label: "Màu nền", default: "#f8c123" },
            gradientFrom: { type: "text", label: "Gradient từ", default: "#f8c123" },
            gradientTo: { type: "text", label: "Gradient đến", default: "#e19a00" },
            gradientDirection: { type: "text", label: "Hướng", default: "to bottom right" },
            imageUrl: { type: "text", label: "URL ảnh nền" },
            gif: { type: "text", label: "URL gif" },
          },
        },
        logo: { type: "text", label: "Logo url" },
        title: {
          type: "object",
          label: "Tiêu đề",
          objectFields: {
            content: { type: "textarea", label: "Nội dung", contentEditable: true },
            color: { type: "text", label: "Màu chữ", default: "#111827" },
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
        subtitle: {
          type: "object",
          label: "Mô tả",
          objectFields: {
            content: { type: "textarea", label: "Nội dung", contentEditable: true },
            color: { type: "text", label: "Màu chữ", default: "#1f2937" },
          },
        },
        contactTitle: {
          type: "object",
          label: "Tiêu đề liên hệ",
          objectFields: {
            content: { type: "textarea", label: "Nội dung", contentEditable: true },
            color: { type: "text", label: "Màu chữ", default: "#111827" },
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
        contactItems: {
          type: "array",
          label: "Thông tin liên hệ",
          arrayFields: {
            icon: { type: "text", label: "Icon text" },
            iconColor: { type: "text", label: "Màu icon" },
            value: { type: "text", label: "Nội dung", contentEditable: true },
            valueColor: { type: "text", label: "Màu nội dung" },
            url: { type: "text", label: "URL" },
          },
          getItemSummary: (item) => item?.label || "Thông tin liên hệ",
        },
        copyright: {
          type: "object",
          label: "Bản quyền",
          objectFields: {
            content: { type: "textarea", label: "Nội dung", contentEditable: true },
            color: { type: "text", label: "Màu chữ", default: "#1f2937" },
          },
        },
      },
      defaultProps: {
        background: {
          type: "color",
          color: "#f8c123",
        },
        logo: "/logometik.png.webp",
        subtitle: {
          content: "METIK - một thế giới snack dành cho những ai yêu sự giòn giòn ngất ngây, hương vị trẻ trung, đầy cảm hứng để mỗi ngày đều căng tràn sức sống.",
          color: "#1f2937",
        },
        contactTitle: {
          content: "THÔNG TIN LIÊN HỆ",
          color: "#0b7f3e",
          level: 5,
        },
        contactItems: [
          {
            icon: <FaPhoneAlt />,
            iconColor: "#111827",
            value: "(+84) 79 721 3333",
            valueColor: "#1f2937",
            url: "tel:(+84)797213333",
          },
          {
            icon: <TiMail />,
            iconColor: "#111827",
            value: "sale@ochao.vn",
            valueColor: "#1f2937",
            url: "mailto:sale@ochao.vn"

          },
          {
            icon: <MdLocationPin />,
            iconColor: "#111827",
            value: "Lô C3-1, Đường D2-N7, KCN Tân Phú Trung, Xã Củ Chi, TP.HCM...",
            valueColor: "#1f2937",
            url: "https://maps.app.goo.gl/Q1isVt4DpChQjEp4A",
          },
        ],
        copyright: {
          content: "Copyright 2026 © METIK. All rights reserved.",
          color: "#FFFFFF",
        },
      },
      render: (props) => <AdminFooter {...props} />,
    },
  },

  root: {
    render: ({ children }) => <div className="min-h-screen">{children}</div>,
  },
};
export default puckConfig;
