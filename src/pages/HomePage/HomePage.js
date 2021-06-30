import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ConcertCard from '../../components/ConcertCard/ConcertCard'
import Heading from '../../components/Header/Header'

HomePage.propTypes = {
  pageName: PropTypes.string,
  bookmarks: PropTypes.array,
}

export default function HomePage({ bookmarks, pageName, onNavigate }) {
  return (
    <Wrapper>
      <Heading pageName={pageName} />
      <Hint>
        <BookmarkInactive>☆</BookmarkInactive>
        <h2>Merkliste</h2>
      </Hint>
      <div>
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
    </Wrapper>
  )
}

const Hint = styled.div`
  margin: 75px 10px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`

const Wrapper = styled.section`
  padding: 10px;
`

const ConcertList = styled.ul`
  padding: 5px;
  display: grid;
  justify-content: center;
  overflow-y: auto;
  margin-top: 10px;
`
const Text = styled.p`
  margin: 10px 10px 10px;
  font-size: small;
`
const BookmarkInactive = styled.button`
  width: 40px;
  height: 40px;
  color: var(--white);
  font-size: 30px;
  background-color: var(--purple);
  box-shadow: none;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
