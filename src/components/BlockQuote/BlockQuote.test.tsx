import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BlockQuote } from ".";

afterEach(cleanup);

it("renders a blockquote", () => {
  const { container } = render(<BlockQuote>Foo</BlockQuote>);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <blockquote
        class="quote"
      >
        Foo
      </blockquote>
    </div>
  `);
});
