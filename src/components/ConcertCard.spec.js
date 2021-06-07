import { render, screen } from "@testing-library/react";
import ConcertCard from "./ConcertCard";
import "@testing-library/jest-dom";

describe("ConcertCard", () => {
  it("shows the concertdate", () => {
    render(
      <ConcertCard
        artistName={"Thees Uhlmann"}
        concertDate={"26.06.2021"}
        concertLocation={"Pier 2"}
      />
    );
    expect(screen.getByText("26.06.2021")).toBeInTheDocument();
  });
});
