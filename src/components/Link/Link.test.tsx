import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Link } from ".";

afterEach(cleanup);

it("renders a link", () => {
  const { getByText } = render(<Link url="/foo">Foo</Link>);
  expect(getByText("Foo")).toBeInstanceOf(HTMLAnchorElement);
});

it("attaches the proper href", () => {
  const { getByText } = render(<Link url="/foo">Foo</Link>);
  expect(getByText("Foo").getAttribute("href")).toBe("/foo");
});

it("has a target blank if external", () => {
  const { getByText } = render(
    <Link url="/foo" external>
      Foo
    </Link>
  );
  expect(getByText("Foo").getAttribute("target")).toBe("_blank");
});
