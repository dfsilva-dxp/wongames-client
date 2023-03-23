import { ReactNode } from "react";

import { RibbonColors, RibbonSizes } from "components/Ribbon/ribbon";

export type GameCardProps = {
  slug: string;
  title: string;
  developer: string;
  img: string;
  price: number;
  promotionalPrice?: number;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

type PriceProps = {
  isPromotional?: boolean;
};
