import type { Meta, StoryObj } from "@storybook/react";

import FormSignUp from "components/FormSignUp";

const meta: Meta<typeof FormSignUp> = {
  title: "Form/FormSignUp",
  component: FormSignUp,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-light"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: "300px", margin: "auto" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof FormSignUp>;

export const Default: Story = {};
