import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { Settings } from "react-slick";

import Slider from "components/Slider";

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid #fff;
  color: white;
  text-align: center;
`;

const horizontalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const meta: Meta<typeof Slider> = {
  title: "Component/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    settings: {
      description: "Recebe os settings do react-slick"
    }
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Horizontal: Story = {
  render: () => (
    <Slider settings={horizontalSettings}>
      <Slide>I</Slide>
      <Slide>II</Slide>
      <Slide>III</Slide>
      <Slide>IV</Slide>
      <Slide>V</Slide>
    </Slider>
  )
};

export const Vertical: Story = {
  render: () => (
    <Slider settings={verticalSettings}>
      <Slide>I</Slide>
      <Slide>II</Slide>
      <Slide>III</Slide>
      <Slide>IV</Slide>
      <Slide>V</Slide>
    </Slider>
  )
};
