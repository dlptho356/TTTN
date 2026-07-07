import AdminHeader from "./Components/admin-header";
import AdminBanner from "./Components/admin-banner";
import AdminAbout from "./Components/admin-about";
import AdminServices from "./Components/admin-services";
import AdminNews from "./Components/admin-news"
import AdminLoop from "./components/admin-loopContainer";
import AdminContact from "./Components/admin-contact";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import AdminFooter from "./Components/admin-footer";


export const puckConfig = {
  components: {
    header: {
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
                { label: "Ảnh + gradient", value: "image+gradient" },
                { label: "Ảnh + màu", value: "image+color" },
              ],
            },
            color: { type: "text", label: "Màu nền" },
            gradientFrom: {
              type: "text",
              label: "Gradient từ",
            },
            gradientTo: {
              type: "text",
              label: "Gradient đến",
            },
            gradientDirection: {
              type: "select",
              label: "Hướng",
              options: [
                { label: "Trên → dưới", value: "to bottom" },
                { label: "Trái → phải", value: "to right" },
                { label: "Trên trái → dưới phải", value: "to bottom right" },
                { label: "Trên phải → dưới trái", value: "to bottom left" },
              ],
              default: "to bottom right",
            },
            imageUrl: { type: "text", label: "URL ảnh nền" },
          },
        },

        backgroundAfterScroll: {
          type: "text",
          label: "Màu nền sau khi cuộn",
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
      },
      defaultProps: {
        background: {
          type: "color",
          color: "#1a6b49",
        },
        backgroundAfterScroll: "#044f40f2",
        logo: "/logo-hhc.png",
        navBar: [
          { content: "Trang chủ", url: "/", color: "#d1d5db", level: 6 },
          { content: "Giới thiệu", url: "/about", color: "#d1d5db", level: 6 },
          { content: "Dịch vụ", url: "/services", color: "#d1d5db", level: 6 },
          { content: "Hỗ trợ", url: "/support", color: "#d1d5db", level: 6 },
          { content: "Liên hệ", url: "/contact", color: "#d1d5db", level: 6 },
        ],
        title: {
          content: "HEXAGON",
          color: "#FFFFFF",
          level: 5,
        },
      },
      render: (props) => <AdminHeader {...props} />,
    },

    banner: {
      label: "Banner",
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
                { label: "Ảnh + gradient", value: "image+gradient" },
                { label: "Ảnh + màu", value: "image+color" },
              ],
            },
            color: { type: "text", label: "Màu nền", default: "#ffffff" },
            gradientFrom: {
              type: "text",
              label: "Gradient từ",
            },
            gradientTo: {
              type: "text",
              label: "Gradient đến",
            },
            gradientDirection: {
              type: "select",
              label: "Hướng",
              options: [
                { label: "Trên → dưới", value: "to bottom" },
                { label: "Trái → phải", value: "to right" },
                { label: "Trên trái → dưới phải", value: "to bottom right" },
                { label: "Trên phải → dưới trái", value: "to bottom left" },
              ],
              default: "to bottom right",
            },
            imageUrl: { type: "text", label: "URL ảnh nền" },
          },
        },
        imgUrl: { type: "text" },
        eyebrow: {
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
        title1: {
          type: "array",
          label: "Nội dung",
          arrayFields: {
            text: { type: "text" },
            timeset: { type: "text" },
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
          getItemSummary: (item) => item?.text || "Item",
        },
        title2: {
          type: "object",
          label: "Tiêu đề",
          objectFields: {
            content: {
              type: "textarea",
              label: "Nội dung",
              contentEditable: true,
            },
            textColorType: {
              type: "select",
              label: "Loại màu chữ",
              options: [
                { label: "Màu chữ", value: "color" },
                { label: "Gradient", value: "gradient" },
              ],
              default: "color",
            },

            color: { type: "text", label: "Màu chữ", default: "#ffffff" },

            gradientAngle: { type: "text", label: "Góc Gradient (độ)" },
            gradientColor1: { type: "text", label: "Màu bắt đầu (0%)" },
            gradientColor2: { type: "text", label: "Màu giữa (55%)" },
            gradientColor3: { type: "text", label: "Màu kết thúc (100%)" },

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
        button: {
          type: "array",
          label: "Nút",
          arrayFields: {
            url: { type: "text", label: "URL" },
            content: {
              type: "text",
              label: "Nội dung",
              contentEditable: true,
            },
            colorText: {
              type: "text",
              label: "Màu chữ",
            },
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
            buttonBg: {
              type: "object",
              label: "Nền của nút bấm",
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
                color: {
                  type: "text",
                  label: "Màu nền",
                  default: "#ffffff",
                },
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
                },
                imageUrl: { type: "text", label: "URL ảnh nền" },
                gif: { type: "text", label: "URL gif" },
              },
            },
          },
        },
      },

      defaultProps: {
        background: {
          type: "gradient",
          gradientFrom: "#135237",
          gradientTo: "#41b67d",
          gradientDirection: "to bottom right",
        },
        imgUrl: "/Banner/globalmyc.webp",
        eyebrow: {
          content: "CÔNG NGHỆ TƯƠNG LAI",
          color: "#f0b100",
          level: 6,
        },
        title1: [
          {
            text: "Giải pháp công nghệ",
            timeset: "2000",
            color: "#FFFFFF",
            level: 1,
          },
          {
            text: "Thi công & lắp đặt",
            timeset: "2000",
            color: "#FFFFFF",
            level: 1,
          },
          {
            text: "Cung cấp thiết bị CNTT",
            timeset: "2000",
            color: "#FFFFFF",
            level: 1,
          },
          {
            text: "Dịch vụ CNTT",
            timeset: "2000",
            color: "#FFFFFF",
            level: 1,
          },
        ],
        subtitle: {
          content:
            "HEXAGON kiến tạo các giải pháp chuyển đổi số toàn diện, từ phần mềm đến cung cấp các giải pháp internet, thiết bị công nghệ thông tin, giúp doanh nghiệp bứt phá trong kỷ nguyên số.",
          color: "#ebe6e7",
          level: 6,
        },
        button: [
          {
            url: "/services",
            content: "Khám phá dịch vụ",
            colorText: "#ffffff",
            level: 6,
            buttonBg: {
              type: "gradient",
              gradientTo: "#f2d337",
              gradientFrom: "#ff9902",
              gradientDirection: "to right",
            },
          },
          {
            url: "/contact",
            content: "Liên hệ Tư vấn",
            colorText: "#ffffff",
            level: 6,
            buttonBg: {
              type: "color",
              color: "ffffff1a",
            },
          },
        ],
        title2: {
          content: "HEXAGON Solutions",
          color: "#ffffff",
          level: 1,
          textColorType: "gradient",
          gradientAngle: "135deg",
          gradientColor1: "#ffffff",
          gradientColor2: "#a8e6d8",
          gradientColor3: "#F7931E",
        },
      },

      render: (props) => <AdminBanner {...props} />,
    },

    aboutHex: {
      label: "Giới thiệu",
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
                { label: "Ảnh + gradient", value: "image+gradient" },
                { label: "Ảnh + màu", value: "image+color" },
              ],
            },
            color: { type: "text", label: "Màu nền" },
            gradientFrom: {
              type: "text",
              label: "Gradient từ",
            },
            gradientTo: {
              type: "text",
              label: "Gradient đến",
            },
            gradientDirection: {
              type: "select",
              label: "Hướng",
              options: [
                { label: "Trên → dưới", value: "to bottom" },
                { label: "Trái → phải", value: "to right" },
                { label: "Trên trái → dưới phải", value: "to bottom right" },
                { label: "Trên phải → dưới trái", value: "to bottom left" },
              ],
              default: "to bottom right",
            },
            imageUrl: { type: "text", label: "URL ảnh nền" },
          },
        },

        container: {
          type: "object",
          label: "Khung hình ảnh",
          objectFields: {
            imgUrl: { type: "text", label: "Link hình ảnh" },
            context1: {
              type: "object",
              label: "Context 1",
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
            context2: {
              type: "object",
              label: "Context 2",
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

        box: {
          type: "array",
          label: "Nội dung trong box",
          arrayFields: {
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
          },
        },
      },

      defaultProps: {
        background: {
          type: "color",
          color: "#FFFFFF",
        },
        container: {
          imgUrl: "/About/VPX16.jpg",
          context1: {
            content: '"Làm ngày, làm đêm, làm thêm ngày nghỉ ^_^"',
            color: "#000000",
            level: 6,
          },
          context2: {
            content: "— Hexagon Culture",
            color: "#f0b100",
            level: 6,
          },
        },
        title: {
          content: "Về Hexagon",
          color: "#000000",
          level: 2,
        },
        subtitle: {
          content:
            "Hexagon Corporation – Công nghệ tiên phong, nơi chúng tôi không ngừng kiến tạo và đổi mới để mang đến những giá trị vượt trội trong kỷ nguyên số. Với tầm nhìn đa chiều và khát vọng vươn tầm, Hexagon tự hào là đối tác tin cậy, đồng hành cùng bạn trên hành trình chinh phục những đỉnh cao công nghệ.",
          color: "#364153",
          level: 6,
        },

        box: [
          {
            title: {
              content: "Sứ mệnh",
              color: "#1d6a49",
              level: 4,
            },
            subtitle: {
              content: "Kiến tạo tương lai số bằng các giải pháp tiên tiến.",
              color: "#4a5565",
              level: 6,
            },
          },
          {
            title: {
              content: "Tầm nhìn",
              color: "#1d6a49",
              level: 4,
            },
            subtitle: {
              content:
                "Trở thành biểu tượng về hệ sinh thái công nghệ đổi mới.",
              color: "#4a5565",
              level: 6,
            },
          },
          {
            title: {
              content: "Giá trị cốt lõi",
              color: "#1d6a49",
              level: 4,
            },
            subtitle: {
              content: "Đổi mới - Đồng hành - Tiên phong - Minh bạch.",
              color: "#4a5565",
              level: 6,
            },
          },
          {
            title: {
              content: "Nền tảng",
              color: "#1d6a49",
              level: 4,
            },
            subtitle: {
              content: "Hệ sinh thái đa ngành, vững chắc và linh hoạt.",
              color: "#4a5565",
              level: 6,
            },
          },
        ],
      },

      render: (props) => <AdminAbout {...props} />,
    },

    cardServices: {
      label: "Dịch vụ",
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
                { label: "Ảnh + gradient", value: "image+gradient" },
                { label: "Ảnh + màu", value: "image+color" },
              ],
            },
            color: { type: "text", label: "Màu nền" },
            gradientFrom: {
              type: "text",
              label: "Gradient từ",
            },
            gradientTo: {
              type: "text",
              label: "Gradient đến",
            },
            gradientDirection: {
              type: "select",
              label: "Hướng",
              options: [
                { label: "Trên → dưới", value: "to bottom" },
                { label: "Trái → phải", value: "to right" },
                { label: "Trên trái → dưới phải", value: "to bottom right" },
                { label: "Trên phải → dưới trái", value: "to bottom left" },
              ],
              default: "to bottom right",
            },
            imageUrl: { type: "text", label: "URL ảnh nền" },
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
        card: {
          label: "Card",
          type: "array",
          arrayFields: {
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
            cardBg: {
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
                    { label: "Ảnh + gradient", value: "image+gradient" },
                    { label: "Ảnh + màu", value: "image+color" },
                  ],
                },
                color: { type: "text", label: "Màu nền" },
                gradientFrom: {
                  type: "text",
                  label: "Gradient từ",
                },
                gradientTo: {
                  type: "text",
                  label: "Gradient đến",
                },
                gradientDirection: {
                  type: "select",
                  label: "Hướng",
                  options: [
                    { label: "Trên → dưới", value: "to bottom" },
                    { label: "Trái → phải", value: "to right" },
                    {
                      label: "Trên trái → dưới phải",
                      value: "to bottom right",
                    },
                    { label: "Trên phải → dưới trái", value: "to bottom left" },
                  ],
                  default: "to bottom right",
                },
                imageUrl: { type: "text", label: "URL ảnh nền" },
              },
            },
            cardBgHover: {
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
                    { label: "Ảnh + gradient", value: "image+gradient" },
                    { label: "Ảnh + màu", value: "image+color" },
                  ],
                },
                color: { type: "text", label: "Màu nền" },
                gradientFrom: {
                  type: "text",
                  label: "Gradient từ",
                },
                gradientTo: {
                  type: "text",
                  label: "Gradient đến",
                },
                gradientDirection: {
                  type: "select",
                  label: "Hướng",
                  options: [
                    { label: "Trên → dưới", value: "to bottom" },
                    { label: "Trái → phải", value: "to right" },
                    {
                      label: "Trên trái → dưới phải",
                      value: "to bottom right",
                    },
                    { label: "Trên phải → dưới trái", value: "to bottom left" },
                  ],
                  default: "to bottom right",
                },
                imageUrl: { type: "text", label: "URL ảnh nền" },
              },
            },
            url: { type: "text", label: "Link" },
          },
        },
      },

      defaultProps: {
        background: {
          type: "color",
          color: "#fcf9fa",
        },
        title: {
          content: "Lĩnh vực hoạt động",
          color: "#000000",
          level: 2,
        },
        subtitle: {
          content:
            "Tại Hexagon, chúng tôi tập trung phát triển hệ sinh thái công nghệ toàn diện, bao gồm:",
          color: "#364153",
          level: 6,
        },
        card: [
          {
            title: {
              content: "Giải pháp công nghệ",
              color: "#f0b100",
              level: 5,
            },
            subtitle: {
              content:
                "Phát triển và triển khai các giải pháp phần mềm tùy chỉnh, tối ưu vận hành doanh nghiệp, nâng cao hiệu suất, đáp ứng linh hoạt theo nhu cầu và định hướng phát triển dài hạn.",
              color: "#000000",
              level: 6,
            },
            cardBg: {
              type: "image",
              imageUrl: "/Services/dv-3-1782723514885-362139381.jpg",
            },
            cardBgHover: {
              type: "image",
              imageUrl: "/Services/hovermyc-1-1782467371060-195987948.png",
            },
            url: "/",
          },
          {
            title: {
              content: "Giải pháp thi công & lắp đặt",
              color: "#f0b100",
              level: 5,
            },
            subtitle: {
              content:
                "Tư vấn chiến lược chuyển đổi số toàn diện, giúp doanh nghiệp tối ưu quy trình, nâng cao trải nghiệm khách hàng và tăng trưởng bền vững trong môi trường số hóa.",
              color: "#000000",
              level: 6,
            },
            cardBg: {
              type: "image",
              imageUrl: "/Services/dv-4-1782723514901-308215051.jpg",
            },
            cardBgHover: {
              type: "image",
              imageUrl: "/Services/hovermyc-1-1782467371060-195987948.png",
            },
            url: "/",
          },
          {
            title: {
              content: "Cung cấp thiết bị CNTT",
              color: "#f0b100",
              level: 5,
            },
            subtitle: {
              content:
                "Cung cấp giải pháp trí tuệ nhân tạo và phân tích dữ liệu, hỗ trợ ra quyết định thông minh, tự động hóa quy trình và khai thác tối đa giá trị từ dữ liệu doanh nghiệp.",
              color: "#000000",
              level: 6,
            },
            cardBg: {
              type: "image",
              imageUrl: "/Services/dv-2-1782723514900-716634177.jpg",
            },
            cardBgHover: {
              type: "image",
              imageUrl: "/Services/hovermyc-1-1782467371060-195987948.png",
            },
            url: "/",
          },
          {
            title: {
              content: "Dịch vụ Công nghệ thông tin",
              color: "#f0b100",
              level: 5,
            },
            subtitle: {
              content:
                "Thi công và lắp đặt hệ thống camera giám sát, mạng wifi chuyên nghiệp, đảm bảo an ninh, ổn định kết nối và phù hợp với mọi quy mô doanh nghiệp.",
              color: "#000000",
              level: 6,
            },
            cardBg: {
              type: "image",
              imageUrl: "/Services/dv-1-1782723514912-477828992.jpg",
            },
            cardBgHover: {
              type: "image",
              imageUrl: "/Services/hovermyc-1-1782467371060-195987948.png",
            },
            url: "/",
          },
        ],
      },

      render: (props) => <AdminServices {...props} />,
    },

    news: {
      label: "Tin tức",
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
                { label: "Ảnh + gradient", value: "image+gradient" },
                { label: "Ảnh + màu", value: "image+color" },
              ],
            },
            color: { type: "text", label: "Màu nền" },
            gradientFrom: {
              type: "text",
              label: "Gradient từ",
            },
            gradientTo: {
              type: "text",
              label: "Gradient đến",
            },
            gradientDirection: {
              type: "select",
              label: "Hướng",
              options: [
                { label: "Trên → dưới", value: "to bottom" },
                { label: "Trái → phải", value: "to right" },
                { label: "Trên trái → dưới phải", value: "to bottom right" },
                { label: "Trên phải → dưới trái", value: "to bottom left" },
              ],
              default: "to bottom right",
            },
            imageUrl: { type: "text", label: "URL ảnh nền" },
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
        newsContainer: {
          type: "array",
          label: "Ô tin tức",
          arrayFields: {
            imageUrl: { type: "text", label: "imageURL" },
            date: { type: "date", label: "Date", contentEditable: true },
            title: {
              type: "object",
              label: "Tiêu đề",
              objectFields: {
                content: {
                  type: "text",
                  label: "Nội dung",
                  contentEditable: true,
                },
                color: { type: "text", label: "Màu chữ", default: "#000000" },
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
            subtitle: {
              type: "object",
              label: "Tiêu đề",
              objectFields: {
                content: {
                  type: "text",
                  label: "Nội dung",
                  contentEditable: true,
                },
                color: { type: "text", label: "Màu chữ", default: "#000000" },
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
            url: {type: 'text', label: "Link đường dẫn"}
          },
        },
        button: {
          type: "object",
          label: "Nút",
          objectFields: {
            url: { type: "text", label: "URL" },
            content: {
              type: "text",
              label: "Nội dung",
              contentEditable: true,
            },
            colorText: {
              type: "text",
              label: "Màu chữ",
            },
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
            buttonBg: {
              type: "object",
              label: "Nền của nút bấm",
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
                color: {
                  type: "text",
                  label: "Màu nền",
                  default: "#ffffff",
                },
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
                },
                imageUrl: { type: "text", label: "URL ảnh nền" },
                gif: { type: "text", label: "URL gif" },
              },
            },
          },
        },
      },

      defaultProps: {
        background: {
          type: 'color',
          color: '#FFFFFF'
        },
        title: {
          content: "Tin tức",
          color: "#000000",
          level: 2
        },
        subtitle: {
          content: "Cập nhật tin tức, sự kiện và thông tin mới nhất từ Hexagon Corporation.",
          color: "#364153",
          level: 6
        },
        newsContainer: [
          {
            imageUrl: "/News/teambuilding-01-1774341835079-253071961.jpg",
            date: "26/06/2026",
            title: {
              content:
                "Không khí tưng bừng tại Chương trình Teambuilding myH25 tại Ngôi nhà Hùng Hậu",
              color: "#101828",
              level: 5
            },
            subtitle: {
              content:
                "Cùng nhìn lại những khoảnh khắc đáng nhớ và đẹp nhất của đại gia đình HHC trong chương trình TEAMBUILDING MYH25, diễn ra...",
              color: "#4a5565",
              level: 6,
            },
            url:'/'
          },

          {
            imageUrl: "/News/myc-dong-hanh-1-1774341526337-531129418.jpg",
            date: "26/06/2026",
            title: {
              content:
                "Đồng hành cùng sinh viên Đại học Văn Hiến tại Ngày hội sinh viên",
              color: "#101828",
              level: 5,
            },
            subtitle: {
              content:
                "Công ty Cổ phần Lục Giác hân hạnh được đồng hành cùng các bạn sinh viên khoa Công nghệ Thông tin - Đại học Văn Hiến tron...",
              color: "#4a5565",
              level: 6,
            },
            url:'/'            
          },

          {
            imageUrl: "/News/sam-tet-cong-nghe-1774343703442-177870451.jpg",
            date: "26/06/2026",
            title: {
              content: "Sắm tết công nghệ - Nâng cấp thiết bị, khởi đầu bứt phá",
              color: "#101828",
              level: 5,
            },
            subtitle: {
              content:
                "Năm mới, vận hội mới, thiết bị cũng phải mới! Đầu tư cho công nghệ là đầu tư cho tương lai. Ghé ‘Lục Giác’ để chọn cho m...",
              color: "#4a5565",
              level: 6,
            },
            url:'/' 
          },

          {
            imageUrl: "/News/phattrienphanmem-1773133089066-706455049.png",
            date: "25/06/2026",
            title: {
              content: "Bài viết 4",
              color: "#101828",
              level: 5,
            },
            subtitle: {
              content:
                "Bài viết 4",
              color: "#4a5565",
              level: 6,
            },
            url:'/' 
          },

          {
            imageUrl: "/News/ai-phan-tich-du-lieu-1773291405655-118730188-1774254824600-959205718.jpg",
            date: "25/06/2026",
            title: {
              content: "Bài viết 5",
              corlor: "#101828",
              level: 5,
            },
            subtitle: {
              content:
                "Bài viết 5",
              corlor: "#4a5565",
              level: 6,
            },
            url:'/' 
          },
        ],
        button: {
          url: '/',
          content: "Xem tất cả bài viết >",
          colorText: "#FFFFFF",
          level: 6,
          buttonBg: {
            type: "gradient",
            gradientFrom: "#008374",
            gradientTo: "#89BA16",
            gradientDirection: "to right"
          },
        }
      },

      render: (props) => <AdminNews {...props} />
    },

    LoopContainer: {
      label: "Loop container",
      fields: {
        title: {
          label: "Tiêu đề",
          type: "object",
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

        loopContain: {
          type: "array",
          arrayFields: {
            logo: {
              type: "text",
              label: "URL logo",
            },
          },
        },
      },

      defaultProps: {
        title: {
          content: "Các đối tác liên kết",
          color: "#000000",
          level: 3,
        },

        background: {
          type: "gradient",
          gradientDirection: "180deg",
          gradientFrom: "#0f826b 0%",
          gradientTo: "#12846d 35%, #86efac 100%",
        },

        loopContain: [
          //Nhóm logo 1
          {
            logo: "/logos/Logo_Khoi_E.png",
          },
          {
            logo: "/logos/Logo_Khoi_C.png",
          },
          {
            logo: "/logos/Logo_Khoi_D.png",
          },
          {
            logo: "/logos/Happy_Food.png",
          },
          {
            logo: "/logos/Logo_Khoi_C.png",
          },
          {
            logo: "/logos/ecoBook.png",
          },
          {
            logo: "/logos/comoon.png",
          },
          {
            logo: "/logos/B.png",
          },
          {
            logo: "/logos/Logo_Khoi_F.png",
          },
          //Nhóm logo 2
          {
            logo: "/logos/Logo_Khoi_E.png",
          },
          {
            logo: "/logos/Logo_Khoi_C.png",
          },
          {
            logo: "/logos/Logo_Khoi_D.png",
          },
          {
            logo: "/logos/Happy_Food.png",
          },
          {
            logo: "/logos/Logo_Khoi_C.png",
          },
          {
            logo: "/logos/ecoBook.png",
          },
          {
            logo: "/logos/comoon.png",
          },
          {
            logo: "/logos/B.png",
          },
          {
            logo: "/logos/Logo_Khoi_F.png",
          },
        ],
      },

      render: (props) => <AdminLoop {...props} />,
    },

    contact: {
      label: "Liên hệ",
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
                { label: "Ảnh + gradient", value: "image+gradient" },
                { label: "Ảnh + màu", value: "image+color" },
              ],
            },
            color: { type: "text", label: "Màu nền" },
            gradientFrom: {
              type: "text",
              label: "Gradient từ",
            },
            gradientTo: {
              type: "text",
              label: "Gradient đến",
            },
            gradientDirection: {
              type: "select",
              label: "Hướng",
              options: [
                { label: "Trên → dưới", value: "to bottom" },
                { label: "Trái → phải", value: "to right" },
                { label: "Trên trái → dưới phải", value: "to bottom right" },
                { label: "Trên phải → dưới trái", value: "to bottom left" },
              ],
              default: "to bottom right",
            },
            imageUrl: { type: "text", label: "URL ảnh nền" },
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
        contactAddress: {
          label: "Địa chỉ liên hệ",
          type: 'array',
          arrayFields: {
            icon: {
              label: 'icon',
              type: 'object',
              objectFields: {
                url: {type: 'text', label: "Link icon"},
                color: {type: 'text', label: "Màu icon"}
              }
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
          }
        },
        social: {
          label: "Mạng xã hội",
          type: 'array',
          arraytFields: {
            text: {
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
            SocialBackground: {
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
                    { label: "Ảnh + gradient", value: "image+gradient" },
                    { label: "Ảnh + màu", value: "image+color" },
                  ],
                },
                color: { type: "text", label: "Màu nền" },
                gradientFrom: {
                  type: "text",
                  label: "Gradient từ",
                },
                gradientTo: {
                  type: "text",
                  label: "Gradient đến",
                },
                gradientDirection: {
                  type: "select",
                  label: "Hướng",
                  options: [
                    { label: "Trên → dưới", value: "to bottom" },
                    { label: "Trái → phải", value: "to right" },
                    { label: "Trên trái → dưới phải", value: "to bottom right" },
                    { label: "Trên phải → dưới trái", value: "to bottom left" },
                  ],
                  default: "to bottom right",
                },
                imageUrl: { type: "text", label: "URL ảnh nền" },
              },
            },
            url: {type: 'text', label: "Link đường dẫn"}
          }
        },
        Map: {
          label: "Trang Liên hệ",
          type: 'object',
          objectFields: {
            location: { type: "text", label: "Địa chỉ", default: "" },
            zoom: { type: "number", label: "Zoom", default: 15 },
            embedUrl: { type: "text", label: "URL bản đồ", default: "" },
          },
        },
      },  
      defaultProps: {
        background: {
          type: 'color',
          color: "#fcf9fa",
        },
        title: {
          content: "Liên hệ với chúng tôi",
          color: "#101828",
          level: 4
        },
        subtitle: {
          content: "Sẵn sàng cho dự án tiếp theo? Đội ngũ chuyên gia của Hexagon luôn ở đây để lắng nghe và đưa ra giải pháp tốt nhất cho bạn.",
          color: "#364153",
          level: 6
        },
        contactAddress: [
          {
            icon: {
              url: <HiOutlineLocationMarker />,
              color: "#00d5be"
            },
            title: {
              content: "Trụ sở chính",
              color: "#101828",
              level: 6
            },
            subtitle: {
              content: "615 Âu Cơ, Phường Tân Phú, TP. Hồ Chí Minh",
              color: "#101828",
              level: 6
            }
          },
          {
            icon: {
              url: <HiOutlineMail />,
              color: "#00d5be"
            },
            title: {
              content: "Email",
              color: "#101828",
              level: 6
            },
            subtitle: {
              content: "info@hexagon.xyz",
              color: "#101828",
              level: 6
            }
          },
          {
            icon: {
              url: <FiPhone />,
              color: "#00d5be"
            },
            title: {
              content: "Hotline",
              color: "#101828",
              level: 6
            },
            subtitle: {
              content: "096 446 0333",
              color: "#101828",
              level: 6
            }
          },
        ],
        social: [
          {
            text: {
              content: "FaceBook",
              color: "#00786f",
              level: 6
            },
            SocialBackground: {
              type: 'color',
              color: "#14b8a61a"
            },
            url: "/"
          },
          {
            text: {
              content: "Linkedln",
              color: "#00786f",
              level: 6
            },
            SocialBackground: {
              type: 'color',
              color: "#14b8a61a"
            },
            url: "/"
          },
          {
            text: {
              content: "YouTube",
              color: "#00786f",
              level: 6
            },
            SocialBackground: {
              type: 'color',
              color: "#14b8a61a"
            },
            url: "/"
          },
          {
            text: {
              content: "Zalo",
              color: "#00786f",
              level: 6
            },
            SocialBackground: {
              type: 'color',
              color: "#14b8a61a"
            },
            url: "/"
          },
        ],
        Map: {
          location: "615 Âu Cơ, Tân Phú, Hồ Chí Minh, VietNam",
          zoom: 15,
          embedUrl: "https://maps.google.com/maps?width=600&height=400&hl=en&q=615 Âu Cơ&t=p&z=14&ie=UTF8&iwloc=B&output=embed"
        }
      },

      render: (props) => <AdminContact {...props} />
    },

    footer: {
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
                { label: "Ảnh + gradient", value: "image+gradient" },
                { label: "Ảnh + màu", value: "image+color" },
              ],
            },
            color: { type: "text", label: "Màu nền" },
            gradientFrom: {
              type: "text",
              label: "Gradient từ",
            },
            gradientTo: {
              type: "text",
              label: "Gradient đến",
            },
            gradientDirection: {
              type: "select",
              label: "Hướng",
              options: [
                { label: "Trên → dưới", value: "to bottom" },
                { label: "Trái → phải", value: "to right" },
                { label: "Trên trái → dưới phải", value: "to bottom right" },
                { label: "Trên phải → dưới trái", value: "to bottom left" },
              ],
              default: "to bottom right",
            },
            imageUrl: { type: "text", label: "URL ảnh nền" },
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
      },

      defaultProps: {
        background: {
          type: 'color',
          color: "#0D5939"
        },
        title: {
          content: "Copyright 2026 © Hexagon Corporation. All rights reserved.",
          color: "#99a1af",
          level: 6
        }
      },

      render: (props) => <AdminFooter {...props} />
    }
  },

  root: {
    render: ({ children }) => <div className="min-h-screen">{children}</div>,
  },
};

export default puckConfig;
