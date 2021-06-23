import getConcertDetails from './getConcertDetails'

export default function getConcertsOfCity(currentCity) {
  const url =
    'https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&sort=date,asc&countryCode=DE&classificationName=music'
  const cityQuery = `&city=${currentCity}`

  return fetch(url + cityQuery)
    .then(res => res.json())
    .then(data => data._embedded.events.map(item => getConcertDetails(item)))
}
