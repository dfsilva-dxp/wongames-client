import "match-media-mock";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import highlight from "mocks/highlight";
import gameCardSlider from "mocks/gameCardSlider";
import Showcase from "components/Showcase";

const props = {
  title: "Most Popular",
  highlight: highlight,
  games: gameCardSlider.slice(0, 1)
};

describe("<ShowCase />", () => {
  it("should render full showcase", () => {
    renderWithTheme(<Showcase {...props} />);

    expect(
      screen.getByRole("heading", { name: /most popular/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: highlight.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: gameCardSlider[0].title })
    ).toBeInTheDocument();
  });

  it("should render without title", () => {
    renderWithTheme(
      <Showcase games={props.games} highlight={props.highlight} />
    );

    screen.getByRole("heading", { name: highlight.title });
    screen.getByRole("heading", { name: gameCardSlider[0].title });

    expect(
      screen.queryByRole("heading", { name: /most popular/i })
    ).not.toBeInTheDocument();
  });

  it("should render without highlight", () => {
    renderWithTheme(<Showcase title={props.title} games={props.games} />);

    screen.getByRole("heading", { name: /most popular/i });
    screen.getByRole("heading", { name: gameCardSlider[0].title });

    expect(
      screen.queryByRole("heading", { name: highlight.title })
    ).not.toBeInTheDocument();
  });

  it("should render without games", () => {
    renderWithTheme(
      <Showcase title={props.title} highlight={props.highlight} />
    );

    screen.getByRole("heading", { name: /most popular/i });
    screen.getByRole("heading", { name: highlight.title });

    expect(
      screen.queryByRole("heading", { name: gameCardSlider[0].title })
    ).not.toBeInTheDocument();
  });
});
