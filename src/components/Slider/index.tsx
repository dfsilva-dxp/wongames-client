import { ForwardRefRenderFunction, forwardRef } from "react";
import SlickSlider from "react-slick";

import * as S from "./styles";

import { SliderProps } from "./slide";

const Slider: ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => {
  return (
    <S.Wrapper>
      <SlickSlider ref={ref} {...settings}>
        {children}
      </SlickSlider>
    </S.Wrapper>
  );
};

export default forwardRef(Slider);
