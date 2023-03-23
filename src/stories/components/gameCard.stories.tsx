import type { Meta, StoryObj } from "@storybook/react";

import GameCard from "components/GameCard";

const meta: Meta<typeof GameCard> = {
  title: "Component/GameCard",
  component: GameCard,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    slug: "population-zero",
    title: "Population Zero",
    developer: "Gearbox Software",
    img: "http://localhost:1337/uploads/image_4_c1b542230a.png",
    price: 215.0,
    favorite: false
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof GameCard>;

export const Default: Story = {
  args: {}
};

export const WithRibbon: Story = {
  args: {
    ribbon: "20% OFF",
    ribbonSize: "small",
    ribbonColor: "primary"
  },
  argTypes: {
    ribbonSize: {
      options: ["small", "normal", "large"],
      control: { type: "select" }
    },
    ribbonColor: {
      options: ["primary", "secondary"],
      control: { type: "select" }
    }
  }
};
