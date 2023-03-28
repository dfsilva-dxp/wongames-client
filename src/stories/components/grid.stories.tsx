import type { Meta, StoryObj } from "@storybook/react";

import { Grid } from "components/Grid";

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
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
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: () => (
    <Grid>
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#FAFAFA",
          display: "grid",
          placeItems: "center"
        }}
      >
        Item
      </div>
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#FAFAFA",
          display: "grid",
          placeItems: "center"
        }}
      >
        Item
      </div>
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#FAFAFA",
          display: "grid",
          placeItems: "center"
        }}
      >
        Item
      </div>
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#FAFAFA",
          display: "grid",
          placeItems: "center"
        }}
      >
        Item
      </div>
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#FAFAFA",
          display: "grid",
          placeItems: "center"
        }}
      >
        Item
      </div>
    </Grid>
  )
};
