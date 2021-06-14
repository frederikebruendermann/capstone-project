import { v4 as uuidv4 } from "uuid";

export default function getConcertDetails(concert) {
  return {
    artist: concert.artistName,
    location: concert.concertLocation,
    date: concert.concertDate,
    image: concert.image,
    price: concert.price,
    id: uuidv4(),
  };
}
