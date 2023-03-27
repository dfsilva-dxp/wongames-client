import type { Meta, StoryObj } from "@storybook/react";

import Container from "components/Container";

import Heading from "components/Heading";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
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
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container>
      <Heading color="white" lineColor="secondary" lineLeft size="medium">
        Container
      </Heading>
    </Container>
  )
};
