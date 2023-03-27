import { SliderSettings } from "components/Slider/slide";

export const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
};
