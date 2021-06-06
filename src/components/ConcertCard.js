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
      <p>
        {concertDate} <br />
        {artistName}, {concertLocation}
      </p>
    </ConcertCardWrapper>
  );
}

const ConcertCardWrapper = styled.section`
  margin: 20px;
  border-width: 3px;
  border-style: solid;
  border-color: black;
  padding: 10px;
  border-radius: 3em;
`;
