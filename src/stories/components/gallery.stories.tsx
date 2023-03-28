import type { Meta, StoryObj } from "@storybook/react";

import Gallery from "components/Gallery";

import gallery from "mocks/gallery";

const meta: Meta<typeof Gallery> = {
  title: "Slider/Gallery",
  component: Gallery,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    items: gallery
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Gallery>;

export const Basic: Story = {};
