import Heading from "components/Heading";

import * as S from "./styles";

import { TextContentProps } from "./textContent";

const TextContent = ({ title, content }: TextContentProps) => {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </S.Wrapper>
  );
};

export default TextContent;
