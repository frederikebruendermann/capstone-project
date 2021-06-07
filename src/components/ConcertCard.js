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
        {concertDate}
        <br />
        <br />
        {artistName},
        <br />
        {concertLocation}
      </p>
    </ConcertCardWrapper>
  );
}

const ConcertCardWrapper = styled.li`
  margin: 5px;
  border: 3px solid black;
  border-radius: 1em;
  padding: 0px;
  padding-left: 10px;
  background: antiquewhite;
  list-style: none;
`;
