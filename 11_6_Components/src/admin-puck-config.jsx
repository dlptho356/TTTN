// import React from 'react';
import AdminHeading from './components/admin-heading';
import AdminText from './components/admin-text';
import AdminImage from './components/admin-image';
import AdminSection from './components/admin-section';
import AdminHero from './components/admin-hero';
import AdminContent, {ContainerRadiusFields} from './components/admin-content';
import AdminMultipleContent, {MultiContainerRadiusFields} from './components/admin-multipleContent';
import AdminaboutContent, {AboutContainerRadiusFields} from './components/admin-aboutContent';
// import AdminHeader from './components/admin-header';
//Config — đăng ký 5 components với fields + defaultProps + render.

export const puckConfig = {
  components: {
    Heading: {
      label: 'Tiêu đề',
      fields: {
        content: { type: 'text', label: 'Nội dung', contentEditable: true },
        level: {
          type: 'select', label: 'Cấp độ',
          options: [
            { label: 'H1', value: 1 }, { label: 'H2', value: 2 },
            { label: 'H3', value: 3 }, { label: 'H4', value: 4 },
            { label: 'H5', value: 5 }, { label: 'H6', value: 6 }
          ]
        },
        align: {
          type: 'select', label: 'Căn lề',
          options: [
            { label: 'Trái', value: 'left' },
            { label: 'Giữa', value: 'center' },
            { label: 'Phải', value: 'right' }
          ]
        }
      },
      defaultProps: { content: 'Tiêu đề', level: 2, align: 'left' },
      render: (props) => <AdminHeading {...props} />
    },

    Text: {
      label: 'Văn bản',
      fields: {
        content: { type: 'textarea', label: 'Nội dung', contentEditable: true },
        align: {
          type: 'select', label: 'Căn lề',
          options: [
            { label: 'Trái', value: 'left' },
            { label: 'Giữa', value: 'center' },
            { label: 'Phải', value: 'right' },
            { label: 'Đều', value: 'justify' }
          ]
        }
      },
      defaultProps: { content: 'Nhập văn bản ở đây...', align: 'left' },
      render: (props) => <AdminText {...props} />
    },

    Image: {
      label: 'Ảnh',
      fields: {
        src: { type: 'text', label: 'URL ảnh' },
        alt: { type: 'text', label: 'Alt text' },
        width: { type: 'text', label: 'Chiều rộng', default: '100%' },
        height: { type: 'text', label: 'Chiều cao', default: 'auto' },
        borderRadius: { type: 'text', label: 'Bo góc', default: '0' },
        align: {
          type: 'select', label: 'Căn lề',
          options: [
            { label: 'Trái', value: 'left' },
            { label: 'Giữa', value: 'center' },
            { label: 'Phải', value: 'right' }
          ]
        }
      },
      defaultProps: {
        src: 'https://via.placeholder.com/800x400',
        alt: 'Ảnh minh họa',
        width: '100%', height: 'auto', borderRadius: '0', align: 'center'
      },
      render: (props) => <AdminImage {...props} />
    },

    Section: {
      label: 'Khoảng (Section)',
      fields: {
        container: {
          type: 'select', label: 'Chiều rộng',
          options: [
            { label: 'Small (640px)', value: 'sm' },
            { label: 'Medium (768px)', value: 'md' },
            { label: 'Large (1024px)', value: 'lg' },
            { label: 'XL (1280px)', value: 'xl' }
          ]
        },
        background: {
          type: 'object', label: 'Background',
          objectFields: {
            type: {
              type: 'select', label: 'Loại',
              options: [
                { label: 'Màu', value: 'color' },
                { label: 'Gradient', value: 'gradient' },
                { label: 'Ảnh', value: 'image' }
              ]
            },
            color: { type: 'text', label: 'Màu nền', default: '#ffffff' },
            fromColor: { type: 'text', label: 'Gradient từ', default: '#667eea' },
            toColor: { type: 'text', label: 'Gradient đến', default: '#764ba2' },
            direction: { type: 'text', label: 'Hướng gradient', default: 'to right' },
            bg_image: { type: 'text', label: 'URL ảnh nền' },
            opacity: { type: 'number', label: 'Độ mờ', min: 0, max: 1, step: 0.1, default: 1 }
          }
        },
        padding_x: { type: 'number', label: 'Padding ngang', min: 0, max: 16, default: 4 },
        padding_y: { type: 'number', label: 'Padding dọc', min: 0, max: 16, default: 4 },
        content: { type: 'slot' } // Cho phép nested components
      },
      defaultProps: {
        container: 'lg',
        background: { type: 'color', color: '#ffffff' },
        padding_x: 4, padding_y: 4,
        content: []
      },
      render: (props) => <AdminSection {...props} />
    },

    Hero: {
      label: 'Hero Banner',
      fields: {
        title: { type: 'text', label: 'Tiêu đề', contentEditable: true },
        subtitle: { type: 'textarea', label: 'Mô tả ngắn', contentEditable: true },
        buttons: {
          type: 'array', label: 'Danh sách nút',
          arrayFields: {
            text: { type: 'text', label: 'Text nút', contentEditable: true },
            url: { type: 'text', label: 'URL' },
            style: {
              type: 'select', label: 'Style',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Outline', value: 'outline' }
              ]
            }
          },
          getItemSummary: (item) => item.text
        },
        background: {
          type: 'object', label: 'Background',
          objectFields: {
            type: {
              type: 'select', label: 'Loại',
              options: [
                { label: 'Màu', value: 'color' },
                { label: 'Gradient', value: 'gradient' },
                { label: 'Ảnh', value: 'image' }
              ]
            },
            color: { type: 'text', label: 'Màu nền', default: '#ffffff' },
            gradientFrom: { type: 'text', label: 'Gradient từ', default: '#667eea' },
            gradientTo: { type: 'text', label: 'Gradient đến', default: '#764ba2' },
            gradientDirection: { type: 'text', label: 'Hướng', default: 'to bottom right' },
            imageUrl: { type: 'text', label: 'URL ảnh nền' }
          }
        },
        layout: {
          type: 'object', label: 'Bố cục',
          objectFields: {
            align: {
              type: 'select', label: 'Căn lề',
              options: [
                { label: 'Trái', value: 'left' },
                { label: 'Giữa', value: 'center' },
                { label: 'Phải', value: 'right' }
              ]
            }
          }
        }
      },
      defaultProps: {
        title: 'Chào mừng đến với website',
        subtitle: 'Chúng tôi cung cấp những sản phẩm và dịch vụ tốt nhất',
        buttons: [
          { text: 'Tìm hiểu thêm', url: '#', style: 'primary' },
          { text: 'Liên hệ', url: '#contact', style: 'outline' }
        ],
        background: {
          type: 'gradient',
          gradientFrom: '#667eea', gradientTo: '#764ba2',
          gradientDirection: 'to bottom right'
        },
        layout: { align: 'center' }
      },
      render: (props) => <AdminHero {...props} />
    },

    Header: {

    },

    Content: {
      label: "Content Banner",
      fields: {
        background: {
          type: 'object',
          label: 'Background',
          objectFields: {
            type: {
              type: 'select',
              label: 'Loại',
              options: [
                { label: 'Màu', value: 'color' },
                { label: 'Gradient', value: 'gradient' },
                { label: 'Ảnh', value: 'image' },
                { label: 'Gif', value: 'gif' }
              ]
            },
            color: { type: 'text', label: 'Màu nền', default: '#ffffff' },
            gradientFrom: { type: 'text', label: 'Gradient từ', default: '#667eea' },
            gradientTo: { type: 'text', label: 'Gradient đến', default: '#764ba2' },
            gradientDirection: { type: 'text', label: 'Hướng', default: 'to bottom right' },
            imageUrl: { type: 'text', label: 'URL ảnh nền' },
            gif: { type: 'text', label: 'URL gif' }
          }
        },

        container: {
          type: 'object',
          label: 'Container',
          objectFields: {
            
            containerLayout: {
              type: 'object', 
              label: 'Bố cục',
              objectFields: {
                align: {
                  type: 'select', label: 'Căn ô',
                  options: [
                    { label: 'Trái', value: 'left' },
                    { label: 'Giữa', value: 'center' },
                    { label: 'Phải', value: 'right' }
                  ]
                }
              }
            },
            
            containerRadius: {
              type: 'custom',
              label: 'Chọn góc để bo tròn',
              render: ContainerRadiusFields 
            },

            eyebrow: {
              label: 'Nhãn tiêu đề',
              type: 'object',
              objectFields: {
                content: { type: 'text', label: 'Nội dung', contentEditable: true },
                color: { type: 'text', label: 'Màu chữ', default: '#000000' },
                level: {
                  type: 'select',
                  label: 'Cấp độ',
                  options: [
                    { label: 'H1', value: 1 },
                    { label: 'H2', value: 2 },
                    { label: 'H3', value: 3 },
                    { label: 'H4', value: 4 },
                    { label: 'H5', value: 5 },
                    { label: 'H6', value: 6 },
                  ],
                },
              },
            },

            headding: {
              type: 'object',
              label: 'Tiêu đề',
              objectFields: {
                content: { type: 'text', label: 'Nội dung', contentEditable: true },
                color: { type: 'text', label: 'Màu chữ', default: '#000000' },
                level: {
                type: 'select',
                label: 'Cấp độ',
                  options: [
                    { label: 'H1', value: 1 },
                    { label: 'H2', value: 2 },
                    { label: 'H3', value: 3 },
                    { label: 'H4', value: 4 },
                    { label: 'H5', value: 5 },
                    { label: 'H6', value: 6 },
                  ],
                },
              }
            },

            subtitle: {
              type: 'object',
              label: 'Văn bản',
              objectFields: {
                content: { type: 'text', label: 'Nội dung', contentEditable: true },
                color: { type: 'text', label: 'Màu chữ', default: '#000000' },
                level: {
                type: 'select',
                label: 'Cấp độ',
                  options: [
                    { label: 'H1', value: 1 },
                    { label: 'H2', value: 2 },
                    { label: 'H3', value: 3 },
                    { label: 'H4', value: 4 },
                    { label: 'H5', value: 5 },
                    { label: 'H6', value: 6 },
                  ],
                },
              }
            },

            button: {
              type: 'object',
              label: 'Nút',
              objectFields: {
                url: { type: 'text', label: 'URL'},
                content: { type: 'text', label: 'Nội dung', contentEditable: true },
                colorText: { type: 'text', label: 'Màu chữ', default: '#000000' },
                level: {
                type: 'select',
                label: 'Cấp độ',
                  options: [
                    { label: 'H1', value: 1 },
                    { label: 'H2', value: 2 },
                    { label: 'H3', value: 3 },
                    { label: 'H4', value: 4 },
                    { label: 'H5', value: 5 },
                    { label: 'H6', value: 6 },
                  ],
                },

                buttonBg: {
                  type: 'object',
                  label: 'Nền của nút bấm',
                  objectFields:{
                    type: {
                      type: 'select',
                      label: 'Loại',
                      options: [
                        { label: 'Màu', value: 'color' },
                        { label: 'Gradient', value: 'gradient' },
                        { label: 'Ảnh', value: 'image' },
                        { label: 'Gif', value: 'gif' }
                      ]
                    },
                      color: { type: 'text', label: 'Màu nền', default: '#ffffff' },
                      gradientFrom: { type: 'text', label: 'Gradient từ', default: '#667eea' },
                      gradientTo: { type: 'text', label: 'Gradient đến', default: '#764ba2' },
                      gradientDirection: { type: 'text', label: 'Hướng', default: 'to bottom right' },
                      imageUrl: { type: 'text', label: 'URL ảnh nền' },
                      gif: { type: 'text', label: 'URL gif' },
                }},  
                buttonRadius: {
                  type: 'custom',
                  label: 'Chọn góc để bo tròn',
                  render: ContainerRadiusFields

                }
              }
            },  
          },
        },
      },

      defaultProps: {
        background: { type: 'image', imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0M5o7A6zKwbrwWn6Co6zhAf9q35aHB8CLlL02HR7sVW5UWl3F"},
        container: {
          eyebrow: {
            content: 'LAN TỎA GIÁ TRỊ ĐẤT',
            color: '#FFFFFF',
            level: 6,
          },
          headding: {
            content: 'Sen Hồng',
            level: 0,
          },
          subtitle: {
            content: 'CLB Doanh nhân Đồng Tháp tại TPHCM quy tụ những người con quê hương Đất Sen Hồng. Với tinh thần Hợp tác - Đổi mới - Phát triển, CLB đóng vai trò là cầu nối chiến lược, hợp tác, thúc đẩy giá trị kinh doanh và lan toả sẻ chia nghĩa tình quê hương.',
            color: '#FFFFFF',
            level: 6,
          },
          containerRadius: [
            "rounded-tr-[100px]",
            "rounded-bl-[100px]",
          ],
          
          button: {
            content: 'Tham gia cộng đồng',
            color: 'white',
            level: 6,
            buttonRadius: [
              "rounded-tr-[100px]",
              "rounded-br-[100px]",
              "rounded-bl-[100px]",
              "rounded-tl-[100px]",
            ],
            buttonBg: {
            type: 'color',
            color: 'blue', 
            },
          }
        },
      },

      render: (props) => <AdminContent {...props} />
    },

    AboutContent: {
      label: "AboutContent",
      fields: {
        background: {
          type: 'object',
          label: 'Background',
          objectFields: {
            type: {
              type: 'select',
              label: 'Loại',
              options: [
                { label: 'Màu', value: 'color' },
                { label: 'Gradient', value: 'gradient' },
                { label: 'Ảnh', value: 'image' },
                { label: 'Gif', value: 'gif' }
              ]
            },
            color: { type: 'text', label: 'Màu nền', default: '#ffffff' },
            gradientFrom: { type: 'text', label: 'Gradient từ', default: '#667eea' },
            gradientTo: { type: 'text', label: 'Gradient đến', default: '#764ba2' },
            gradientDirection: { type: 'text', label: 'Hướng', default: 'to bottom right' },
            imageUrl: { type: 'text', label: 'URL ảnh nền' },
            gif: { type: 'text', label: 'URL gif' }
          }
        },

        container: {
          type: 'array',
          label: 'Container',
          maxItems: 6,
          arrayFields: {
            title: {
              type: 'object',
              label: 'Title',
              objectFields: {
                content: { type: 'text', label: 'Nội dung', contentEditable: true, default: 'Title' },
                color: { type: 'text', label: 'Màu chữ', default: '#000000' },
                level: {
                  type: 'select',
                  label: 'SizeH',
                  options: [
                    { label: 'H1', value: 1 },
                    { label: 'H2', value: 2 },
                    { label: 'H3', value: 3 },
                    { label: 'H4', value: 4 },
                    { label: 'H5', value: 5 },
                    { label: 'H6', value: 6 },
                  ],
                  default: 2,
                },
              },
            },

            type: {
              type: 'select',
              label: 'Loại',
              options: [
                { label: 'Paragraph', value: 'paragraph' },
                { label: 'Info', value: 'info' }
              ],
              default: 'paragraph'
            },

            containerBackground: {
              type: 'object',
              label: 'Background',
              objectFields: {
                type: {
                  type: 'select',
                  label: 'Loại',
                  options: [
                    { label: 'Màu', value: 'color' },
                    { label: 'Gradient', value: 'gradient' },
                    { label: 'Ảnh', value: 'image' },
                    { label: 'Gif', value: 'gif' }
                  ]
                },
                color: { type: 'text', label: 'Màu nền', default: '#ffffff' },
                gradientFrom: { type: 'text', label: 'Gradient từ', default: '#667eea' },
                gradientTo: { type: 'text', label: 'Gradient đến', default: '#764ba2' },
                gradientDirection: { type: 'text', label: 'Hướng', default: 'to bottom right' },
                imageUrl: { type: 'text', label: 'URL ảnh nền' },
                gif: { type: 'text', label: 'URL gif' }
              }
            },

            containerRadius: {
              type: 'custom',
              label: 'Chọn góc để bo tròn',
              render: AboutContainerRadiusFields 
            },

            paragraph: {
              type: 'object',
              label: 'Paragraph',
              objectFields: {
                content: { type: 'textarea', label: 'Nội dung', contentEditable: true, default: '...' },
                color: { type: 'text', label: 'Màu chữ', default: '#000000' },
                level: {
                  type: 'select',
                  label: 'SizeH',
                  options: [
                    { label: 'H1', value: 1 },
                    { label: 'H2', value: 2 },
                    { label: 'H3', value: 3 },
                    { label: 'H4', value: 4 },
                    { label: 'H5', value: 5 },
                    { label: 'H6', value: 6 },
                  ],
                  default: 2,
                },
              }
            },

            infoItems: {
              type: 'array',
              label: 'Info list',
              arrayFields: {
                avatarUrl: { type: 'text', label: 'Avatar URL', default: '' },
                name: { type: 'text', label: 'Họ tên', default: 'Họ tên', contentEditable: true },
                clubPosition: { type: 'text', label: 'Chức vụ clb', default: 'Chức vụ clb', contentEditable: true },
                companyPosition: { type: 'text', label: 'Chức vụ doanh nghiệp', default: 'Chức vụ doanh nghiệp', contentEditable: true },
                company: { type: 'text', label: 'Doanh nghiệp', default: 'Doanh nghiệp', contentEditable: true },
              },
              getItemSummary: (item) => item.name || 'Info'
            },
          },
          getItemSummary: (item) => {
            const title = item.title?.content || item.title || item.container?.title?.content || item.container?.title || '';
            return `${title || 'Tiêu đề'}`;
          }
        },
      },

      defaultProps: {
        background: { type: 'image', imageUrl: "https://webdemo.hexagon.xyz/medias/hoavanvct.png"},
        container: [
          {
            title: { content: 'VỀ CÂU LẠC BỘ', color: '#0B5077', level: 2 },
            type: 'paragraph',
            containerRadius: [],
            containerBackground: { type: 'image', imageUrl: "https://webdemo.hexagon.xyz/medias/business-man-holding-smart-device-pointing-index-finger-screen-with-dot-connection-digital-illustration%201.png"},
            paragraph: {
              content: 'CLB Doanh nhân Đồng Tháp tại TP.HCM là nơi hội tụ các doanh nghiệp, nhà quản lý và cá nhân khởi nghiệp trên địa bàn tỉnh. Với tinh thần kết nối - đồng hành - sẻ chia, CLB đóng vai trò thúc đẩy giá trị kinh doanh trong bối cảnh hội nhập và chuyển đổi số. ',
              color: '#0B5077',
              level: 5,
            },
          },
          {
            title: { content: 'CƠ CẤU TỔ CHỨC', color: '#0B5077', level: 2 },
            type: 'info',
            containerRadius: [],
            containerBackground: { type: 'transparen'},
            infoItems: [
              {
                avatarUrl: 'data:image/png;base64,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',
                name: 'Đoàn Thọ',
                clubPosition: 'Chủ tịch',
                companyPosition: 'CEO',
                company: 'Công ty 4',
              },
            ],
          },
        ],
        
      },  
      render: (props) => <AdminaboutContent {...props} />
    },
    
    MultipleContent: {
      label: "Multiple Content Banner",
      fields: {
        background: {
          type: 'object',
          label: 'Background',
          objectFields: {
            type: {
              type: 'select',
              label: 'Loại',
              options: [
                { label: 'Màu', value: 'color' },
                { label: 'Gradient', value: 'gradient' },
                { label: 'Ảnh', value: 'image' },
                { label: 'Gif', value: 'gif' }
              ]
            },
            color: { type: 'text', label: 'Màu nền', default: '#ffffff' },
            gradientFrom: { type: 'text', label: 'Gradient từ', default: '#667eea' },
            gradientTo: { type: 'text', label: 'Gradient đến', default: '#764ba2' },
            gradientDirection: { type: 'text', label: 'Hướng', default: 'to bottom right' },
            imageUrl: { type: 'text', label: 'URL ảnh nền' },
            gif: { type: 'text', label: 'URL gif' }
          }
        },
        
        headding: {
          type: 'object',
          label: 'Tiêu đề',
          objectFields: {
            content: { type: 'text', label: 'Nội dung', contentEditable: true },
            color: { type: 'text', label: 'Màu chữ', default: '#000000' },
            level: {
              type: 'select',
              label: 'Cấp độ',
              options: [
                { label: 'H1', value: 1 },
                { label: 'H2', value: 2 },
                { label: 'H3', value: 3 },
                { label: 'H4', value: 4 },
                { label: 'H5', value: 5 },
                { label: 'H6', value: 6 },
              ],
            },
          }
        },

        subtitle: {
          type: 'object',
          label: 'Văn bản',
          objectFields: {
            content: { type: 'text', label: 'Nội dung', contentEditable: true },
            color: { type: 'text', label: 'Màu chữ', default: '#000000' },
            level: {
              type: 'select',
              label: 'Cấp độ',
              options: [
                { label: 'H1', value: 1 },
                { label: 'H2', value: 2 },
                { label: 'H3', value: 3 },
                { label: 'H4', value: 4 },
                { label: 'H5', value: 5 },
                { label: 'H6', value: 6 },
              ],
            },
          }
        },

        container: {
          type: 'array',
          label: 'Container',
          arrayFields: {
            containerRadius: {
              type: 'custom',
              label: 'Chọn góc để bo tròn',
              render: MultiContainerRadiusFields 
            },

            title: {
              type: 'object',
              label: 'Tiêu đề',
              objectFields: {
                content: { type: 'text', label: 'Nội dung', contentEditable: true, default: 'Tiêu đề' },
                color: { type: 'text', label: 'Màu chữ', default: '#000000' },
                level: {
                  type: 'select',
                  label: 'Cấp độ',
                  options: [
                    { label: 'H1', value: 1 },
                    { label: 'H2', value: 2 },
                    { label: 'H3', value: 3 },
                    { label: 'H4', value: 4 },
                    { label: 'H5', value: 5 },
                    { label: 'H6', value: 6 },
                  ],
                  default: 2,
                },
              }
            },
            icon: {
              type: 'object',
              label: 'Icon',
              objectFields: {
                type: {
                  type: 'select',
                  label: 'Kiểu icon',
                  options: [
                    { label: 'Hình ảnh', value: 'image' },
                    { label: 'Text', value: 'text' },
                  ],
                },
                content: { type: 'text', label: 'Nội dung icon', contentEditable: true, default: '★' },
                imageUrl: { type: 'text', label: 'URL ảnh icon' },
              },
            },

            button: {
              type: 'object',
              label: 'Nút',
              objectFields: {
                url: { type: 'text', label: 'URL', default: '#' },
                content: { type: 'text', label: 'Nội dung', contentEditable: true, default: 'Văn bản' },
                colorText: { type: 'text', label: 'Màu chữ', default: '#000000' },
                level: {
                  type: 'select',
                  label: 'Cấp độ',
                  options: [
                    { label: 'H1', value: 1 },
                    { label: 'H2', value: 2 },
                    { label: 'H3', value: 3 },
                    { label: 'H4', value: 4 },
                    { label: 'H5', value: 5 },
                    { label: 'H6', value: 6 },
                  ],
                  default: 4,
                },

                buttonBg: {
                  type: 'object',
                  label: 'Nền của nút bấm',
                  objectFields:{
                    type: {
                      type: 'select',
                      label: 'Loại',
                      options: [
                        { label: 'Màu', value: 'color' },
                        { label: 'Gradient', value: 'gradient' },
                        { label: 'Ảnh', value: 'image' },
                        { label: 'Gif', value: 'gif' }
                      ],
                      default: 'color'
                    },
                      color: { type: 'text', label: 'Màu nền', default: '#ffffff' },
                      gradientFrom: { type: 'text', label: 'Gradient từ', default: '#667eea' },
                      gradientTo: { type: 'text', label: 'Gradient đến', default: '#764ba2' },
                      gradientDirection: { type: 'text', label: 'Hướng', default: 'to bottom right' },
                      imageUrl: { type: 'text', label: 'URL ảnh nền' },
                      gif: { type: 'text', label: 'URL gif' },
                }},  
                buttonRadius: {
                  type: 'custom',
                  label: 'Chọn góc để bo tròn',
                  render: MultiContainerRadiusFields

                }
              }
            },
          },
          getItemSummary: (item) => {
            const title = item.title?.content || item.title || item.container?.title?.content || item.container?.title || '';
            return `${title || 'Tiêu đề'}`;
          },

          defaultProps:{
            icon: {
              type: 'image',
              imageUrl: 'https://cdn-icons-png.flaticon.com/512/10221/10221159.png',
              content: 'URL',
              color: '#000000',
              size: '5xl',
              
            }
          }  
        },
      },

      defaultProps: {
        background: { type: 'gradient', gradientTo: '#f0e0ff', gradientFrom: '#dce8ff', gradientDirection: 'to bottom' },
        headding: {
          content: 'CÁC BAN CHUYÊN MÔN',
          color: '#0b4c8c',
          level: 2,
        },
        subtitle: {
          content: 'CLB DOANH NHÂN ĐỒNG THÁP TẠI TP. HỒ CHÍ MINH',
          color: '#0b4c8c',
          level: 6,
        },
        
        container: [
          {
            title: {
              content: 'Ban Kinh tế - Đầu tư',
              color: '#FFFFFF',
              level: 4,
            },
            icon: {
              type: 'image',
              imageUrl: 'https://webdemo.hexagon.xyz/medias/economy%201-2.png',
              content: 'URL',
              color: '#FFFFFF',
              size: '5xl',
            },
            button: {
              content: 'Xem hoạt động →' ,
              url: '#',
              colorText: '#FFFFFF',
              level: 6,
              buttonBg: {
                type: 'color',
                color: '#fde047',
              },
              buttonRadius: [
                'rounded-tl-[100px]',
                'rounded-tr-[100px]',
                'rounded-bl-[100px]',
                'rounded-br-[100px]'
              ],
            },
            containerRadius: [
              'rounded-tl-[100px]',
              'rounded-br-[100px]'
            ],
          },

          {
            title: {
              content: 'Ban Văn hóa - Thể thao',
              color: '#FFFFFF',
              level: 4,
            },
            icon: {
              type: 'image',
              imageUrl: 'https://webdemo.hexagon.xyz/medias/economy%201.png',
              content: 'URL',
              color: '#FFFFFF',
              size: '5xl',
            },
            button: {
              content: 'Xem hoạt động →' ,
              url: '#',
              colorText: '#FFFFFF',
              level: 6,
              buttonBg: {
                type: 'color',
                color: '#fde047',
              },
              buttonRadius: [
                'rounded-tl-[100px]',
                'rounded-tr-[100px]',
                'rounded-bl-[100px]',
                'rounded-br-[100px]'
              ],
            },
            containerRadius: [
              'rounded-tl-[100px]',
              'rounded-br-[100px]'
            ],
          },

          {
            title: {
              content: 'Ban Xã hội - Cộng đồng',
              color: '#FFFFFF',
              level: 4,
            },
            icon: {
              type: 'image',
              imageUrl: 'https://webdemo.hexagon.xyz/medias/economy 1-1.png',
              content: 'URL',
              color: '#FFFFFF',
              size: '5xl',
            },
            button: {
              content: 'Xem hoạt động →' ,
              url: '#',
              colorText: '#FFFFFF',
              level: 6,
              buttonBg: {
                type: 'color',
                color: '#fde047',
              },
              buttonRadius: [
                'rounded-tl-[100px]',
                'rounded-tr-[100px]',
                'rounded-bl-[100px]',
                'rounded-br-[100px]'
              ],
            },
            containerRadius: [
              'rounded-tl-[100px]',
              'rounded-br-[100px]'
            ],
          },

          {
            title: {
              content: 'Ban Khởi nghiệp',
              color: '#FFFFFF',
              level: 4,
            },
            icon: {
              type: 'image',
              imageUrl: 'https://webdemo.hexagon.xyz/medias/Rectangle 4007.png',
              content: 'URL',
              color: '#FFFFFF',
              size: '5xl',
            },
            button: {
              content: 'Xem hoạt động →' ,
              url: '#',
              colorText: '#FFFFFF',
              level: 6,
              buttonBg: {
                type: 'color',
                color: '#fde047',
              },
              buttonRadius: [
                'rounded-tl-[100px]',
                'rounded-tr-[100px]',
                'rounded-bl-[100px]',
                'rounded-br-[100px]'
              ],
            },
            containerRadius: [
              'rounded-tl-[100px]',
              'rounded-br-[100px]'
            ],
          },

          {
            title: {
              content: 'Ban Giao thương quốc tế',
              color: '#FFFFFF',
              level: 4,
            },
            icon: {
              type: 'image',
              imageUrl: 'https://webdemo.hexagon.xyz/medias/Rectangle%204008.png',
              content: 'URL',
              color: '#FFFFFF',
              size: '5xl',
            },
            button: {
              content: 'Xem hoạt động →' ,
              url: '#',
              colorText: '#FFFFFF',
              level: 6,
              buttonBg: {
                type: 'color',
                color: '#fde047',
              },
              buttonRadius: [
                'rounded-tl-[100px]',
                'rounded-tr-[100px]',
                'rounded-bl-[100px]',
                'rounded-br-[100px]'
              ],
            },
            containerRadius: [
              'rounded-tl-[100px]',
              'rounded-br-[100px]'
            ],
          },
        ],
      },

      render: (props) => <AdminMultipleContent {...props} />
    },
  },


  // Sidebar categories
  categoryGroups: [
    { title: 'Cơ bản', components: ['Heading', 'Text', 'Image'] },
    { title: 'Layout', components: ['Section'] },
    { title: 'Nâng cao', components: ['Hero'] }
  ],

  // Root config
  root: {
    render: ({ children }) => (
      <div className="min-h-screen">{children}</div>
    )
  }
};

export default puckConfig;
