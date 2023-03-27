import type { Meta, StoryObj } from "@storybook/react";
import CartList from "components/CartList";

import items from "mocks/cartList";

const meta: Meta<typeof CartList> = {
  title: "Component/CartList",
  component: CartList,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof CartList>;

export const Default: Story = {
  args: {
    items
  }
};

export const WithButton: Story = {
  args: {
    items,
    hasButton: true
  }
};

export const Empty: Story = {
  args: {}
};
