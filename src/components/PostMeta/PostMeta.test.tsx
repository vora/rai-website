import React from "react";
import { cleanup, render } from "@testing-library/react";
import { PostMeta } from ".";

afterEach(cleanup);

it("renders the date", () => {
  const { getByText } = render(<PostMeta date="April 7" />);
  expect(getByText("April 7")).toBeInstanceOf(HTMLDivElement);
});
