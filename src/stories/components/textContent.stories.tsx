import type { Meta, StoryObj } from "@storybook/react";

import TextContent from "components/TextContent";
import textContent from "mocks/textContent";

const meta: Meta<typeof TextContent> = {
  title: "Typography/TextContent",
  component: TextContent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    ...textContent
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof TextContent>;

export const Basic: Story = {};
