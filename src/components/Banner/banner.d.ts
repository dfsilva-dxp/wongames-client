import { ReactNode } from "react";

import { RibbonColors, RibbonSizes } from "components/Ribbon/ribbon";

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};
