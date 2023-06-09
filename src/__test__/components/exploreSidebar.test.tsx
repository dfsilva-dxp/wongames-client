import { act, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "utils/tests/helpers";
import { css } from "styled-components";

import ExploreSidebar from "components/ExploreSidebar";
import { Overlay } from "components/ExploreSidebar/styles";

import exploreSidebar from "mocks/exploreSidebar";

describe("<ExploreSidebar />", () => {
  it("should render headings", () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebar} onFilter={jest.fn()} />
    );

    expect(screen.getByRole("heading", { name: /price/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /sort by/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /system/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /genre/i })).toBeInTheDocument();
  });

  it("should render inputs", () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebar} onFilter={jest.fn()} />
    );

    expect(
      screen.getByRole("checkbox", { name: /under \$50/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("radio", { name: /low to high/i })
    ).toBeInTheDocument();
  });

  it("should render filter button", () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebar} onFilter={jest.fn()} />
    );

    expect(screen.getByRole("button", { name: /filter/i })).toBeInTheDocument();
  });

  it("should check initial values that are passed", () => {
    renderWithTheme(
      <ExploreSidebar
        items={exploreSidebar}
        initialValues={{ windows: true, sort_by: "low-to-high" }}
        onFilter={jest.fn()}
      />
    );

    expect(screen.getByRole("checkbox", { name: /windows/i })).toBeChecked();
    expect(screen.getByRole("radio", { name: /low to high/i })).toBeChecked();
  });

  it("should return filter with initial values", () => {
    const onFilter = jest.fn();

    renderWithTheme(
      <ExploreSidebar
        items={exploreSidebar}
        initialValues={{ windows: true, sort_by: "low-to-high" }}
        onFilter={onFilter}
      />
    );

    act(() => {
      userEvent.click(screen.getByRole("button", { name: /filter/i }));
    });

    expect(onFilter).toHaveBeenCalledWith({
      windows: true,
      sort_by: "low-to-high"
    });
  });

  it("should return filter with checked values", () => {
    const onFilter = jest.fn();

    renderWithTheme(
      <ExploreSidebar items={exploreSidebar} onFilter={onFilter} />
    );

    act(() => {
      userEvent.click(screen.getByLabelText(/windows/i));
      userEvent.click(screen.getByLabelText(/linux/i));
      userEvent.click(screen.getByLabelText(/low to high/i));

      userEvent.click(screen.getByRole("button", { name: /filter/i }));
    });

    expect(onFilter).toHaveBeenCalledWith({
      windows: true,
      linux: true,
      sort_by: "low-to-high"
    });
  });

  it("should altern between radio otions", () => {
    const onFilter = jest.fn();

    renderWithTheme(
      <ExploreSidebar items={exploreSidebar} onFilter={onFilter} />
    );

    act(() => {
      userEvent.click(screen.getByLabelText(/low to high/is));
      userEvent.click(screen.getByLabelText(/high to low/i));

      userEvent.click(screen.getByRole("button", { name: /filter/i }));
    });

    expect(onFilter).toHaveBeenCalledWith({ sort_by: "high-to-low" });
  });

  it("should open/close sidebar when filtering on mobile", () => {
    const { container } = renderWithTheme(
      <ExploreSidebar items={exploreSidebar} onFilter={jest.fn} />
    );

    const variant = {
      media: "(max-width:768px)",
      modifier: String(css`
        ${Overlay}
      `)
    };

    const Element = container.firstChild;

    expect(Element).not.toHaveStyleRule("opacity", "1", variant);

    act(() => {
      userEvent.click(screen.getByLabelText(/open filters/));
    });

    waitFor(() => {
      expect(Element).toHaveStyleRule("opacity", "1", variant);
    });

    act(() => {
      userEvent.click(screen.getByLabelText(/close filters/));
    });

    expect(Element).not.toHaveStyleRule("opacity", "1", variant);
  });
});
