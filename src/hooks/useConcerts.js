import { useState, useEffect } from 'react'
import getConcertDetails from '../services/getConcertDetails'

const url =
  'https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&sort=date,asc&countryCode=DE&classificationName=music'

export default function useConcerts() {
  const [concerts, setConcerts] = useState([])
  const [concertId, setConcertId] = useState(null)
  const index = concerts.findIndex(concert => concert.id === concertId)
  const concertDetails = concerts[index]

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const rawConcerts = res._embedded.events
        const concertsWithDetails = rawConcerts.map(getConcertDetails)
        setConcerts(concertsWithDetails)
      })
      .catch(error => console.error(error))
  }, [])

  return { concerts, concertDetails, setConcertId }
}
