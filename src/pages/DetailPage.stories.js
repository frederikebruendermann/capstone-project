import DetailPage from "./DetailPage";
export default {
  title: "DetailPage",
  component: DetailPage,
};

const Template = (args) => <DetailPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  concert: {
    date: "Do., 02.12.2021, 20:00",
    location: "Pier2",
    artist: "Madsen",
    price: "22,50€",
    image:
      "https://www.eventim.de/obj/media/DE-eventim/teaser/222x222/2021/element-of-juicy-beats-crime-tickets-2021.jpg",
  },
};
