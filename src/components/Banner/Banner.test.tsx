import React from "react";
import { render, cleanup } from "@testing-library/react";

import { Banner } from ".";

afterEach(() => cleanup);

it("renders the banner content", () => {
  const { getByText } = render(<Banner title="Foo" />);
  expect(getByText("Foo")).toBeInstanceOf(HTMLParagraphElement);
});

it("renders with an aria label", () => {
  const { getByLabelText } = render(
    <Banner title="Foo" ariaLabel="Hello World" />
  );
  expect(getByLabelText("Hello World")).toBeInstanceOf(HTMLDivElement);
});
