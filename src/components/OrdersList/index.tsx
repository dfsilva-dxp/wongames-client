import Empty from "components/Empty";
import GameItem from "components/GameItem";
import Heading from "components/Heading";

import * as S from "./styles";

import { OrdersListProps } from "./orderList";

const OrdersList = ({ items = [] }: OrdersListProps) => {
  return (
    <S.Wrapper>
      <Heading lineBottom lineColor="primary" color="black" size="small">
        My orders
      </Heading>

      {items.length ? (
        items?.map((item) => <GameItem key={item.downloadLink} {...item} />)
      ) : (
        <Empty
          title="You have no orders yet"
          description="Go back to the store and explore games and offters"
          hasLink
        />
      )}
    </S.Wrapper>
  );
};

export default OrdersList;
