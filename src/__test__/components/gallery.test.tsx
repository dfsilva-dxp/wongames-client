import "match-media-mock";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Gallery from "components/Gallery";

import gallery from "mocks/gallery";

describe("<Gallery />", () => {
  it("should render thumbnails as buttons", () => {
    const { container } = renderWithTheme(
      <Gallery items={gallery.slice(0, 2)} />
    );

    // expect(
    //   screen.getByRole("button", { name: /Thumb - Gallery Image 1/i })
    // ).toHaveAttribute("src", gallery[0].src);

    // expect(
    //   screen.getByRole("button", { name: /Thumb - Gallery Image 2/i })
    // ).toHaveAttribute("src", gallery[1].src);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should open modal", () => {
    renderWithTheme(<Gallery items={gallery.slice(0, 2)} />);

    const modal = screen.getByLabelText("modal");

    expect(modal.getAttribute("aria-hidden")).toBe("true");
    expect(modal).toHaveStyle({ opacity: 0 });

    fireEvent.click(
      screen.getByRole("button", { name: /Thumb - Gallery Image 1/i })
    );
    expect(modal.getAttribute("aria-hidden")).toBe("false");
    expect(modal).toHaveStyle({ opacity: 1 });
  });

  it("should open modal with selected image", async () => {
    renderWithTheme(<Gallery items={gallery.slice(0, 2)} />);

    fireEvent.click(
      screen.getByRole("button", { name: /Thumb - Gallery Image 2/i })
    );

    const img = await screen.findByRole("img", { name: /Gallery Image 2/i });
    expect(img.parentElement?.parentElement).toHaveClass("slick-active");
  });

  it("should close modal when overlay or button clicked", () => {
    renderWithTheme(<Gallery items={gallery.slice(0, 2)} />);

    const modal = screen.getByLabelText("modal");

    fireEvent.click(
      screen.getByRole("button", { name: /Thumb - Gallery Image 1/i })
    );

    fireEvent.click(screen.getByRole("button", { name: /close modal/i }));
    expect(modal.getAttribute("aria-hidden")).toBe("true");
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it("should close modal when ESC button is clicked", () => {
    const { container } = renderWithTheme(
      <Gallery items={gallery.slice(0, 2)} />
    );

    const modal = screen.getByLabelText("modal");

    fireEvent.click(
      screen.getByRole("button", { name: /Thumb - Gallery Image 1/i })
    );

    fireEvent.keyUp(container, { key: "Escape" });
    expect(modal.getAttribute("aria-hidden")).toBe("true");
    expect(modal).toHaveStyle({ opacity: 0 });
  });
});
