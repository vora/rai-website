import React from "react";
import { cleanup, render } from "@testing-library/react";
import { RichText } from ".";
import { mockContent } from "./__mocks__/mockRichText";

afterEach(cleanup);

// TODO: Cleanup these tests. This is just to get CI to pass right now
it("renders some stuff", () => {
  const { container } = render(<RichText content={mockContent} />);
  expect(container).toMatchSnapshot();
});
