import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders a button with text", () => {
    render(<Button children="Back" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
