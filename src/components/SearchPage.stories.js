import SearchPage from "./SearchPage";
export default {
  title: "SearchPage",
  component: SearchPage,
};

const Template = (args) => <SearchPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageName: "Suche",
  concerts: [
    {
      concertDate: "26.06.2021",
      artistName: "Thees Uhlmann",
      concertLocation: "Pier 2",
      key: "1",
    },
    {
      concertDate: "04.07.2021",
      artistName: "Madsen",
      concertLocation: "Tower",
      key: "2",
    },
    {
      concertDate: "12.07.2021",
      artistName: "Tomte",
      concertLocation: "Pier2",
      key: "3",
    },
    {
      concertDate: "20.07.2021",
      artistName: "Roland Kaiser",
      concertLocation: "ÖVB Arena",
      key: "4",
    },
    {
      concertDate: "24.07.2021",
      artistName: "Olli Schulz",
      concertLocation: "Schlachthof",
      key: "5",
    },
    {
      concertDate: "05.08.2021",
      artistName: "Beatsteaks",
      concertLocation: "Pier 2",
      key: "6",
    },
    {
      concertDate: "26.06.2021",
      artistName: "Thees Uhlmann",
      concertLocation: "Pier 2",
      key: "7",
    },
    {
      concertDate: "04.07.2021",
      artistName: "Madsen",
      concertLocation: "Tower",
      key: "8",
    },
    {
      concertDate: "12.07.2021",
      artistName: "Tomte",
      concertLocation: "Pier2",
      key: "9",
    },
    {
      concertDate: "20.07.2021",
      artistName: "Roland Kaiser",
      concertLocation: "ÖVB Arena",
      key: "10",
    },
    {
      concertDate: "24.07.2021",
      artistName: "Olli Schulz",
      concertLocation: "Schlachthof",
      key: "11",
    },
    {
      concertDate: "05.08.2021",
      artistName: "Beatsteaks",
      concertLocation: "Pier 2",
      key: "12",
    },
  ],
};
