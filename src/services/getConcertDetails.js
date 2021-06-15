export default function getConcertDetails(concert) {
  return {
    artist: data._embedded.events.name,
    location: data._embedded.events.name,
    date: data._embedded.events.dates.start.localDate,
    image: data._embedded.events.images.url,
    price: data._embedded.events.name,
    id: data._embedded.events.id,
  };
}
