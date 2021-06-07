import styled from "styled-components/macro";
import PropTypes from "prop-types";

ConcertCard.propTypes = {
  concertDate: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  concertLocation: PropTypes.string.isRequired,
};

export default function ConcertCard({
  concertDate,
  artistName,
  concertLocation,
}) {
  return (
    <Wrapper>
      <p>
        {concertDate}
        <br />
        <br />
        {artistName},
        <br />
        {concertLocation}
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  margin: 5px;
  border: 3px solid black;
  border-radius: 1em;
  padding-left: 10px;
  background: antiquewhite;
  list-style: none;
`;
