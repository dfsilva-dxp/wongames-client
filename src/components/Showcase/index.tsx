import GameCardSlider from "components/GameCardSlider";
import Heading from "components/Heading";

import Highlight from "components/Highlight";

import * as S from "./styles";

import { ShowcaseProps } from "./showcase";

const Showcase = ({
  title,
  highlight,
  games,
  color = "white"
}: ShowcaseProps) => {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}

      {!!highlight && <Highlight {...highlight} />}

      {!!games && <GameCardSlider items={games} color={color} />}
    </S.Wrapper>
  );
};

export default Showcase;
