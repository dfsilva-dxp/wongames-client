import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Banner from "components/Banner";

const props = {
  img: "http://localhost:1337/uploads/Image_9620999b16.png",
  title: "Defy death",
  subtitle: "<p>Play the new <strong>CrashLands</strong> season",
  buttonLabel: "Buy now",
  buttonLink: "/games/defy-death"
};

describe("<Banner />", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    expect(screen.getByRole("img", { name: /defy death/i })).toHaveAttribute(
      "src",
      "http://localhost:1337/uploads/Image_9620999b16.png"
    );

    expect(
      screen.getByRole("heading", { name: /defy death/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render a Ribbon", () => {
    renderWithTheme(
      <Banner
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
