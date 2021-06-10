import { v4 as uuidv4 } from "uuid";

export default function getConcertDetails(concert) {
  return {
    artist: concert.artistName,
    location: concert.concertLocation,
    date: concert.concertDate,
    id: uuidv4(concert),
  };
}
