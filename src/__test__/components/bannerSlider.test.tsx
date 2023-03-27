import "match-media-mock";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import BannerSlider from "components/BannerSlider";

const items = [
  {
    img: "http://localhost:1337/uploads/banner_de_venda_plana_com_foto_23_2149026968_193c6c10c4.avif",
    title: "Defy death 1",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
    ribbon: "Bestselling"
  },
  {
    img: "http://localhost:1337/uploads/banner_de_venda_plana_com_foto_23_2149026968_193c6c10c4.avif",
    title: "Defy death 2",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death"
  }
];

describe("<BannerSlider />", () => {
  it("should render vertical slider", () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelector(".slick-vertical")).toBeInTheDocument();
  });

  it("should render with the dots", () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelector(".slick-dots")).toBeInTheDocument();
  });

  it("should render with one active item", () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelectorAll(".slick-slide")).toHaveLength(2);
    expect(container.querySelectorAll("li.slick-active")).toHaveLength(1);

    expect(
      screen.getByRole("heading", { name: /defy death 1/i, hidden: false })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /defy death 2/i, hidden: true })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
