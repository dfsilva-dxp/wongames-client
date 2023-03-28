import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos";
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos";
import { Close } from "@styled-icons/material-outlined/Close";
import SlickSlider from "react-slick";

import Button from "components/Button";
import Slider from "components/Slider";
import { SliderSettings } from "components/Slider/slide";

import { modalSettings, settings } from "./settings";

import * as S from "./styles";

import { GalleryProps } from "./gallery";

const commonSettings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: "ondemand",
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

const sliderSettings = {
  ...commonSettings,
  ...settings
};

const modalNewSettings = {
  ...commonSettings,
  ...modalSettings
};

const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === "Escape" && setIsOpen(false);
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={sliderSettings}>
        {items.map((item, index) => (
          <Image
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            width={100}
            height={100}
            onClick={() => {
              setIsOpen(true);
              slider.current!.slickGoTo(index, true);
            }}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="Close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={modalNewSettings}>
            {items.map((item, index) => (
              <Image
                key={`gallery-${index}`}
                src={item.src}
                alt={item.label}
                width={100}
                height={100}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  );
};

export default Gallery;
