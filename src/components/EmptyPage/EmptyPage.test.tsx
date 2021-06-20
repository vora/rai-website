import React from "react";
import { render, cleanup } from "@testing-library/react";
import { EmptyPage } from ".";

afterEach(cleanup);

it("renders an empty page", () => {
  const { container } = render(<EmptyPage>Foo</EmptyPage>);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="page"
      >
        Foo
      </div>
    </div>
  `);
});
