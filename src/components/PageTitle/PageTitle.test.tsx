import React from "react";
import { render, cleanup } from "@testing-library/react";
import { PageTitle } from ".";

afterEach(cleanup);

it("renders in an H1", () => {
  const { container } = render(<PageTitle title="Foo" />);

  const heading = container.querySelector("h1");

  expect(heading?.innerHTML).toBe("Foo");
});
