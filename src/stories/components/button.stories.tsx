import type { Meta, StoryObj } from "@storybook/react";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";

import Button from "components/Button";

const meta: Meta<typeof Button> = {
  title: "Form/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    size: {
      name: "Button size",
      type: { name: "string" },
      description: "Opções de tamanho para o componente Button.",
      options: ["small", "medium", "large"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "md"
        },
        type: {
          summary: "Opções de tamanho.",
          detail: "small, medium, large"
        }
      }
    },
    children: {
      name: "Button children",
      description: "O children define o conteúdo do button."
    },
    fullWidth: {
      name: "Full width",
      description: "Opcional, define se o button terá 100% do tamanho do pai."
    },
    icon: {
      name: "Button with icon",
      description:
        "Opcional, possibilita adicionar ícones ao conteúdo do button."
    },
    as: {
      name: "As",
      description:
        "Opcional, define se o componente será renderizado como button ou link.",
      table: {
        type: {
          summary: "Tipos",
          detail: "button ou a"
        }
      }
    },
    minimal: {
      name: "Button minimal",
      description:
        "Opcional, remove os estilos de button renderizando apenas o texto."
    }
  },
  args: {
    children: "Buy now",
    size: "medium",
    fullWidth: false,
    minimal: false
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Small: Story = {
  args: {
    size: "small"
  }
};

export const Medium: Story = {
  args: {}
};

export const Large: Story = {
  args: {
    size: "large"
  }
};

export const FullWidth: Story = {
  args: {
    fullWidth: true
  }
};

export const WithIcon: Story = {
  args: {
    icon: <AddShoppingCart />
  }
};

export const Minimal: Story = {
  args: {
    icon: <AddShoppingCart />,
    minimal: true
  }
};

export const AsLink: Story = {
  args: {
    icon: <AddShoppingCart />,
    minimal: true,
    as: "a",
    href: "/link"
  }
};
