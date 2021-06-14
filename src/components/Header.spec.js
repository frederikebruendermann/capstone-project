import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("shows the pageName of the Page", () => {
    render(<Header pageName={"Suche"} />);
    expect(screen.getByText("Suche")).toBeInTheDocument();
  });
});
