import GameCard from "components/GameCard";
import Slider from "components/Slider";

import { settings } from "./settings";

import * as S from "./styles";

import { GameCardSliderProps } from "./gameCardSlider";

const GameCardSlider = ({ items, color = "white" }: GameCardSliderProps) => {
  return (
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items &&
          items.map((item, index) => <GameCard key={index} {...item} />)}
      </Slider>
    </S.Wrapper>
  );
};

export default GameCardSlider;
