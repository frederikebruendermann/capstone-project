
    import {render, screen} from '@testing-library/react'
    import CalenderPage from './CalenderPage'
      
    describe('CalenderPage', () => {
        it('renders', () => {
            render(<CalenderPage />)
            expect(screen.getByText('CalenderPage')).toBeInTheDocument()
        })
    })
          