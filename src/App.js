import SearchPage from "../src/pages/SearchPage";
import { useState } from "react";
import DetailPage from "./pages/DetailPage";
import data from "../src/data.json";
import getConcertDetails from "./services/getConcertDetails";

export default function App() {
  const [activePage, setActivePage] = useState("suche");
  const [concertDetails, setConcertDetails] = useState({});
  const concerts = data.map((item) => getConcertDetails(item));

  return (
    <>
      {activePage === "suche" && (
        <SearchPage
          pageName={"Suche"}
          concerts={concerts}
          onNavigate={handleClickDetails}
        />
      )}

      {activePage === "details" && (
        <DetailPage
          pageName={"Details"}
          concert={concertDetails}
          onNavigate={handleClickBack}
        />
      )}
    </>
  );

  function handleClickDetails(id) {
    const index = concerts.findIndex((concert) => concert.id === id);
    setConcertDetails(concerts[index]);
    setActivePage("details");
  }

  function handleClickBack() {
    setActivePage("suche");
  }
}
