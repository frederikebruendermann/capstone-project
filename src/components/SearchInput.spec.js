
    import {render, screen} from '@testing-library/react'
    import SearchInput from './SearchInput'
      
    describe('SearchInput', () => {
        it('renders', () => {
            render(<SearchInput />)
            expect(screen.getByText('SearchInput')).toBeInTheDocument()
        })
    })
          