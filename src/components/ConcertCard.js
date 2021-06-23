import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import '../GlobalStyles'

ConcertCard.propTypes = {
  concerts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      artist: PropTypes.string,
      location: PropTypes.string,
      id: PropTypes.string,
      image3x2: PropTypes.string,
      price: PropTypes.number,
    })
  ),
  onClick: PropTypes.func,
}

export default function ConcertCard({
  date,
  artist,
  location,
  image3x2,
  onClick,
}) {
  return (
    <Wrapper onClick={onClick}>
      <TextStyle>
        <DateStyle>{date}</DateStyle>
        <ArtistStyle>{artist}</ArtistStyle>
        <LocationStyle>{location}</LocationStyle>
      </TextStyle>
      <Image src={image3x2} alt="" height="80px" width="auto" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 3px;
  padding: 10px;
  border: 1px solid white;
  width: 50vh;
  border-radius: 10px;
  background: var(--white);
  box-shadow: var(--light-grey) 0px 2px 5px -1px, var(--black) 0px 1px 3px -1px;
  font-family: 'Helvetica Neue';
  font-weight: 200;
  letter-spacing: 0.1em;
  list-style: none;
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'Text Image';
`

const TextStyle = styled.section`
  text-align: left;
  grid-area: Text;
  display: grid;
  justify-self: start;
  grid-template-rows: 10px 30px 10px;
  gap: 5px 5px;
  grid-template-areas:
    'Date'
    'Artist'
    'Location';
`

const DateStyle = styled.span`
  font-size: 13px;
  grid-area: Date;
`

const ArtistStyle = styled.div`
  font-size: 15px;
  text-overflow: ellipsis;
  grid-area: Artist;
  justify-self: start;
  white-space: nowrap;
  overflow: hidden;
  max-width: 24ch;
`

const LocationStyle = styled.span`
  font-size: 13px;
  grid-area: Location;
  color: var(--light-grey);
`

const Image = styled.img`
  border-radius: 11%;
  display: grid;
  grid-area: Image;
  place-items: center;
`
