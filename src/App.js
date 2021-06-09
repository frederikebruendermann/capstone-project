import SearchPage from "../src/components/SearchPage";
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
