import SearchPage from "../src/pages/SearchPage";
import { useState } from "react";
import DetailPage from "./pages/DetailPage";
import getConcertDetails from "./services/getConcertDetails";
import React from "react";

export default function App() {
  const [activePage, setActivePage] = useState("suche");
  const url =
    "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&sort=date,asc&countryCode=DE&classificationName=music";
  const [data, setData] = useState([]);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res._embedded.events);
      })
      .catch((error) => console.error(error));
  }, [url]);

  const [concertDetails, setConcertDetails] = useState({});
  const concerts = data.map((item) => getConcertDetails(item));

  return (
    <>
      {activePage === "suche" && (
        <SearchPage
          pageName="Suche"
          concerts={concerts}
          onNavigate={handleClickDetails}
        />
      )}

      {activePage === "details" && (
        <DetailPage
          pageName="Details"
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
