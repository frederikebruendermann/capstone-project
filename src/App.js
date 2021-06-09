import SearchPage from "../src/pages/SearchPage";
import concerts from "../src/data.json";

export default function App() {
  const pageName = "Suche";

  return (
    <SearchPage
      pageName={pageName}
      artistName={concerts.artistName}
      concertDate={concerts.concertDate}
      concertLocation={concerts.concertLocation}
    />
  );
}
