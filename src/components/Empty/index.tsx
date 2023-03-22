import Button from "components/Button";
import Link from "next/link";

import * as S from "./styles";

import { EmptyProps } from "./empty";

const Empty = ({ title, description, hasLink }: EmptyProps) => {
  return (
    <S.Wrapper>
      <S.CustomImage
        src="http://localhost:1337/uploads/empty_f6b54587fa.svg"
        alt="A gamer in a couch playing video game"
        title="A gamer in a couch playing video game"
        role="image"
      />

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      {hasLink && (
        <Link href="/" passHref>
          <Button>Go back to store</Button>
        </Link>
      )}
    </S.Wrapper>
  );
};

export default Empty;
