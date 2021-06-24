import getConcertDetails from './getConcertDetails'
const API_KEY = process.env.REACT_APP_API_KEY

export default function getConcertsOfCity(currentCity) {
  const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${API_KEY}&locale=*&sort=date,asc&countryCode=DE&classificationName=music`
  const cityQuery = `&city=${currentCity}`

  return fetch(url + cityQuery)
    .then(res => res.json())
    .then(data => data._embedded.events.map(item => getConcertDetails(item)))
}
