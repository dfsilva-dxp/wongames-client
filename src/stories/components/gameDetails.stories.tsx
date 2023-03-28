import type { Meta, StoryObj } from "@storybook/react";

import GameDetails from "components/GameDetails";

const meta: Meta<typeof GameDetails> = {
  title: "Components/GameDetails",
  component: GameDetails,
  tags: ["autodocs"],
  argTypes: {
    releaseDate: {
      control: { type: "date" }
    },
    genres: {
      control: {
        type: "inline-check",
        options: ["Role-playing", "Narrative", "Action"]
      }
    },
    platforms: {
      control: {
        type: "inline-check",
        options: ["windows", "linux", "mac"]
      }
    }
  },
  args: {
    developer: "Different Tales",
    releaseDate: "2020-11-21T23:00:00",
    platforms: ["windows", "mac", "linux"],
    publisher: "Walkabout",
    rating: "BR0",
    genres: ["Role-playing"]
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof GameDetails>;

export const Basic: Story = {};
