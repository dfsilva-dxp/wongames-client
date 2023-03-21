import { ReactNode } from "react";

export type LineColors = "primary" | "secondary";

export type HeadingProps = {
  children: ReactNode;
  color?: "white" | "black";
  size?: "small" | "medium" | "huge";
  lineColor?: LineColors;
  lineLeft?: boolean;
  lineBottom?: boolean;
};
