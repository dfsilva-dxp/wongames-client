import type { Meta, StoryObj } from "@storybook/react";

import GameItem from "components/GameItem";

const meta: Meta<typeof GameItem> = {
  title: "Component/GameItem",
  component: GameItem,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    img: "http://localhost:1337/uploads/Image_9620999b16.png",
    title: "Red Dead Redemption 2",
    price: 215.0
  },
  parameters: {}
};

export default meta;
type Story = StoryObj<typeof GameItem>;

export const Basic: Story = {
  args: {}
};

export const WithPayment: Story = {
  args: {
    downloadLink: "http://link",
    paymentInfo: {
      flag: "mastercard",
      img: "http://localhost:1337/uploads/master_card_89ce1f2093.png",
      number: "**** **** **** 4326",
      purchaseDate: "Purchase made on 07/20/2020 at 20:32"
    }
  }
};
