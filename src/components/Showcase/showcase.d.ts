import { GameCardProps } from "components/GameCard/gameCard";
import { HighlightProps } from "components/Highlight/highlight";

export type ShowcaseProps = {
  title?: string;
  highlight?: HighlightProps;
  games?: GameCardProps[];
  color?: "black" | "white";
};
