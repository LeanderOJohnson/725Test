// Import Flux Design System tokens so all components render correctly in Storybook
import '../round-yellow-button-design/project/_ds/design-system-kit-35cd19c1-52e1-43d1-9d9c-8b13ab3720d0/tokens/fonts.css';
import '../round-yellow-button-design/project/_ds/design-system-kit-35cd19c1-52e1-43d1-9d9c-8b13ab3720d0/tokens/colors.css';
import '../round-yellow-button-design/project/_ds/design-system-kit-35cd19c1-52e1-43d1-9d9c-8b13ab3720d0/tokens/typography.css';
import '../round-yellow-button-design/project/_ds/design-system-kit-35cd19c1-52e1-43d1-9d9c-8b13ab3720d0/tokens/spacing.css';
import '../round-yellow-button-design/project/_ds/design-system-kit-35cd19c1-52e1-43d1-9d9c-8b13ab3720d0/tokens/base.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;