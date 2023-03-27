import type { Meta, StoryObj } from "@storybook/react";

import Highlight from "components/Highlight";

import highlight from "mocks/highlight";

const meta: Meta<typeof Highlight> = {
  title: "Component/Highlight",
  component: Highlight,
  tags: ["autodocs"],
  argTypes: {
    alignment: {
      options: ["right", "left"],
      control: { type: "select" }
    }
  },
  args: { ...highlight },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Highlight>;

export const Default: Story = {
  args: {}
};
