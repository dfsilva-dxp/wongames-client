import type { Meta, StoryObj } from "@storybook/react";

import ProfileMenu from "components/ProfileMenu";

const meta: Meta<typeof ProfileMenu> = {
  title: "Components/ProfileMenu",
  component: ProfileMenu,
  tags: ["autodocs"],
  argTypes: {
    activeLink: {
      options: ["/profile/me", "/profile/cards", "/profile/orders"],
      control: {
        type: "inline-radio"
      }
    }
  },
  args: {
    activeLink: "/profile/me"
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "won-dark"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "32.5rem", width: "100%" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof ProfileMenu>;

export const Default: Story = {};
