import Heading from '../components/Header'
import PropTypes from 'prop-types'
import ConcertCard from '../components/ConcertCard'
import styled from 'styled-components/macro'

HomePage.propTypes = {
  pageName: PropTypes.string,
  onNavigate: PropTypes.func,
  bookmarks: PropTypes.array,
}

export default function HomePage({ bookmarks, pageName, onNavigate }) {
  return (
    <div>
      <Heading pageName={pageName} />

      {bookmarks.length === 0 ? (
        <Text>Du hast Dir noch keine Konzerte gemerkt.</Text>
      ) : (
        <ConcertList>
          {bookmarks.map(concert => (
            <ConcertCard
              key={concert.id}
              date={concert.shortDate}
              artist={concert.artist}
              location={concert.location}
              image3x2={concert.image3x2}
              price={concert.price}
              onClick={() => onNavigate(concert.id)}
            />
          ))}
        </ConcertList>
      )}
    </div>
  )
}

const ConcertList = styled.ul`
  padding: 5px;
  display: grid;
  justify-content: center;
  overflow-y: auto;
  margin: 75px 10px 10px;
`
const Text = styled.p`
  margin: 75px 10px 10px;
`
