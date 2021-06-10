import styled from "styled-components/macro";
import PropTypes from "prop-types";
import Title from "../components/Title";
import ConcertCard from "../components/ConcertCard";
import data from "../data.json";
import getConcertDetails from "../services/getConcertDetails";

SearchPage.propTypes = {
  pageName: PropTypes.string,
  concerts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      artist: PropTypes.string,
      location: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

export default function SearchPage({ pageName }) {
  //const [concerts, setConcerts] = useState([]);
  const concerts = data.map((item) => getConcertDetails(item));
  // setConcerts(getConcertDetails(data));

  // useEffect(() => {
  //   fetch("../data.json")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       Promise.all(
  //         res.results.map((concert) =>
  //           fetch(concert.json).then((res) => res.json())
  //         )
  //       ).then((res) => {
  //         const concerts = res.map(getConcertDetails);
  //         setConcerts(concerts);
  //       });
  //     })
  //     .catch(console.error);
  // });
  console.log(concerts);

  return (
    <>
      <Title pageName={pageName} />
      <ConcertList>
        {concerts.map((concerts) => (
          <ConcertCard
            date={concerts.date}
            artist={concerts.artist}
            location={concerts.location}
            key={concerts.id}
          />
        ))}
      </ConcertList>
    </>
  );
}

const ConcertList = styled.ul`
  display: grid;
  justify-content: center;
  padding: 5px;
  ::-webkit-scrollbar {
    width: 10px;
  }
`;
