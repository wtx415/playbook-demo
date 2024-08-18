import '../src/styles/global.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: { expanded: true },
// };

export default preview;
