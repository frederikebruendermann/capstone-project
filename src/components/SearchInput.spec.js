import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  it("should get a city through a textbox", () => {
    render(<SearchInput />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
