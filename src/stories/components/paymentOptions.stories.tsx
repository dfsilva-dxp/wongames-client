import type { Meta, StoryObj } from "@storybook/react";

import PaymentOptions from "components/PaymentOptions";

import paymentOptions from "mocks/paymentOptions";

const meta: Meta<typeof PaymentOptions> = {
  title: "Components/PaymentOptions",
  component: PaymentOptions,
  tags: ["autodocs"],
  argTypes: {
    handlePayment: {
      action: "clicked"
    }
  },
  args: {
    cards: paymentOptions
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "won-light"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 16, maxWidth: 400 }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof PaymentOptions>;

export const Default: Story = {};
