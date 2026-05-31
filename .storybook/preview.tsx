import type { Preview } from '@storybook/react-vite'
import { useEffect } from "react";
import "../src/styles/index.css";
import { withRouter } from 'storybook-addon-remix-react-router';

const preview: Preview = {
  decorators: [
    withRouter,
    (Story) => {
      useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://kit.fontawesome.com/82fbe5a20d.js"
        script.crossOrigin = "anonymous"
        document.head.appendChild(script)
      }, [])

      return <Story />
    },
  ],
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
        androidMid: {
          name: "Android Mid (360×800)",
          styles: { width: "360px", height: "800px" },
        },
        iphoneX: {
          name: "iPhone X/11/12/13 (375×812)",
          styles: { width: "375px", height: "812px" },
        },
        iphone14: {
          name: "iPhone 14/15 (390×844)",
          styles: { width: "390px", height: "844px" },
        },
        androidHigh: {
          name: "Android High (412×915)",
          styles: { width: "412px", height: "915px" },
        },
        ipadClassic: {
          name: "iPad Clásico (768×1024)",
          styles: { width: "768px", height: "1024px" },
        },
        ipadAir: {
          name: "iPad Air/Pro (810×1080)",
          styles: { width: "810px", height: "1080px" },
        },
        androidTablet: {
          name: "Android Tablet (800×1280)",
          styles: { width: "800px", height: "1280px" },
        },
        ipadPro11: {
          name: "iPad Pro 11\" (834×1194)",
          styles: { width: "834px", height: "1194px" },
        },
        laptop: {
          name: "Laptop Estándar (1366×768)",
          styles: { width: "1366px", height: "768px" },
        },
        macbook: {
          name: "MacBook (1440×900)",
          styles: { width: "1440px", height: "900px" },
        },
        fullHD: {
          name: "Full HD (1920×1080)",
          styles: { width: "1920px", height: "1080px" },
        },
        qhd: {
          name: "QHD (2560×1440)",
          styles: { width: "2560px", height: "1440px" },
        },
        fourK: {
          name: "4K (3840×2160)",
          styles: { width: "3840px", height: "2160px" },
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