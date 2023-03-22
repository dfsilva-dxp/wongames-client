import type { Meta, StoryObj } from "@storybook/react";
import CartList from "components/CartList";

import Dropdown from "components/Dropdown";

import items from "mocks/cartList";

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    title: "Click here",
    children: <CartList items={items} total="R$300" hasButton />
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {}
};
