import type { Meta, StoryObj } from "@storybook/react";

import FormProfile from "components/FormProfile";

const meta: Meta<typeof FormProfile> = {
  title: "Form/FormProfile",
  component: FormProfile,
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
      <div
        style={{
          width: "min(85.7rem, 100%)",
          margin: "0 auto"
        }}
      >
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof FormProfile>;

export const Default: Story = {};
