import type { Meta, StoryObj } from "@storybook/react";
import { Mail } from "@styled-icons/material-outlined";

import TextField from "components/TextField";

const meta: Meta<typeof TextField> = {
  title: "Form/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    onInput: { action: "input" }
  },
  args: {
    label: "E-mail",
    name: "email",
    initialValue: "",
    placeholder: "john.doe@gmail.com",
    disabled: false
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Basic: Story = {
  args: {}
};

export const WithIcon: Story = {
  args: {
    icon: <Mail />
  },
  argTypes: {
    iconPosition: {
      options: ["left", "right"],
      control: { type: "select" }
    }
  }
};

export const WithRightIcon: Story = {
  args: {
    icon: <Mail />,
    iconPosition: "right"
  },
  argTypes: {
    iconPosition: {
      options: ["left", "right"],
      control: { type: "select" }
    }
  }
};

export const WhithError: Story = {
  args: {
    error: "Ops...something is wrong"
  }
};
