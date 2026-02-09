import type { Preview } from '@storybook/react-vite'
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    layout: 'fullscreen', // ✅ Aquí, fuera de controls
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    
    a11y: {
      test: 'todo'
    }
  },
  
};

export default preview;