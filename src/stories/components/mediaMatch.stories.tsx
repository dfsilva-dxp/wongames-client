import { Story, Meta } from "@storybook/react";
import { ComponentProps } from "react";

import MediaMatch from "components/MediaMatch";

export default {
  title: "Layout/MediaMatch",
  component: MediaMatch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  }
} as Meta;

export const Desktop: Story<ComponentProps<typeof MediaMatch>> = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
);
export const Mobile: Story<ComponentProps<typeof MediaMatch>> = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile1"
  }
};
