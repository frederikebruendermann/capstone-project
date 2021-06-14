import ConcertCard from "./ConcertCard";

export default {
  title: "ConcertCard",
  component: ConcertCard,
};

const Template = (args) => <ConcertCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: "Do., 02.12.2021, 20:00",
  location: "Pier2",
  artist: "Madsen",
};
