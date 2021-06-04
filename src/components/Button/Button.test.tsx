import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Button } from ".";

afterEach(cleanup);

it("renders a link", () => {
  const { getByText } = render(<Button url="/foo" title="Foo" />);
  expect(getByText("Foo")).toBeInstanceOf(HTMLAnchorElement);
});

it("attaches the proper href", () => {
  const { getByText } = render(<Button url="/foo" title="Foo" />);
  expect(getByText("Foo").getAttribute("href")).toBe("/foo");
});

it("can have the inverted class", () => {
  const { getByText } = render(
    <Button url="/foo" title="Foo" variation="inverted" />
  );
  expect(getByText("Foo").classList).toContain("inverted");
});
