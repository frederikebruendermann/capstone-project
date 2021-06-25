import { render, screen } from '@testing-library/react'
import SearchInput from './SearchInput'

const noop = () => {}

describe('SearchInput', () => {
  it('should get a city through a textbox', () => {
    render(<SearchInput onSubmit={noop} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
