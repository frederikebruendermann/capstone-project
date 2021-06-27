//@ts-check

import { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Nav from './components/NavBar/NavBar'
import DetailPage from './pages/DetailPage/DetailPage'
import HomePage from './pages/HomePage/HomePage'
import SearchPage from './pages/SearchPage/SearchPage'
import StartPage from './pages/StartPage/StartPage'
import getConcertsOfCity from './services/getConcertsOfCity'
import { loadFromLocal, saveToLocal } from './utils/localStorage'

export default function App() {
  const history = useHistory()
  const [concerts, setConcerts] = useState([])
  const [concertId, setConcertId] = useState(null)
  const [currentCity, setCurrentCity] = useState('Bremen')
  const [newBookmarks, setNewBookmarks] = useState(loadFromLocal('bookmarks'))
  const concertDetails = concerts.find(concert => concert.id === concertId)

  useEffect(() => {
    getConcertsOfCity(currentCity)
      .then(concerts => {
        setConcerts(concerts)
      })
      .catch(error => console.error(error))
  }, [currentCity])

  useEffect(() => {
    saveToLocal('bookmarks', newBookmarks)
  }, [newBookmarks])

  return (
    <>
      <Switch>
        <Route exact path="/">
          <StartPage pageName="Concert Life" onStart={handleClickStart} />
        </Route>

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
        <Route path="/home">
          <HomePage
            pageName="Home"
            bookmarks={newBookmarks}
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
    history.push('/home')
  }

  function handleClickStart() {
    history.push('/home')
  }

  function handleBookmark() {
    const index = concerts.findIndex(concert => concert.id === concertId)
    const concert = concerts[index]

    setNewBookmarks([concert, ...newBookmarks])

    setConcerts([
      ...concerts.slice(0, index),
      { ...concert, isBookmarked: !concert.isBookmarked },
      ...concerts.slice(index + 1),
    ])
  }
}
