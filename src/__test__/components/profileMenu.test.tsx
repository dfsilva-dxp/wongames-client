import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import ProfileMenu from "components/ProfileMenu";

describe("<ProfileMenu />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(<ProfileMenu />);

    expect(
      screen.getByRole("link", { name: /my profile/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /my cards/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /my orders/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /sign out/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the menu with an active link defined", () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/cards" />);

    expect(screen.getByRole("link", { name: /my cards/i })).toHaveStyle({
      background: "rgb(242, 49, 165);",
      color: "rgb(250, 250, 250);"
    });
  });
});
