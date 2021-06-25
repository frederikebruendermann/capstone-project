import { render, screen } from '@testing-library/react'
import HomePage from './HomePage'

describe('HomePage', () => {
  it('calls onNavigate when clicking on the concert card and has as text in the header', () => {
    const onNavigate = jest.fn()
    const pageName = 'Test'

    render(
      <HomePage
        pageName={pageName}
        bookmarks={[
          {
            id: 1,
            artist: 'Thees',
            date: 'Fr., 02.07.2021, 20:00',
            location: 'Bremen, Seebühne Bremen',
          },
        ]}
        onClick={onNavigate}
      />
    )
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
