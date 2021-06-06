import ConcertCard from "./ConcertCard";

export default {
  title: "ConcertCard",
  component: ConcertCard,
};

const Template = (args) => <ConcertCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  concertDate: "26.06.2021",
  artistName: "Thees Uhlmann",
  concertLocation: "Pier 2",
};
