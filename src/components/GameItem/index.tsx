import Image from "next/image";
import { Download } from "@styled-icons/boxicons-solid/Download";

import * as S from "./styles";

import { GameItemProps } from "./gameItem";

const GameItem = ({
  img,
  title,
  price,
  downloadLink,
  paymentInfo
}: GameItemProps) => {
  return (
    <S.Wrapper>
      <S.GameContent>
        <S.ImageBox>
          <Image src={img} title={title} alt={title} width={100} height={100} />
        </S.ImageBox>

        <S.Content>
          <S.Title>
            {title}
            {!!downloadLink && (
              <S.DownloadLink
                href={downloadLink}
                target="_blank"
                aria-label={`Get ${title} here`}
              >
                <Download size={22} />
              </S.DownloadLink>
            )}
          </S.Title>
          <S.Price>{price}</S.Price>
        </S.Content>
      </S.GameContent>

      {!!paymentInfo && (
        <S.PaymentContent>
          <p>{paymentInfo.purchaseDate}</p>
          <S.CardInfo>
            <span>{paymentInfo.number}</span>
            <Image
              src={paymentInfo.img}
              alt={paymentInfo.flag}
              width={100}
              height={100}
            />
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.Wrapper>
  );
};

export default GameItem;
