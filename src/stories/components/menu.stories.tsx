import type { Meta, StoryObj } from "@storybook/react";
import Menu from "components/Menu";

const meta: Meta<typeof Menu> = {
  title: "Navigation/Menu",
  component: Menu,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {}
};

export const Logged: Story = {
  args: {
    username: "Daniel Silva"
  }
};
