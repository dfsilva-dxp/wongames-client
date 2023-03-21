import * as S from "./styles";

import { HeadingProps } from "./heading";

const Heading = ({
  children,
  color = "white",
  size = "medium",
  lineColor = "primary",
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => {
  return (
    <S.Wrapper
      color={color}
      size={size}
      lineColor={lineColor}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
    >
      {children}
    </S.Wrapper>
  );
};

export default Heading;
