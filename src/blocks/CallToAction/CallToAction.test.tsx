import React from "react";
import { cleanup, render } from "@testing-library/react";
import { mockParagraphWithLink } from "@/components/RichText/__mocks__/mockContent";
import { CallToAction } from ".";

afterEach(cleanup);

it("renders the title", () => {
  const { getByText } = render(<MockCta />);
  expect(getByText("Get Involved")).toBeInstanceOf(HTMLHeadingElement);
});

it("renders the content", () => {
  const { getByText } = render(<MockCta />);
  expect(getByText("This is sample paragraph")).toBeInstanceOf(
    HTMLParagraphElement
  );
});

it("renders the button", () => {
  const { getByText } = render(<MockCta />);
  expect(getByText("Become a member")).toBeInstanceOf(HTMLAnchorElement);
});

function MockCta() {
  return (
    <CallToAction
      title="Get Involved"
      content={{
        raw: `{
            "data":{},
            "content":[
              ${mockParagraphWithLink}
            ],
            "nodeType":"document"
          }`,
        references: [],
      }}
      action={{
        title: "Become a member",
        url: "/membership",
      }}
    />
  );
}
