import styled, { css } from "styled-components";
import media from "styled-media-query";

import { MediaMatchProps, breakpoint } from "./mediaMatch";

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`display: block`}
  `,
  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`display: block`}
  `
};

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)};
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)};
  `}
`;
