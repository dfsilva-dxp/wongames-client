import { act, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "utils/tests/helpers";

import UserDropdown from "components/UserDropdown";

describe("<UserDropdown />", () => {
  it("should render the username", () => {
    renderWithTheme(<UserDropdown username="Daniel" />);

    expect(screen.getByText(/Daniel/i)).toBeInTheDocument();
  });

  it("should render the menu", () => {
    renderWithTheme(<UserDropdown username="Daniel" />);

    act(() => {
      userEvent.click(screen.getByText(/Daniel/i));
    });

    waitFor(() => {
      expect(
        screen.getByRole("link", { name: /my profile/i })
      ).toBeInTheDocument();

      expect(
        screen.getByRole("link", { name: /wishlist/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: /sign out/i })
      ).toBeInTheDocument();
    });
  });
});
