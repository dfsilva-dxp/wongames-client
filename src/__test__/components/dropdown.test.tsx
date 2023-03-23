import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "utils/tests/helpers";

import Dropdown from "components/Dropdown";

describe("<Dropdown />", () => {
  beforeEach(() => {
    const title = <h1 aria-label="dropdown">Click here</h1>;

    renderWithTheme(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    );
  });

  it("should render title", () => {
    expect(screen.getByLabelText(/dropdown/)).toBeInTheDocument();
  });

  it("should handle open/close dropdown", () => {
    const content = screen.getByText(/content/).parentElement!;

    expect(content).toHaveStyle({ opacity: 0 });
    expect(content.getAttribute("aria-hidden")).toBe("true");

    act(() => {
      userEvent.click(screen.getByLabelText(/dropdown/));
    });

    expect(content).toHaveStyle({ opacity: 1 });
    expect(content.getAttribute("aria-hidden")).toBe("false");
  });
});
