import SearchPage from "./SearchPage";
export default {
  title: "SearchPage",
  component: SearchPage,
};

const Template = (args) => <SearchPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
