import styled from "styled-components/macro";
import PropTypes from "prop-types";
import "../GlobalStyles";
import "../data.json";

ConcertCard.propTypes = {
  concerts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      artist: PropTypes.string,
      location: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

export default function ConcertCard({ date, artist, location }) {
  const createDate = date.split(", ");
  const Date = [createDate[1].replace(",", " ")];

  const createLocation = location.split(",");
  const Location = [createLocation[1].replace(",", " ")];

  return (
    <Wrapper>
      <DateStyle>{Date}</DateStyle>
      <ArtistStyle>{artist}</ArtistStyle>
      <LocationStyle>{Location}</LocationStyle>
      {/* <image>{concerts.image}</image> */}
    </Wrapper>
  );
}

const Wrapper = styled.li`
  margin: 3px;
  border: 1px solid white;
  border-radius: 1em;
  padding: 10px;
  background: var(--white);
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "Date artistName artistName"
    ". Location Location";
  gap: 8px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
`;

const DateStyle = styled.span`
  font-size: 13px;
  grid-area: Date;
`;

const ArtistStyle = styled.span`
  font-size: 13px;
  grid-area: artistName;
  justify-self: start;
  white-space: nowrap;
  overflow: hidden;
  max-width: 25ch;
  text-overflow: ellipsis;
`;

const LocationStyle = styled.span`
  font-size: 13px;
  grid-area: Location;
`;
