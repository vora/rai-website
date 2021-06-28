import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Emphasis } from ".";

afterEach(cleanup);

it("renders a bold", () => {
  const { container } = render(<Emphasis variation="bold">Foo</Emphasis>);
  const element = container.querySelector("strong");

  expect(element).not.toBeNull();
});

it("renders an italic", () => {
  const { container } = render(<Emphasis variation="italics">Foo</Emphasis>);
  const element = container.querySelector("em");

  expect(element).not.toBeNull();
});

it("renders an underline", () => {
  const { container } = render(<Emphasis variation="underline">Foo</Emphasis>);
  const element = container.querySelector("u");

  expect(element).not.toBeNull();
});
