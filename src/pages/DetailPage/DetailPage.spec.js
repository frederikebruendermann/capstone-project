import { render, screen } from "@testing-library/react";
import DetailPage from "./DetailPage";
import userEvent from "@testing-library/user-event";

describe("DetailPage", () => {
  it("renders an title, shows the artist and has a button", () => {
    const handleClickBack = jest.fn();
    render(
      <DetailPage
        pageName={"Details"}
        onNavigate={handleClickBack}
        concert={{
          artist: "Thees",
        }}
      />
    );

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Thees")).toBeInTheDocument();

    const Button = screen.getByRole("button");
    userEvent.click(Button);
    expect(handleClickBack).toHaveBeenCalled();
  });
});
