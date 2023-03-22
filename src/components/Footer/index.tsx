import Link from "next/link";

import Heading from "components/Heading";
import Logo from "components/Logo";

import * as S from "./styles";

const Footer = () => {
  return (
    <S.Wrapper>
      <Logo color="black" />
      <S.Content role="content">
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Contact us
          </Heading>
          <Link href="mailto:sac@wongames.com">
            <span>sac@wongames.com</span>
          </Link>
          <Link href="#">
            <span>+55 11 9 5199-1612</span>
          </Link>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Fallow us
          </Heading>
          <nav aria-labelledby="social media">
            <Link
              href="https://www.instagram.com/won-games"
              rel="noopenner, noreferrer"
              target="_blank"
            >
              <span>Instagram</span>
            </Link>
            <Link
              href="https://www.twitter.com/won-games"
              rel="noopenner, noreferrer"
              target="_blank"
            >
              <span>Twitter</span>
            </Link>
            <Link
              href="https://www.youtube.com/won-games"
              rel="noopenner, noreferrer"
              target="_blank"
            >
              <span>Youtube</span>
            </Link>
            <Link
              href="https://www.facebook.com/won-games"
              rel="noopenner, noreferrer"
              target="_blank"
            >
              <span>Facebook</span>
            </Link>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Links
          </Heading>
          <nav aria-labelledby="footer resources">
            <Link href="/">
              <span>Home</span>
            </Link>
            <Link href="/games">
              <span>Store</span>
            </Link>
            <Link href="/search">
              <span>Buscar</span>
            </Link>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Location
          </Heading>
          <span>Rua 7 de Maio</span>
          <span>527 - 89020330</span>
          <span>São Paulo, Brasil</span>
        </S.Column>
      </S.Content>
      <S.Copyright>Won Games 2020 © All rights reserved.</S.Copyright>
    </S.Wrapper>
  );
};

export default Footer;
