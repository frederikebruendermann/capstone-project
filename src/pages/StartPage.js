import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Heading from '../components/Header'
import Button from '../components/Button'
import ConcertCard from '../components/ConcertCard'

StartPage.propTypes = {
  pageName: PropTypes.string,
  bookmarks: PropTypes.array,
  onNavigate: PropTypes.func,
  concerts: PropTypes.array,
  handleBookmark: PropTypes.func,
}

export default function StartPage(
  pageName,
  handleBookmark,
  bookmarks,
  onNavigate
) {
  return (
    <div>
      <Heading pageName={pageName} />
      <ConcertList>
        {bookmarks.length === 0 ? (
          <p>Du hast Dir noch keine Konzerte gemerkt.</p>
        ) : (
          <>
            {bookmarks.map(concert => (
              <ConcertCard
                key={concert.id}
                date={concert.shortDate}
                artist={concert.artist}
                location={concert.location}
                image3_2={concert.image3x2}
                price={concert.price}
                onClick={() => onNavigate(concert.id)}
                handleBookmark={handleBookmark}
              />
            ))}
          </>
        )}
      </ConcertList>
      <Button onClick={onNavigate}>&lt;-- back </Button>
    </div>
  )
}

const ConcertList = styled.ul`
  padding: 5px;
  display: grid;
  justify-content: center;
  overflow-y: auto;
`
