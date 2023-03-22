import type { Meta, StoryObj } from "@storybook/react";

import UserDropdown from "components/UserDropdown";

const meta: Meta<typeof UserDropdown> = {
  title: "Dropdown/UserDropdown",
  component: UserDropdown,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    username: "Daniel"
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof UserDropdown>;

export const Default: Story = {
  args: {}
};
