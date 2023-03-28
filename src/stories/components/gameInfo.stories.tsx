import type { Meta, StoryObj } from "@storybook/react";

import GameInfo from "components/GameInfo";

const meta: Meta<typeof GameInfo> = {
  title: "Components/GameInfo",
  component: GameInfo,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    title: "Borderlands 3",
    price: 215.0,
    description:
      "Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions."
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof GameInfo>;

export const Basic: Story = {};
