import "match-media-mock";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import GameCardSlider from "components/GameCardSlider";

import gameCardSlider from "mocks/gameCardSlider";

describe("<GameCardSlider />", () => {
  it("should render with 4 active items", () => {
    const { container } = renderWithTheme(
      <GameCardSlider items={gameCardSlider} />
    );
    expect(container.querySelectorAll(".slick-active")).toHaveLength(4);
  });

  it("should render arrows", () => {
    renderWithTheme(<GameCardSlider items={gameCardSlider} color="white" />);

    expect(screen.getByLabelText(/previous games/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/next games/i)).toBeInTheDocument();
  });
});
