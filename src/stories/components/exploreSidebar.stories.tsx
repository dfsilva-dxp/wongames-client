import type { Meta, StoryObj } from "@storybook/react";

import ExploreSidebar from "components/ExploreSidebar";

import exploreSidebar from "mocks/exploreSidebar";

const meta: Meta<typeof ExploreSidebar> = {
  title: "Navigation/ExploreSidebar",
  component: ExploreSidebar,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof ExploreSidebar>;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
      <ExploreSidebar
        items={exploreSidebar}
        initialValues={{
          windows: true,
          "under-50": true,
          action: true,
          sort_by: "low-to-high"
        }}
      />
    </div>
  )
};
