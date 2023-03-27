import type { Meta, StoryObj } from "@storybook/react";

import Footer from "components/Footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    layout: "fullscreen"
  }
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const ResponsiveFooter: Story = {
  args: {}
};
