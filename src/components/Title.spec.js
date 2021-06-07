import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title", () => {
  it("shows the title of a page", () => {
    render(<Title pageName={"Suche"}></Title>);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
