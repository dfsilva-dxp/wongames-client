import type { Meta, StoryObj } from "@storybook/react";

import Ribbon from "components/Ribbon";

const meta: Meta<typeof Ribbon> = {
  title: "Component/Ribbon",
  component: Ribbon,
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: ["primary", "secondary"],
      control: { type: "select" }
    },
    size: {
      options: ["small", "normal", "large"],
      control: { type: "select" }
    }
  },
  args: {
    children: "Best Seller",
    color: "primary",
    size: "normal"
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Ribbon>;

export const Small: Story = {
  render: () => (
    <div
      style={{
        width: "40rem",
        height: "25rem",
        position: "relative",
        backgroundColor: "#fff"
      }}
    >
      <Ribbon color="primary" size="small">
        Best Seller
      </Ribbon>
    </div>
  )
};

export const Normal: Story = {
  render: () => (
    <div
      style={{
        width: "40rem",
        height: "25rem",
        position: "relative",
        backgroundColor: "#fff"
      }}
    >
      <Ribbon color="primary" size="normal">
        Best Seller
      </Ribbon>
    </div>
  )
};

export const Large: Story = {
  render: () => (
    <div
      style={{
        width: "40rem",
        height: "25rem",
        position: "relative",
        backgroundColor: "#fff"
      }}
    >
      <Ribbon color="primary" size="large">
        Best Seller
      </Ribbon>
    </div>
  )
};

export const WithSecondaryColor: Story = {
  render: () => (
    <div
      style={{
        width: "40rem",
        height: "25rem",
        position: "relative",
        backgroundColor: "#fff"
      }}
    >
      <Ribbon color="secondary" size="large">
        Best Seller
      </Ribbon>
    </div>
  )
};
