import { render, screen } from "@testing-library/react";
import SearchPage from "./SearchPage";

describe("SearchPage", () => {
  it("renders a list of concerts", () => {
    const concerts = [
      {
        concertDate: "26.06.2021",
        artistName: "Thees Uhlmann",
        concertLocation: "Pier 2",
        key: "1",
      },
      {
        concertDate: "04.07.2021",
        artistName: "Madsen",
        concertLocation: "Tower",
        key: "2",
      },
    ];

    render(
      <SearchPage
        concerts={concerts}
        concertDate={concerts.concertDate}
        key={concerts.key}
      />
    );

    expect(screen.getByText("26.06.2021")).toBeInTheDocument();
  });
});
