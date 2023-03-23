import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import theme from "styles/theme";
import GameCard from "components/GameCard";

const props = {
  slug: "population-zero",
  title: "Population Zero",
  developer: "Gearbox Software",
  img: "http://localhost:1337/uploads/image_4_c1b542230a.png",
  price: 215.0
};

describe("<GameCard />", () => {
  it("should render correctly", async () => {
    const { container } = renderWithTheme(<GameCard {...props} />);

    // await waitFor(() => {
    //   expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
    //     "src",
    //     props.img
    //   );
    // });

    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: props.developer })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: props.title })).toHaveAttribute(
      "href",
      `/game/${props.slug}`
    );

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render price in label", () => {
    renderWithTheme(<GameCard {...props} />);

    const price = screen.getByText("$215.00");

    expect(price).not.toHaveStyle({ textDecoration: "line-through" });
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
  });

  it("should render a line-through in price when promotinal", () => {
    renderWithTheme(<GameCard {...props} promotionalPrice={115.0} />);

    expect(screen.getByText("$215.00")).toHaveStyle({
      textDecoration: "line-through"
    });

    expect(screen.getByText("$115.00")).not.toHaveStyle({
      textDecoration: "line-through"
    });
  });

  it("should render a filled Favorite icon when favorite true", () => {
    renderWithTheme(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it("should call onFav method when favorite is clicked", () => {
    const onFav = jest.fn();
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole("button")[0]);

    expect(onFav).toHaveBeenCalled();
  });

  it("should render a Ribbon", () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="20% OFF"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    );

    const ribbon = screen.getByText(/20% OFF/i);

    expect(ribbon).toBeInTheDocument();

    expect(ribbon).toHaveStyle({
      backgroundColor: "#3cd3c1"
    });

    expect(ribbon).toHaveStyle({
      height: "2.4rem",
      "font-size": "1.2rem"
    });
  });
});
