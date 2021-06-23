//@ts-check

import { useState, useEffect } from 'react'
import SearchPage from '../src/pages/SearchPage'
import DetailPage from './pages/DetailPage'
import getConcertsOfCity from './services/getConcertsOfCity'

export default function App() {
  const [activePage, setActivePage] = useState('suche')
  const [concerts, setConcerts] = useState([])
  const [concertId, setConcertId] = useState(null)
  const [currentCity, setCurrentCity] = useState('Bremen')
  const concertDetails = concerts.find(concert => concert.id === concertId)

  useEffect(() => {
    getConcertsOfCity(currentCity)
      .then(concerts => {
        setConcerts(concerts)
      })
      .catch(error => console.error(error))
  }, [currentCity])

  function handleBookmark() {
    const index = concerts.findIndex(concert => concert.id === concertId)
    const concert = concerts[index]

    setConcerts([
      ...concerts.slice(0, index),
      { ...concert, isBookmarked: !concert.isBookmarked },
      ...concerts.slice(index + 1),
    ])
  }

  return (
    <>
      {activePage === 'suche' && (
        <SearchPage
          pageName="Suche"
          concerts={concerts}
          onNavigate={handleClickDetails}
          onSubmit={chosenCity}
        />
      )}

      {activePage === 'details' && (
        <DetailPage
          pageName="Details"
          concert={concertDetails}
          onNavigate={handleClickBack}
          onBookmark={handleBookmark}
        />
      )}
    </>
  )

  function chosenCity(city) {
    setCurrentCity(city)
  }

  function handleClickDetails(id) {
    setConcertId(id)
    setActivePage('details')
  }

  function handleClickBack() {
    setActivePage('suche')
  }
}
