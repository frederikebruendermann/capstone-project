import styled from "styled-components/macro";
import PropTypes from "prop-types";

ConcertCard.propTypes = {
  concertDate: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
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
  margin: 5px;
  border-width: 3px;
  border-style: solid;
  border-color: black;
  border-radius: 1em;
  padding: 0px;
  padding-left: 10px;
  width: 98%;
`;
