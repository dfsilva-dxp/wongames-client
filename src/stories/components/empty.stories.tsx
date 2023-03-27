import type { Meta, StoryObj } from "@storybook/react";

import Empty from "components/Empty";

const meta: Meta<typeof Empty> = {
  title: "Component/Empty",
  component: Empty,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    title: "Your wishlist is empty",
    description: "Games added to your wishlist will appear here",
    hasLink: true
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  args: {}
};
