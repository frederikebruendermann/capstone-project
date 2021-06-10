import styled from "styled-components/macro";
import PropTypes from "prop-types";
import Title from "../components/Title";
import ConcertCard from "../components/ConcertCard";
import concerts from "../data.json";

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
  return (
    <>
      <Title pageName={pageName} />
      <ConcertList>
        {concerts.map((concerts) => (
          <ConcertCard
            date={concerts.date}
            artist={concerts.artistName}
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
