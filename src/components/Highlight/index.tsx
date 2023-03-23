import Button from "components/Button";

import * as S from "./styles";

import { HighlightProps } from "./highlight";

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  buttonLabel,
  buttonLink,
  alignment = "right"
}: HighlightProps) => {
  return (
    <S.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
      {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Wrapper>
  );
};

export default Highlight;
