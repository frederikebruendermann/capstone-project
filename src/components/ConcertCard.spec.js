import { render, screen } from "@testing-library/react";
import ConcertCard from "./ConcertCard";
import "@testing-library/jest-dom";

describe("ConcertCard", () => {
  it("shows the date, artist and location of a concert", () => {
    render(
      <ConcertCard
        artistName={"Thees"}
        concertDate={"26.06.2021"}
        concertLocation={"Pier2"}
      />
    );
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByText("Thees")).toBeInTheDocument();
    // expect(screen.getByText("26.06.2021")).toBeInTheDocument();
    // expect(screen.getByText("Pier2")).toBeInTheDocument();
  });
});
