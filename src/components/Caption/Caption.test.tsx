import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Caption } from ".";

afterEach(cleanup);

it("renders a simple caption", () => {
  const { container } = render(<Caption title="Foo" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        Foo
      </div>
    </div>
  `);
});
