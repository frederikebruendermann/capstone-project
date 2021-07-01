import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import DividingLine from '../../components/DividingLine/DividingLine'
import Slider from '../../components/Slider'
import ConcertCard from '../../components/ConcertCard/ConcertCard'
import Heading from '../../components/Header/Header'

HomePage.propTypes = {
  pageName: PropTypes.string,
  bookmarks: PropTypes.array,
  checkedConcerts: PropTypes.array,
}

export default function HomePage({
  bookmarks,
  pageName,
  onNavigate,
  checkedConcerts,
}) {
  return (
    <Wrapper>
      <Heading pageName={pageName} />
      <NextBox>
        <h2>Nächste Konzerte</h2>
        {checkedConcerts.length === 0 ? (
          <Text>Du hast noch keine Konzerte in den Kalender eingetragen.</Text>
        ) : (
          <HomeSlider>
            {checkedConcerts.map(concert => (
              <Slider
                key={concert.id}
                date={concert.shortDate}
                artist={concert.artist}
                image3x2={concert.image3x2}
                onClick={() => onNavigate(concert.id)}
              />
            ))}
          </HomeSlider>
        )}
      </NextBox>
      <DividingLine />
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

const HomeSlider = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
`

const Hint = styled.div`
  margin: 10px 10px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`

const NextBox = styled.div`
  margin: 75px 10px 10px;
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
