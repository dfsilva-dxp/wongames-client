import Image from "next/image";
import Link from "next/link";
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from "@styled-icons/material-outlined";

import Ribbon from "components/Ribbon";
import Button from "components/Button";

import { formatCurrency } from "utils/formatCurrency";

import * as S from "./styles";

import { GameCardProps } from "./gameCard";

const GameCard = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = "primary",
  ribbonSize = "small"
}: GameCardProps) => {
  const currency = formatCurrency(promotionalPrice! || price);

  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <Link href={`/game/${slug}`} passHref>
        <S.ImageBox>
          <Image src={img} alt={title} width={100} height={100} />
        </S.ImageBox>
      </Link>

      <S.Content>
        <Link href={`/game/${slug}`} passHref>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>
        </Link>

        <S.FavButton role="button" onClick={onFav}>
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </S.FavButton>
        <S.BuyBox>
          {!!promotionalPrice && (
            <S.Price isPromotional>{formatCurrency(price)}</S.Price>
          )}

          <S.Price>{currency == "$0.00" ? "FREE" : currency}</S.Price>

          <Button icon={<AddShoppingCart />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  );
};

export default GameCard;
