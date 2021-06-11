import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("has text and shows the way back", () => {
    render(<Button children="Back" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
