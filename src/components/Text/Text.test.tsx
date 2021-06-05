import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Text } from ".";

afterEach(cleanup);

it("renders text in a paragraph tage", () => {
  const { getByText } = render(<Text>Foo</Text>);

  expect(getByText("Foo")).toBeInstanceOf(HTMLParagraphElement);
});
