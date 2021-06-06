import styled from "styled-components/macro";
import PropTypes from "prop-types";
import Title from "./Title";
import ConcertCard from "./ConcertCard";

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

export default function SearchPage({ concerts, pageName }) {
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

const ConcertList = styled.section`
  display: grid;
  ::-webkit-scrollbar {
    width: 10px;
  }
`;
