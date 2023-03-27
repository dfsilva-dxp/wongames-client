import * as S from "./styles";

import { RadioProps } from "./radio";

const Radio = ({
  onCheck,
  label,
  labelFor = "",
  labelColor = "white",
  value,
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value!);
  };

  return (
    <S.Wrapper>
      <S.Input
        type="radio"
        id={labelFor}
        value={value}
        onChange={onChange}
        {...props}
      />
      <S.Label labelColor={labelColor} htmlFor={labelFor}>
        {label}
      </S.Label>
    </S.Wrapper>
  );
};

export default Radio;
