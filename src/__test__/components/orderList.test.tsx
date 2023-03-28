import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import OrderList from "components/OrderList";

import orderList from "mocks/orderList";

jest.mock("components/Empty", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />;
  }
}));

jest.mock("components/GameItem", () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock GameItem">{children}</div>;
  }
}));

describe("<OrderList />", () => {
  it("should render the game items", () => {
    renderWithTheme(<OrderList items={orderList} />);

    expect(
      screen.getByRole("heading", { name: /my orders/i })
    ).toBeInTheDocument();

    expect(screen.getAllByTestId("Mock GameItem")).toHaveLength(2);
  });

  it("should render empty state", () => {
    renderWithTheme(<OrderList />);

    expect(screen.getByTestId("Mock Empty")).toBeInTheDocument();
  });
});
