import type { Meta, StoryObj } from "@storybook/react";

import Banner from "components/Banner";

const meta: Meta<typeof Banner> = {
  title: "Components/Banner",
  component: Banner,
  tags: ["autodocs"],
  argTypes: {
    ribbonSize: {
      options: ["small", "normal", "large"],
      control: { type: "select" }
    },
    ribbonColor: {
      options: ["primary", "secondary"],
      control: { type: "select" }
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
