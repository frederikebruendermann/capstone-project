export default function getConcertDetails(concert) {
  const price = concert.priceRanges ? concert.priceRanges[0].min : "TBA";

  const index3_2 = concert.images.findIndex((image) => image.ratio === "3_2");
  const index16_9 = concert.images.findIndex((image) => image.ratio === "16_9");
  // const createLocation = location.split(",");
  // const shortLocation = [createLocation[1].replace(",", " ")];

  const longDate = new Date(concert.dates.start.localDate) + "";
  const createDate = longDate.split(" ");
  const createDateArray = [createDate[2], createDate[1], createDate[3]];
  const shortDate = createDateArray.join(" ");
  console.log(shortDate);

  return {
    artist: concert.name,
    location: concert._embedded.venues[0].name,
    date: concert.dates.start.localDate,
    shortDate,
    time: concert.dates.start.localTime,
    image3_2: concert.images[index3_2].url,
    image16_9: concert.images[index16_9].url,
    price,
    link: concert.url,
    id: concert.id,
  };
}
