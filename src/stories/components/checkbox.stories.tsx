import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "components/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    labelColor: {
      options: ["white", "black"],
      control: { type: "select" }
    },
    onCheck: { action: "check" }
  },
  args: {
    labelColor: "white",
    name: "Categorias",
    label: "Ação",
    labelFor: "action"
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Checked: Story = {
  args: {
    isChecked: true
  }
};

export const Unchecked: Story = {
  args: {
    isChecked: false
  }
};
