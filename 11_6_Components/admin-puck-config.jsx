// import React from 'react';
import AdminHeading from './components/admin-heading';
import AdminText from './components/admin-text';
import AdminImage from './components/admin-image';
import AdminSection from './components/admin-section';
import AdminHero from './components/admin-hero';
import AdminContent, {ContainerRadiusFields} from './components/admin-content';
import AdminMultipleContent, {MultiContainerRadiusFields} from './components/admin-multipleContent';
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
        background: { type: 'color', color: '#00CCFF' },
        container: {
          eyebrow: {
            content: 'Eyebrow',
            color: '#000000',
            level: 6,
          },
          headding: {
            content: 'Tiêu đề',
            color: '#000000',
            level: 2,
          },
          subtitle: {
            content: 'Văn bản',
            color: '#000000',
            level: 6,
          },
          button: {
            content: 'Văn bản',
            color: '#007BFF',
            level: 4,
            buttonBg: {
            type: 'color',
            color: '#fde047' 
          }
          }
        },
      },

      render: (props) => <AdminContent {...props} />
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
                    { label: 'Text', value: 'text' },
                    { label: 'Hình ảnh', value: 'image' },
                  ],
                  default: 'text',
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
            return `${title || 'Container'}`;
          }
        },
      },

      defaultProps: {
        background: { type: 'color', color: '#FFFF00' },
        headding: {
          content: 'Tiêu đề',
          color: '#000000',
          level: 2,
        },
        subtitle: {
          content: 'Văn bản',
          color: '#000000',
          level: 6,
        },
        container: [
          {
            title: {
              content: 'Tiêu đề',
              color: '#000000',
              level: 2,
            },
            icon: {
              type: 'image',
              imageUrl: 'https://cdn-icons-png.flaticon.com/512/10221/10221159.png',
              content: 'URL',
              color: '#000000',
              size: '5xl',
            },
            button: {
              content: 'Văn bản',
              url: '#',
              colorText: '#000000',
              level: 4,
              buttonBg: {
                type: 'color',
                color: '#fde047',
              },
              buttonRadius: [],
            },
            containerRadius: [],
          },
        ],
      },

      render: (props) => <AdminMultipleContent {...props} />
    }
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
