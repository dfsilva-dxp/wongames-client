import { renderWithTheme } from "utils/tests/helpers";

import Grid from "components/Grid";

describe("<Grid />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(<Grid />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin: 3.2rem 0;
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
        gap: 3.2rem;
      }

      <div
        class="c0"
      />
    `);
  });
});
