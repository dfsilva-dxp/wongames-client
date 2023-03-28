import Image from "next/image";

import Heading from "components/Heading";

import * as S from "./styles";

import { CardsListProps } from "./cardList";

const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <Image src={card.img} alt={card.flag} width={100} height={100} />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </>
);

export default CardsList;
