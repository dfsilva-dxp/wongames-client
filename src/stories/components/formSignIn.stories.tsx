import type { Meta, StoryObj } from "@storybook/react";

import FormSignIn from "components/FormSignIn";

const meta: Meta<typeof FormSignIn> = {
  title: "Form/FormSignIn",
  component: FormSignIn,
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
type Story = StoryObj<typeof FormSignIn>;

export const Default: Story = {};
