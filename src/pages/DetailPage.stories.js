
    import DetailPage from './DetailPage'
    export default {
        title: 'DetailPage',
        component: DetailPage
    }
      
    const Template = args => <DetailPage {...args} />
      
    export const Default = Template.bind({})
    Default.args = {}
          