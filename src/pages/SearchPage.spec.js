import { render, screen } from "@testing-library/react";
import SearchPage from "./SearchPage";

describe("SearchPage", () => {
  it("renders a list of concerts with pageName, artist, date and location", () => {
    const pageName = "Suche";

    render(
      <SearchPage
        pageName={pageName}
        concerts={[
          {
            id: 1,
            artist: "Thees",
            date: "Fr., 02.07.2021, 20:00",
            location: "Bremen, Seebühne Bremen",
          },
        ]}
      />
    );

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Thees")).toBeInTheDocument();
    expect(screen.getByText("Seebühne Bremen")).toBeInTheDocument();
    expect(screen.getByText("02.07.2021")).toBeInTheDocument();
  });
});
