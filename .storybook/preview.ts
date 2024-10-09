import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "Dark", value: "#333230" },
        { name: "Light", value: "#ffffff" },
        { name: "Gold", value: "#b9a55e"},
      ],
      default: "Light",
    },
  },
};

export default preview;
