import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import CartDropdown from "components/CartDropdown";

import items from "mocks/cartList";

describe("<CartDropdown />", () => {
  it("should render <CartIcon /> and this badge", () => {
    renderWithTheme(<CartDropdown items={items} total="R$300,00" />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument();
  });

  it("should render Dropdown content with cart items and total", () => {
    renderWithTheme(<CartDropdown items={items} total="R$300,00" />);

    expect(screen.getByText("R$300,00")).toBeInTheDocument();
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument();
  });
});
