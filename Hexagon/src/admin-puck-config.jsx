import AdminHeader from "./Components/admin-header";
import AdminBanner from "./Components/admin-banner";

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
          { content: "Trang chủ",
            url: "/",
            color: "#d1d5db",
            level: 6 
          },
          { content: "Giới thiệu", 
            url: "/about", 
            color: "#d1d5db", 
            level: 6 
          },
          { content: "Dịch vụ", 
            url: "/services", 
            color: "#d1d5db", 
            level: 6 
          },
          { content: "Hỗ trợ", 
            url: "/support", 
            color: "#d1d5db", 
            level: 6 
          },
          { content: "Liên hệ", 
            url: "/contact", 
            color: "#d1d5db", 
            level: 6 
          }
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
            imgUrl: {type: 'text',},
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
                gradientDirection: "to bottom right"
            },
            imgUrl: "/Banner/globalmyc.webp",
            eyebrow: {
              content: "CÔNG NGHỆ TƯƠNG LAI",
              color: "#f0b100",
              level: 6
            },
            title1: [
              {
                text: "Giải pháp công nghệ",
                timeset: "2000",
                color: "#FFFFFF",
                level: 1
              },
              {
                text: "Thi công & lắp đặt",
                timeset: "2000",
                color: "#FFFFFF",
                level: 1
              },
              {
                text: "Cung cấp thiết bị CNTT",
                timeset: "2000",
                color: "#FFFFFF",
                level: 1
              },
              {
                text: "Dịch vụ CNTT",
                timeset: "2000",
                color: "#FFFFFF",
                level: 1
              },
            ],
            subtitle: {
              content: "HEXAGON kiến tạo các giải pháp chuyển đổi số toàn diện, từ phần mềm đến cung cấp các giải pháp internet, thiết bị công nghệ thông tin, giúp doanh nghiệp bứt phá trong kỷ nguyên số.",
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
                  gradientDirection: "to right"
                },
              },
              {
                url: "/contact",
                content: "Liên hệ Tư vấn",
                colorText: "#ffffff",
                level: 6,
                buttonBg: {
                  type: "color",
                  color: "ffffff1a"
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
              gradientColor3: "#F7931E"
            },
            
        },

        render: (props) => <AdminBanner {...props} />,
    }
  },

  root: {
    render: ({ children }) => <div className="min-h-screen">{children}</div>,
  },
};

export default puckConfig;