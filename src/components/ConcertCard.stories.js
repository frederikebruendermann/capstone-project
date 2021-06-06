
    import ConcertCard from './ConcertCard'
    export default {
        title: 'ConcertCard',
        component: ConcertCard
    }
      
    const Template = args => <ConcertCard {...args} />
      
    export const Default = Template.bind({})
    Default.args = {}
          