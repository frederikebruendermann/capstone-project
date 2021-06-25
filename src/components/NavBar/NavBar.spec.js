import { render } from '@testing-library/react'
import NavBar from './NavBar'

describe('it calls onSearch when clicking on the navbar', () => {
  it('renders', () => {
    const onSearch = jest.fn()

    render(<NavBar onClick={onSearch} />)
  })
})
