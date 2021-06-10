import SearchPage from "../src/pages/SearchPage";
import concerts from "../src/data.json";
import { useState } from "react";
import DetailPage from "./pages/DetailPage";

export default function App() {
  const pageName = "Suche";

  return (
    <SearchPage
      pageName={pageName}
      artist={concerts.artist}
      date={concerts.date}
      location={concerts.location}
    />
  );
}
