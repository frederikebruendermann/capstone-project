import styled from "styled-components/macro";
import PropTypes from "prop-types";
import "../GlobalStyles";
import "../data.json";
import Button from "./Button";

ConcertCard.propTypes = {
  concerts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      artist: PropTypes.string,
      location: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.node,
      price: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
};

export default function ConcertCard({
  date,
  artist,
  location,
  image,
  onClick,
}) {
  const createDate = date.split(", ");
  const Date = [createDate[1].replace(",", " ")];

  const createLocation = location.split(",");
  const Location = [createLocation[1].replace(",", " ")];

  return (
    <Wrapper onClick={onClick}>
      <TextStyle>
        <DateStyle>{Date}</DateStyle>
        <ArtistStyle>{artist}</ArtistStyle>
        <LocationStyle>{Location}</LocationStyle>
      </TextStyle>
      <Image src={image} alt="" />
    </Wrapper>
  );
}

const Wrapper = styled(Button)`
  margin: 3px;
  border: 1px solid white;
  width: 50vh;
  border-radius: 10px;
  padding: 10px;
  background: var(--white);
  list-style: none;
  display: grid;
  grid-template-columns: 75% 25%;
  grid-template-rows: 10%;
  grid-template-areas: "Text Image";
  box-shadow: 0 0.2px 2px 0 #dbd7d7, 0 1px 1px 0 #dbd7d7;
`;

const TextStyle = styled.section`
  grid-area: Text;
  text-align: left;
  display: grid;
  justify-self: start;
  grid-template-rows: 10px 30px 10px;
  gap: 5px 5px;
  grid-template-areas:
    "Date"
    "Artist"
    "Location";
`;

const DateStyle = styled.span`
  font-size: 13px;
  grid-area: Date;
`;

const ArtistStyle = styled.div`
  font-size: 15px;
  grid-area: Artist;
  justify-self: start;
  white-space: nowrap;
  overflow: hidden;
  max-width: 24ch;
  text-overflow: ellipsis;
`;

const LocationStyle = styled.span`
  font-size: 13px;
  grid-area: Location;
  color: var(--light-grey);
`;

const Image = styled.img`
  height: 10vh;
  border-radius: 11%;
  margin: 0em 0em 0em 0.5em;
  padding: 0px;
  display: grid;
  grid-area: Image;
  place-items: right;
`;
