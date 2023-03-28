import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos";
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos";

import GameCard from "components/GameCard";
import Slider from "components/Slider";

import { settings } from "./settings";

import * as S from "./styles";

import { GameCardSliderProps } from "./gameCardSlider";

const sliderSettings = {
  ...settings,
  nextArrow: <ArrowRight aria-label="next games" />,
  prevArrow: <ArrowLeft aria-label="previous games" />
};

const GameCardSlider = ({ items, color = "white" }: GameCardSliderProps) => {
  return (
    <S.Wrapper color={color}>
      <Slider settings={sliderSettings}>
        {items &&
          items.map((item, index) => <GameCard key={index} {...item} />)}
      </Slider>
    </S.Wrapper>
  );
};

export default GameCardSlider;
