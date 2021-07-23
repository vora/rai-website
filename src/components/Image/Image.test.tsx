import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Image } from ".";
import { mockImage } from "./__mocks__/mockImage";

afterEach(cleanup);

it("renders an image", () => {
  const { container } = render(<Image {...mockImage} />);
  expect(container).toMatchSnapshot();
});

it("renders the no image placeholder if it cant get an image", () => {
  const { getByText } = render(<Image {...mockImage} gatsbyImageData={{}} />);
  expect(getByText("No Image Available")).toBeInstanceOf(HTMLDivElement);
});
