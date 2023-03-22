import type { Meta, StoryObj } from "@storybook/react";

import CartIcon from "components/CartIcon";

const meta: Meta<typeof CartIcon> = {
  title: "Icons/CartIcon",
  component: CartIcon,
  tags: ["autodocs"],
  argTypes: {
    quantity: {
      name: "Quantity (quantity)",
      description: "Recebe a quantidade de itens do badge"
    }
  },
  args: {},
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof CartIcon>;

export const WithItems: Story = {
  args: {
    quantity: 3
  }
};

export const WithoutItems: Story = {
  args: {}
};
