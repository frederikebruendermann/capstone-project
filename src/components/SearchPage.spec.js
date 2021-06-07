import { render, screen } from "@testing-library/react";
import SearchPage from "./SearchPage";

describe("SearchPage", () => {
  it("renders a list of concerts", () => {
    render(<SearchPage />);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
