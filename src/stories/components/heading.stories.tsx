import type { Meta, StoryObj } from "@storybook/react";

import Heading from "components/Heading";

const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    children: {
      name: "Heading children (children)",
      description: "O children define o conteúdo do heading."
    },
    color: {
      name: "Heading color (color)",
      description: "Opções de cores para o texto do heading",
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
      name: "Heading size (size)",
      description: "Opções de tamanho para o heading",
      options: ["small", "medium", "huge"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "medium"
        },
        type: {
          summary: "Opções de tamanho",
          detail: "small, medium, huge"
        }
      }
    },
    lineColor: {
      name: "Heading line color (lineColor)",
      description: "Define a cor da underline do heading",
      options: ["primary", "secondary"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "primary"
        },
        type: {
          summary: "Opções de cores",
          detail: "primary, secondary"
        }
      }
    },
    lineLeft: {
      name: "Line left (lineLeft)",
      description: "Opcional, define se o heading terá uma linha a esquerda.",
      type: "boolean"
    },
    lineBottom: {
      name: "Line bottom (lineBottom)",
      description: "Opcional, define se o heading terá uma linha no bottom.",
      type: "boolean"
    }
  },
  args: {
    children: "Most Populars",
    color: "white",
    size: "medium",
    lineColor: "primary",
    lineLeft: false,
    lineBottom: false
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Small: Story = {
  args: {
    size: "small"
  }
};

export const Default: Story = {
  args: {}
};

export const Huge: Story = {
  args: {
    size: "huge"
  }
};

export const WithLineColorPrimary: Story = {
  args: {
    lineColor: "primary",
    lineLeft: true
  }
};

export const WithLineColorSecondary: Story = {
  args: {
    lineColor: "secondary",
    lineLeft: true
  }
};

export const WithLineBottom: Story = {
  args: {
    lineBottom: true
  }
};

export const Black: Story = {
  args: {
    color: "black"
  },
  parameters: {
    backgrounds: {
      default: "won-light"
    }
  }
};
