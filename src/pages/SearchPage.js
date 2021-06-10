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
  onNavigate: PropTypes.func,
};

export default function SearchPage({ pageName, onNavigate }) {
  const concerts = data.map((item) => getConcertDetails(item));

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
            onlick={onNavigate}
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
