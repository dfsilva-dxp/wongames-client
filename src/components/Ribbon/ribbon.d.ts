import { ReactNode } from "react";

export type RibbonColors = "primary" | "secondary";
export type RibbonSizes = "small" | "normal" | "large";

export type RibbonProps = {
  children: ReactNode;
  color?: RibbonColors;
  size?: RibbonSizes;
};
