import type { Meta, StoryObj } from "@storybook/react";

import GameCardSlider from "components/GameCardSlider";

import gameCardSlider from "mocks/gameCardSlider";

const meta: Meta<typeof GameCardSlider> = {
  title: "Slider/GameCardSlider",
  component: GameCardSlider,
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
type Story = StoryObj<typeof GameCardSlider>;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
      <GameCardSlider items={gameCardSlider} />
    </div>
  )
};
