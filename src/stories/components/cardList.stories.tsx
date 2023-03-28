import type { Meta, StoryObj } from "@storybook/react";

import CardsList from "components/CardList";

import paymentOptions from "mocks/paymentOptions";

const meta: Meta<typeof CardsList> = {
  title: "Components/CardsList",
  component: CardsList,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    cards: paymentOptions
  },
  parameters: {
    backgrounds: {
      default: "won-light"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 850, margin: "auto" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof CardsList>;

export const Basic: Story = {
  args: {}
};
