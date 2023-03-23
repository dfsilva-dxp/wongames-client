import * as S from "./styles";

import { RibbonProps } from "./ribbon";

const Ribbon = ({
  children,
  color = "primary",
  size = "normal"
}: RibbonProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  );
};

export default Ribbon;
