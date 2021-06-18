//@ts-check

import { useEffect, useState } from 'react'
import SearchPage from '../src/pages/SearchPage'
import DetailPage from './pages/DetailPage'
import getConcertDetails from './services/getConcertDetails'

export default function App() {
  const [activePage, setActivePage] = useState('suche')
  const url =
    'https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&sort=date,asc&countryCode=DE&classificationName=music'
  const [data, setData] = useState([])
  const [currentCity, setCurrentCity] = useState('Bremen')

  useEffect(() => {
    const cityQuery = `&city=${currentCity}`
    fetch(url + cityQuery)
      .then(res => res.json())
      .then(res => {
        setData(res._embedded.events)
      })
      .catch(error => console.error(error))
  }, [url, currentCity])

  const [concertDetails, setConcertDetails] = useState({})
  const concerts = data.map(item => getConcertDetails(item))

  return (
    <>
      {activePage === 'suche' && (
        <SearchPage
          pageName="Suche"
          concerts={concerts}
          onNavigate={handleClickDetails}
          setCity={newCity}
        />
      )}

      {activePage === 'details' && (
        <DetailPage
          pageName="Details"
          concert={concertDetails}
          onNavigate={handleClickBack}
        />
      )}
    </>
  )

  function newCity(city) {
    setCurrentCity(city)
  }

  function handleClickDetails(id) {
    const index = concerts.findIndex(concert => concert.id === id)
    setConcertDetails(concerts[index])
    setActivePage('details')
  }

  function handleClickBack() {
    setActivePage('suche')
  }
}
