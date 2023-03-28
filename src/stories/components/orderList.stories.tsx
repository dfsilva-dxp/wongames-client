import type { Meta, StoryObj } from "@storybook/react";

import OrderList from "components/OrderList";

import orderList from "mocks/orderList";

const meta: Meta<typeof OrderList> = {
  title: "Components/OrderList",
  component: OrderList,
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
type Story = StoryObj<typeof OrderList>;

export const Basic: Story = {};
