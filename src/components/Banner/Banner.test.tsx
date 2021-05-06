import React from "react";
import { render, cleanup } from "@testing-library/react";
import { useStaticQuery } from "gatsby";
import { Banner } from ".";

jest.mock("gatsby", () => {
  return {
    graphql: jest.fn(),
    useStaticQuery: jest.fn(() => ({
      contentfulMicroContent: {
        value: "Foo",
      },
    })),
  };
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

it("renders the banner content", () => {
  const { getByText } = render(<Banner />);
  expect(getByText("Foo")).toBeInstanceOf(HTMLParagraphElement);
});

it("returns nothing when the data returns empty", () => {
  // @ts-expect-error TODO: Lets fix this typescript error
  useStaticQuery.mockImplementation(() => jest.fn());

  const { container } = render(<Banner />);
  expect(container).toMatchInlineSnapshot(`<div />`);
});
