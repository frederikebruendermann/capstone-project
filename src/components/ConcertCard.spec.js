
    import {render, screen} from '@testing-library/react'
    import ConcertCard from './ConcertCard'
      
    describe('ConcertCard', () => {
        it('renders', () => {
            render(<ConcertCard />)
            expect(screen.getByText('ConcertCard')).toBeInTheDocument()
        })
    })
          