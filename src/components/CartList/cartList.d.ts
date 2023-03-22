import { GameItemProps } from "components/GameItem/gameItem";

export type CartListProps = {
  items?: GameItemProps[];
  total?: string;
  hasButton?: boolean;
};

export type WrapperProps = {
  isEmpty: boolean;
};
