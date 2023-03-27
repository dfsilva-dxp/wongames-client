import type { Meta, StoryObj } from "@storybook/react";

import Container from "components/Container";
import Divider from "components/Divider";
import Heading from "components/Heading";

const meta: Meta<typeof Divider> = {
  title: "Layout/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => (
    <Container>
      <Heading color="white" lineColor="secondary" lineLeft size="medium">
        Divider
      </Heading>
      <Divider />
    </Container>
  )
};
