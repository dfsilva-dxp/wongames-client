import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import GameItem from "components/GameItem";

const props = {
  img: "http://localhost:1337/uploads/Image_9620999b16.png",
  title: "Red Dead Redemption 2",
  price: 215.0
};

describe("<GameItem />", () => {
  it("should render the item", () => {
    const { container } = renderWithTheme(<GameItem {...props} />);

    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument();

    expect(screen.getByRole("img", { name: props.title })).toBeInTheDocument();

    expect(screen.getByText("215")).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the item with download links", () => {
    const downloadLink = "http://link";

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />);

    expect(
      screen.getByRole("link", { name: `Get ${props.title} here` })
    ).toHaveAttribute("href", downloadLink);
  });

  it("should render the payment info", () => {
    const paymentInfo = {
      flag: "mastercard",
      img: "/img/master-card.png",
      number: "**** **** **** 4326",
      purchaseDate: "Purchase made on 07/20/2020 at 20:32"
    };

    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />);

    expect(
      screen.getByRole("img", { name: paymentInfo.flag })
    ).toBeInTheDocument();

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument();

    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument();
  });
});
