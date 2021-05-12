import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Logo } from ".";

afterEach(cleanup);

it("renders a logo", () => {
  const { container } = render(<Logo />);
  expect(container).toMatchSnapshot();
});

it("renders a small logo", () => {
  const { container } = render(<Logo size="small" />);
  const logo = container.querySelector("svg");

  expect(logo?.getAttribute("width")).toBe("215");
});
