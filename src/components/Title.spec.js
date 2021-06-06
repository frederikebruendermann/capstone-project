
    import {render, screen} from '@testing-library/react'
    import Title from './Title'
      
    describe('Title', () => {
        it('renders', () => {
            render(<Title />)
            expect(screen.getByText('Title')).toBeInTheDocument()
        })
    })
          