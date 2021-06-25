import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import ConcertCard from '../components/ConcertCard/ConcertCard'
import Heading from '../components/Header/Header'
import SearchInput from '../components/SearchInput/SearchInput'

SearchPage.propTypes = {
  pageName: PropTypes.string,
  concerts: PropTypes.array,
  onNavigate: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default function SearchPage({
  pageName,
  onNavigate,
  concerts,
  onSubmit,
}) {
  return (
    <main>
      <Heading pageName={pageName} />
      <SearchInput onSubmit={onSubmit} />
      <ConcertList>
        {concerts.map(concert => (
          <ConcertCard
            key={concert.id}
            date={concert.shortDate}
            artist={concert.artist}
            location={concert.location}
            image3x2={concert.image3x2}
            price={concert.price}
            onClick={() => onNavigate(concert.id)}
          />
        ))}
      </ConcertList>
    </main>
  )
}

const ConcertList = styled.ul`
  padding: 5px;
  display: grid;
  justify-content: center;
  overflow-y: auto;
`
