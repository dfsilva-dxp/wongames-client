import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Highlight from "components/Highlight";

import * as S from "components/Highlight/styles";

import highlight from "mocks/highlight";
describe("<Highlight />", () => {
  it("should render headings and button", () => {
    renderWithTheme(<Highlight {...highlight} />);

    expect(
      screen.getByRole("heading", { name: "Read Dead it’s back" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Come see John’s new adventures" })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /Buy now/i })).toHaveAttribute(
      "href",
      "/rdr2"
    );
  });

  it("should render background image", () => {
    const { container } = renderWithTheme(<Highlight {...highlight} />);

    expect(container.firstChild).toHaveStyle({
      background: `url(${highlight.backgroundImage}) center center/cover no-repeat`
    });
  });

  it("should render float image", () => {
    renderWithTheme(
      <Highlight {...highlight} floatImage="/red-dead-float.png" />
    );

    expect(screen.getByRole("img", { name: highlight.title })).toHaveAttribute(
      "src",
      "/red-dead-float.png"
    );
  });

  it("should render align right by default", () => {
    const { container } = renderWithTheme(<Highlight {...highlight} />);

    expect(container.firstChild).toHaveStyleRule("text-align", "right", {
      modifier: `${S.Content}`
    });

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      '"floatimage content"'
    );
  });

  it("should render align left", () => {
    const { container } = renderWithTheme(
      <Highlight {...highlight} alignment="left" />
    );

    expect(container.firstChild).toHaveStyleRule("text-align", "left", {
      modifier: `${S.Content}`
    });

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      '"content floatimage"'
    );
  });
});
