export default function getConcertDetails(concert) {
  const price = concert.priceRanges ? concert.priceRanges[0].min : "TBA";
  console.log(concert.images[1].ratio);

  const index3_2 = concert.images.findIndex((image) => image.ratio === "3_2");
  const index16_9 = concert.images.findIndex((image) => image.ratio === "16_9");

  return {
    artist: concert.name,
    location: concert._embedded.venues[0].name,
    date: concert.dates.start.localDate,
    image3_2: concert.images[index3_2].url,
    image16_9: concert.images[index16_9].url,
    price,
    link: concert.url,
    id: concert.id,
  };
}
