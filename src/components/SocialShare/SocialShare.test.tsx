import React from "react";
import { cleanup, render } from "@testing-library/react";
import { SocialShare } from ".";

afterEach(cleanup);

it("renders the placeholder div", () => {
  const { container } = render(<SocialShare />);
  const elm = container.querySelector(".s9-widget-wrapper");

  expect(elm).toBeInstanceOf(HTMLDivElement);
});
