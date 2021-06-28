//@ts-check

import { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Nav from './components/NavBar/NavBar'
import DetailPage from './pages/DetailPage/DetailPage'
import HomePage from './pages/HomePage/HomePage'
import SearchPage from './pages/SearchPage/SearchPage'
import StartPage from './pages/StartPage/StartPage'
import CalenderPage from './pages/CalenderPage/CalenderPage'
import getConcertsOfCity from './services/getConcertsOfCity'
import { loadFromLocal, saveToLocal } from './utils/localStorage'

export default function App() {
  const history = useHistory()
  const [concerts, setConcerts] = useState([])
  const [concertId, setConcertId] = useState(null)
  const [currentCity, setCurrentCity] = useState('Bremen')
  const [bookmarks, setBookmarks] = useState(loadFromLocal('bookmarks') ?? [])
  // const concertDetails =
  //   bookmarks?.find(bookmark => bookmark.id === concertId) ||
  //   concerts?.find(concert => concert.id === concertId)

  useEffect(() => {
    getConcertsOfCity(currentCity)
      .then(concerts => {
        setConcerts(concerts)
      })
      .catch(error => console.error(error))
  }, [currentCity])

  useEffect(() => {
    saveToLocal('bookmarks', bookmarks)
  }, [bookmarks])

  return (
    <>
      <Switch>
        <Route exact path="/">
          <StartPage
            pageName="Concert Life"
            onStart={handleClickStart}
            onSubmit={chosenCity}
          />
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
            // concert={concertDetails}
            concerts={concerts}
            concertId={concertId}
            bookmarks={bookmarks}
            onNavigate={handleClickBack}
            onBookmark={handleBookmark}
          />
        </Route>
        <Route path="/home">
          <HomePage
            pageName="Home"
            bookmarks={bookmarks}
            onNavigate={handleClickDetails}
          />
        </Route>
        <Route path="/kalender">
          <CalenderPage pageName="Kalender" />
        </Route>
      </Switch>

      <Nav
        onSearch={handleClickSearch}
        onHome={handleClickHome}
        onCal={handleClickCal}
      />
    </>
  )

  function chosenCity(city) {
    setCurrentCity(city)
    history.push('/suche')
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

  function handleClickCal() {
    history.push('/kalender')
  }

  function handleBookmark() {
    const index = concerts.findIndex(concert => concert.id === concertId)
    const concert = concerts[index]
    const bookmarkIndex = bookmarks.findIndex(
      concert => concert.id === concertId
    )

    if (!bookmarks.some(el => el.id === concert.id)) {
      setBookmarks([{ ...concert, isBookmarked: true }, ...bookmarks])
    } else {
      history.push('/home')
      setBookmarks([
        ...bookmarks.slice(0, bookmarkIndex),
        ...bookmarks.slice(bookmarkIndex + 1),
      ])
    }
  }
}
