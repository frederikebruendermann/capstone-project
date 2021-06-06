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
    },
    {
      concertDate: "04.07.2021",
      artistName: "Madsen",
      concertLocation: "Tower",
    },
    {
      concertDate: "12.07.2021",
      artistName: "Tomte",
      concertLocation: "Pier2",
    },
    {
      concertDate: "20.07.2021",
      artistName: "Roland Kaiser",
      concertLocation: "ÖVB Arena",
    },
    {
      concertDate: "24.07.2021",
      artistName: "Olli Schulz",
      concertLocation: "Schlachthof",
    },
    {
      concertDate: "05.08.2021",
      artistName: "Beatsteaks",
      concertLocation: "Pier 2",
    },
  ],
};
