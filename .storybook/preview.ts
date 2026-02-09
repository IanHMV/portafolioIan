import type { Preview } from '@storybook/react-vite'
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    },
    viewport: {
      options: {
        // 📱 MÓVILES
        androidMid: {
          name: "Android Mid (360×800)",
          styles: {
            width: "360px",
            height: "800px",
          },
        },
        iphoneX: {
          name: "iPhone X/11/12/13 (375×812)",
          styles: {
            width: "375px",
            height: "812px",
          },
        },
        iphone14: {
          name: "iPhone 14/15 (390×844)",
          styles: {
            width: "390px",
            height: "844px",
          },
        },
        androidHigh: {
          name: "Android High (412×915)",
          styles: {
            width: "412px",
            height: "915px",
          },
        },
        
        // 📱 TABLETS
        ipadClassic: {
          name: "iPad Clásico (768×1024)",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        ipadAir: {
          name: "iPad Air/Pro (810×1080)",
          styles: {
            width: "810px",
            height: "1080px",
          },
        },
        androidTablet: {
          name: "Android Tablet (800×1280)",
          styles: {
            width: "800px",
            height: "1280px",
          },
        },
        ipadPro11: {
          name: "iPad Pro 11\" (834×1194)",
          styles: {
            width: "834px",
            height: "1194px",
          },
        },
        
        // 💻 ESCRITORIO/LAPTOP
        laptop: {
          name: "Laptop Estándar (1366×768)",
          styles: {
            width: "1366px",
            height: "768px",
          },
        },
        macbook: {
          name: "MacBook (1440×900)",
          styles: {
            width: "1440px",
            height: "900px",
          },
        },
        fullHD: {
          name: "Full HD (1920×1080)",
          styles: {
            width: "1920px",
            height: "1080px",
          },
        },
        qhd: {
          name: "QHD (2560×1440)",
          styles: {
            width: "2560px",
            height: "1440px",
          },
        },
        fourK: {
          name: "4K (3840×2160)",
          styles: {
            width: "3840px",
            height: "2160px",
          },
        },
      }
    },
  },

  initialGlobals: {
    viewport: {
      value: "fullHD",
      isRotated: false
    }
  }
};

export default preview;