/** @type { import('@storybook/react').Preview } */
import * as DocBlock from "@storybook/blocks"
const preview = {
  parameters: {
    docs: {
      page: () => (
        <>
        <DocBlock.Title />
        <DocBlock.Description />
        <DocBlock.Primary />
        <DocBlock.Controls />
        <DocBlock.Stories />
        <DocBlock.ArgTypes />
        </>
      ),
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
