import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import CardsList from "components/CardList";

import paymentOptions from "mocks/paymentOptions";

describe("<CardsList />", () => {
  it("should render the cards list", () => {
    renderWithTheme(<CardsList cards={paymentOptions} />);

    expect(
      screen.getByRole("heading", { name: /my cards/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("img", { name: /visa/i })).toHaveAttribute(
      "src",
      "/_next/image?url=http%3A%2F%2Flocalhost%3A1337%2Fuploads%2Fvisa_f0fa77d787.png&w=256&q=75"
    );

    expect(screen.getByRole("img", { name: /mastercard/i })).toHaveAttribute(
      "src",
      "/_next/image?url=http%3A%2F%2Flocalhost%3A1337%2Fuploads%2Fmaster_card_89ce1f2093.png&w=256&q=75"
    );

    expect(screen.getByText(/4325/)).toBeInTheDocument();
    expect(screen.getByText(/4326/)).toBeInTheDocument();
  });
});
