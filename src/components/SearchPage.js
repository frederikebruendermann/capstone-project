import styled from "styled-components/macro";
import PropTypes from "prop-types";
import Title from "./Title";
import ConcertCard from "./ConcertCard";
import concerts from "../data.json";

SearchPage.propTypes = {
  pageName: PropTypes.string,
  concerts: PropTypes.arrayOf(
    PropTypes.shape({
      concertDate: PropTypes.string,
      artistName: PropTypes.string,
      concertLocation: PropTypes.string,
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
            concertDate={concerts.concertDate}
            artistName={concerts.artistName}
            concertLocation={concerts.concertLocation}
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
