import React from "react";
import { cleanup, render } from "@testing-library/react";
import { dummyButton } from "@/components/Button/__mocks__";
import { dummyContent } from "@/components/RichText/__mocks__";
import { CallToActionFragmentFragment } from "@/graphql/graphql-types";
import { CallToAction } from ".";

const mockData = {
  title: "Foo",
  raiButton: dummyButton,
  content: dummyContent,
};

afterEach(cleanup);

it("renders the title", () => {
  const { getByText } = render(<MockCta />);
  expect(getByText("Foo")).toBeInstanceOf(HTMLHeadingElement);
});

it("renders some text", () => {
  const { getByText } = render(<MockCta />);
  expect(
    getByText(
      "A robot may not injure a human being or, through inaction, allow a human being to come to harm"
    )
  ).toBeInstanceOf(HTMLParagraphElement);
});

it.skip("renders a button", () => {
  const { getByText, queryByText } = render(<MockCta />);
  expect(getByText("Dummy Button")).toBeInstanceOf(HTMLAnchorElement);
  expect(queryByText("Dummy Button")).not.toBeNull();
});

it("does not render a button", () => {
  const { queryByText } = render(
    <MockCta data={{ ...mockData, raiButton: null }} />
  );
  expect(queryByText("Dummy Button")).toBeNull();
});

interface MockCtaProps {
  data?: unknown;
}

function MockCta({ data = mockData }: MockCtaProps) {
  return <CallToAction data={data as CallToActionFragmentFragment} />;
}
