import type { Meta, StoryObj } from "@storybook/react";

import OrdersList from "components/OrdersList";

import orderList from "mocks/orderList";

const meta: Meta<typeof OrdersList> = {
  title: "Components/OrdersList",
  component: OrdersList,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    items: orderList
  },
  parameters: {
    backgrounds: {
      default: "won-light"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 850, margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof OrdersList>;

export const Basic: Story = {};
