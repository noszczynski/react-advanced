import React from "react";
import { render } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  it("renders input element", () => {
    let placeholderText = "Your choice";
    const { getByPlaceholderText } = render(<Input />);
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });
});
