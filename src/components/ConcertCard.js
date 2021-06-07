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
  const createDate = concertDate.split(", ");
  const Date = [createDate[1].replace(",", " ")];

  const createLocation = concertLocation.split(",");
  const Location = [createLocation[1].replace(",", " ")];

  return (
    <Wrapper>
      <DateStyle>{Date}</DateStyle>
      <ArtistStyle>{artistName}</ArtistStyle>
      <LocationStyle>{Location}</LocationStyle>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  margin: 3px;
  border: 3px solid black;
  border-radius: 1em;
  padding: 5px;
  background: antiquewhite;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "Date artistName artistName"
    ". Location Location";
  gap: 6px;
`;

const DateStyle = styled.span`
  font-size: 20px;
  grid-area: Date;
`;

const ArtistStyle = styled.span`
  font-size: 20px;
  grid-area: artistName;
  justify-self: start;
  white-space: nowrap;
  overflow: hidden;
  max-width: 25ch;
  text-overflow: ellipsis;
`;

const LocationStyle = styled.span`
  font-size: 15px;
  grid-area: Location;
`;
