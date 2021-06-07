import styled from "styled-components/macro";
import PropTypes from "prop-types";

ConcertCard.propTypes = {
  concertDate: PropTypes.string,
  artistName: PropTypes.string,
  concertLocation: PropTypes.string,
};

export default function ConcertCard({
  concertDate,
  artistName,
  concertLocation,
}) {
  return (
    <ConcertCardWrapper>
      <p>{concertDate}</p>
      <br />
      <p>
        {artistName}, {concertLocation}
      </p>
    </ConcertCardWrapper>
  );
}

const ConcertCardWrapper = styled.section`
  margin: 5px;
  border: 3px solid black;
  border-radius: 1em;
  padding: 0px;
  padding-left: 10px;
  background: antiquewhite;
`;
