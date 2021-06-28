import CalenderPage from './CalenderPage'
export default {
  title: 'CalenderPage',
  component: CalenderPage,
}

const Template = args => <CalenderPage {...args} />

export const Default = Template.bind({})
Default.args = { pageName: 'Kalender' }
