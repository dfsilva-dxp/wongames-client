import type { Meta, StoryObj } from "@storybook/react";

import Radio from "components/Radio";

const meta: Meta<typeof Radio> = {
  title: "Form/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    labelColor: {
      options: ["white", "black"],
      control: { type: "select" }
    },
    onCheck: { action: "check" }
  },
  args: {
    labelColor: "white",
    name: "Categorias",
    label: "Ação",
    labelFor: "action",
    value: "action"
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Basic: Story = {
  render: () => (
    <>
      <div style={{ padding: 10 }}>
        <Radio
          label="primeiro"
          labelFor="primeiro"
          id="primeiro"
          name="nome"
          value="primeiro"
          defaultChecked
        />
      </div>
      <div style={{ padding: 10 }}>
        <Radio
          label="segundo"
          labelFor="segundo"
          id="segundo"
          name="nome"
          value="segundo"
        />
      </div>
      <div style={{ padding: 10 }}>
        <Radio
          label="terceiro"
          labelFor="terceiro"
          id="terceiro"
          name="nome"
          value="terceiro"
        />
      </div>
    </>
  )
};
