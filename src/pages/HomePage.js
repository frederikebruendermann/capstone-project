import Heading from '../components/Header'
import PropTypes from 'prop-types'
import ConcertList from '../pages/SearchPage'
import ConcertCard from '../components/ConcertCard'

HomePage.propTypes = {
  pageName: PropTypes.string,
  onNavigate: PropTypes.func,
  bookmarks: PropTypes.array,
}

export default function HomePage({ bookmarks, pageName, onNavigate }) {
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
              />
            ))}
          </>
        )}
      </ConcertList>
    </div>
  )
}
