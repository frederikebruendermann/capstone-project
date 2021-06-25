import { render, screen } from "@testing-library/react";
import ConcertCard from "./ConcertCard";
import "@testing-library/jest-dom";

describe("ConcertCard", () => {
  it("shows the date, artist and location of a concert", () => {
    render(
      <ConcertCard
        artist={"Thees"}
        date={"Fr., 02.07.2021, 20:00"}
        location={"Bremen, Seebühne Bremen"}
      />
    );
    expect(screen.getByText("Thees")).toBeInTheDocument();
    expect(screen.getByText("02.07.2021")).toBeInTheDocument();
    expect(screen.getByText("Seebühne Bremen")).toBeInTheDocument();
  });
});
