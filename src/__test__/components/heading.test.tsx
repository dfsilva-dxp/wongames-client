import { screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Heading from "components/Heading";

describe("<Heading />", () => {
  it("should render a white reading by default", () => {
    renderWithTheme(<Heading>Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /Won Games/i })).toHaveStyle({
      color: "#FAFAFA"
    });
  });

  it("should render a black reading when color is passed", () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /Won Games/i })).toHaveStyle({
      color: "#030517"
    });
  });

  it("should render a heading with a line to the left side", () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /Won Games/i })).toHaveStyle({
      "border-left": "0.7rem solid #F231A5"
    });
  });

  it("should render a heading with a libe to the bottom side", () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);

    waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /Won Games/i })
      ).toHaveStyleRule("border-bottom", "0.5rem solid #F231A5", {
        modifier: "::after"
      });
    });
  });

  it("should render a heading with a small size", () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /Won Games/i })).toHaveStyle({
      "font-size": "1.6rem"
    });

    waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /Won Games/i })
      ).toHaveStyleRule("width", "3rem", {
        modifier: "::after"
      });
    });
  });

  it("should render a heading with a huge size", () => {
    renderWithTheme(<Heading size="huge">Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /Won Games/i })).toHaveStyle({
      "font-size": "5.2rem"
    });
  });

  it("should render a heading with a secondary line color", () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Won Games
      </Heading>
    );

    const heading = screen.getByRole("heading", { name: /Won Games/i });
    expect(heading).toHaveStyle({ "border-left": "0.7rem solid #3CD3C1" });

    waitFor(() => {
      expect(heading).toHaveStyleRule("border-bottom", "0.5rem solid #3CD3C1", {
        modifier: "::after"
      });
    });
  });
});
