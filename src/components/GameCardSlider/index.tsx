import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos";
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos";

import Button from "components/Button";
import GameCard from "components/GameCard";
import Slider from "components/Slider";

import { settings } from "./settings";

import * as S from "./styles";

import { GameCardSliderProps } from "./gameCardSlider";

const sliderSettings = {
  ...settings,
  nextArrow: (
    <Button
      icon={<ArrowRight aria-label="next games" />}
      minimal
      size="large"
    />
  ),
  prevArrow: (
    <Button
      icon={<ArrowLeft aria-label="previous games" />}
      minimal
      size="large"
    />
  )
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
