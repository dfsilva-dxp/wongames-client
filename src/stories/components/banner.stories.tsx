import type { Meta, StoryObj } from "@storybook/react";

import Banner from "components/Banner";

const meta: Meta<typeof Banner> = {
  title: "Component/Banner",
  component: Banner,
  tags: ["autodocs"],
  argTypes: {
    img: {
      description: "Recebe a url da imagem que será renderizada no banner"
    },
    title: {
      description: "Recebe o nome do jogo em destaque no banner"
    },
    subtitle: {
      description:
        "Define um subtítulo de descrição do game em destaque no banner"
    },
    buttonLabel: {
      description: "Define o conteúdo do button"
    },
    buttonLink: {
      description: "Define o link de redirect do button"
    },
    ribbonSize: {
      description: "Opções de tamanho do ribbon.",
      options: ["small", "medium", "large"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "normal"
        },
        type: {
          summary: "Tamanhos.",
          detail: "small, medium, large"
        }
      }
    },
    ribbonColor: {
      description: "Opções de cores do ribbon.",
      options: ["primary", "secondary"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "primary"
        },
        type: {
          summary: "Cores.",
          detail: "primary, secondary"
        }
      }
    }
  },
  args: {
    img: "http://localhost:1337/uploads/Image_9620999b16.png",
    title: "Defy death",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death"
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  args: {}
};

export const WithRibbon: Story = {
  args: {
    ribbon: "20% OFF",
    ribbonSize: "normal",
    ribbonColor: "secondary"
  }
};
