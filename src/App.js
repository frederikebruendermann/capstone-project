//@ts-check

import { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Nav from './components/NavBar/NavBar'
import DetailPage from './pages/DetailPage/DetailPage'
import HomePage from './pages/HomePage/HomePage'
import SearchPage from './pages/SearchPage/SearchPage'
import getConcertsOfCity from './services/getConcertsOfCity'

export default function App() {
  const history = useHistory()
  const [concerts, setConcerts] = useState([])
  const [concertId, setConcertId] = useState(null)
  const [currentCity, setCurrentCity] = useState('Bremen')
  const concertDetails = concerts.find(concert => concert.id === concertId)
  const bookmarks = concerts.filter(concert => concert.isBookmarked)

  useEffect(() => {
    getConcertsOfCity(currentCity)
      .then(concerts => {
        setConcerts(concerts)
      })
      .catch(error => console.error(error))
  }, [currentCity])

  return (
    <>
      <Switch>
        <Route path="/suche">
          <SearchPage
            pageName="Suche"
            concerts={concerts}
            onNavigate={handleClickDetails}
            onSubmit={chosenCity}
          />
        </Route>

        <Route path="/details">
          <DetailPage
            pageName="Details"
            concert={concertDetails}
            onNavigate={handleClickBack}
            onBookmark={handleBookmark}
          />
        </Route>
        <Route path="/">
          <HomePage
            pageName="ConcertLife"
            bookmarks={bookmarks}
            onNavigate={handleClickDetails}
          />
        </Route>
      </Switch>
      <Nav onSearch={handleClickSearch} onHome={handleClickHome} />
    </>
  )

  function chosenCity(city) {
    setCurrentCity(city)
  }

  function handleClickDetails(id) {
    setConcertId(id)
    history.push('/details')
  }

  function handleClickBack() {
    history.goBack()
  }

  function handleClickSearch() {
    history.push('/suche')
  }

  function handleClickHome() {
    history.push('/')
  }

  function handleBookmark() {
    const index = concerts.findIndex(concert => concert.id === concertId)
    const concert = concerts[index]

    setConcerts([
      ...concerts.slice(0, index),
      { ...concert, isBookmarked: !concert.isBookmarked },
      ...concerts.slice(index + 1),
    ])
  }
}
