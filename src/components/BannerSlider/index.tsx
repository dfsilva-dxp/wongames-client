import Banner from "components/Banner";
import Slider from "components/Slider";

import { settings } from "./settings";

import * as S from "./styles";

import { BannerSliderProps } from "./bannerSlider";

const BannerSlider = ({ items }: BannerSliderProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items && items.map((item) => <Banner key={item.title} {...item} />)}
      </Slider>
    </S.Wrapper>
  );
};

export default BannerSlider;
