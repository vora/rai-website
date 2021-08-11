import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import { Person } from ".";

afterEach(cleanup);

const mockParagraph = `{
  "data":{},
  "content":[
    {
      "data":{},
      "marks":[],
      "value":"A robot is a modal",
      "nodeType":"text"
    }
  ],
  "nodeType":"paragraph"
}`;

it("renders a persons name and role", () => {
  const { getByText } = render(<Person name="Foo" userRole="Robot" />);

  expect(getByText("Foo")).toBeInstanceOf(HTMLDivElement);
  expect(getByText("Robot")).toBeInstanceOf(HTMLDivElement);
});

it("shows the modal when clicked", async () => {
  const { getByText, getByRole } = render(
    <Person name="Foo" userRole="Robot" biography={{ raw: mockParagraph }} />
  );

  const person = getByRole("button");
  fireEvent.click(person);

  await waitFor(() => {
    expect(getByText("A robot is a modal")).toBeInstanceOf(
      HTMLParagraphElement
    );
  });
});

it("does nothing if no name is supplied", () => {
  const { container } = render(<Person />);
  expect(container).toMatchInlineSnapshot(`<div />`);
});
