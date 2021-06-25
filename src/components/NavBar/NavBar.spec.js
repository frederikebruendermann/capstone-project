import { render } from '@testing-library/react'
import NavBar from './NavBar'

describe('it calls onClickSearch when clicking on the navbar', () => {
  it('renders', () => {
    const onClickSearch = jest.fn()

    render(<NavBar onClick={onClickSearch} />)
  })
})
