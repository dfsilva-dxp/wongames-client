import styled, { css } from "styled-components";

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    color: ${theme.colors.black};
    padding: 1.3rem ${theme.spacings.xsmall};
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }

    > span {
      margin-left: ${theme.spacings.xxsmall};
    }

    img {
      width: 100%;
      max-width: 3.8rem;
      height: 100%;
      max-height: 2.4rem
      block-size: cover;
    }
  `}
`;
