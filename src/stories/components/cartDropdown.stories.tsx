import type { Meta, StoryObj } from "@storybook/react";

import CartDropdown from "components/CartDropdown";

import items from "mocks/cartList";

const meta: Meta<typeof CartDropdown> = {
  title: "Dropdown/CartDropdown",
  component: CartDropdown,
  tags: ["autodocs"],
  argTypes: {
    items: {
      name: "Itens (items)",
      description:
        "Recebe a soma do valor de todos os itens do carrinho de compras."
    },
    total: {
      name: "Total (total)",
      description: "Recebe um array de objetos do tipo CartList"
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
type Story = StoryObj<typeof CartDropdown>;

export const Default: Story = {
  args: {
    items,
    total: "R$300,00"
  }
};

export const Empty: Story = {
  args: {}
};
