import type { Meta, StoryObj } from "@storybook/react";

import Logo from "components/Logo";

const meta: Meta<typeof Logo> = {
  title: "Brand/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    color: {
      name: "Logo color (color)",
      description: "Opções de cores para o texto do logotipo",
      options: ["black", "white"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "white"
        },
        type: {
          summary: "Opções de cores",
          detail: "black, white"
        }
      }
    },
    size: {
      name: "Logo size (size)",
      description: "Opções de tamanho para o logotipo",
      options: ["normal", "large"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "normal"
        },
        type: {
          summary: "Opções de tamanho",
          detail: "normal, large"
        }
      }
    },
    hideOnMobile: {
      name: "Hide on Mobile (hideOnMobile)",
      description:
        "Opcional, reduz o tamanho do logotipo escondendo o texto quando a resolução de tela for Mobile"
    },
    id: {
      name: "ID (id)",
      description: "Opcional, define um id para o logotipo"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Normal: Story = {
  args: {
    hideOnMobile: false
  }
};

export const Black: Story = {
  args: {
    hideOnMobile: false,
    color: "black"
  },
  parameters: {
    backgrounds: {
      default: "won-light"
    }
  }
};

export const Large: Story = {
  args: {
    hideOnMobile: false,
    size: "large"
  }
};

export const Mobile: Story = {
  args: {
    hideOnMobile: true
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
};
