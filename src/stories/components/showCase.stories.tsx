import type { Meta, StoryObj } from "@storybook/react";

import Showcase from "components/Showcase";

import gameCardSlider from "mocks/gameCardSlider";
import highlight from "mocks/highlight";

const meta: Meta<typeof Showcase> = {
  title: "Components/Showcase",
  component: Showcase,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    title: "Most Popular",
    highlight: highlight,
    games: gameCardSlider
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Showcase>;

export const Basic: Story = {};
