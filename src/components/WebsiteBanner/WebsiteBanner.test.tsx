import React from "react";
import * as Gatsby from "gatsby";
import { render, cleanup } from "@testing-library/react";
import { WebsiteBanner } from ".";

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

beforeEach(() => jest.clearAllMocks);
afterEach(() => cleanup);

const data = {
  contentfulMicroContent: {
    value: "Foo",
  },
};

it("renders the banner content", () => {
  useStaticQuery.mockImplementation(() => data);

  const { getByText } = render(<WebsiteBanner />);
  expect(getByText("Foo")).toBeInstanceOf(HTMLParagraphElement);
});

it("renders with an aria label", () => {
  useStaticQuery.mockImplementation(() => data);

  const { getByLabelText } = render(<WebsiteBanner />);
  expect(getByLabelText("Important Message")).toBeInstanceOf(HTMLDivElement);
});

it("returns nothing when the data returns empty", () => {
  useStaticQuery.mockImplementation(() => jest.fn());

  const { container } = render(<WebsiteBanner />);
  expect(container).toMatchInlineSnapshot(`<div />`);
});
