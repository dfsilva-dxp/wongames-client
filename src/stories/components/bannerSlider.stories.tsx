import type { Meta, StoryObj } from "@storybook/react";

import BannerSlider from "components/BannerSlider";

import bannerSlider from "mocks/bannerSlider";

const meta: Meta<typeof BannerSlider> = {
  title: "Slider/BannerSlider",
  component: BannerSlider,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof BannerSlider>;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
      <BannerSlider items={bannerSlider} />
    </div>
  )
};
