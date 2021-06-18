import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import ConcertCard from '../components/ConcertCard'
import Heading from '../components/Header'
import React from 'react'
import SearchInput from '../components/SearchInput'

SearchPage.propTypes = {
  pageName: PropTypes.string,
  concerts: PropTypes.array,
  onClick: PropTypes.func,
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
    <>
      <Heading pageName={pageName} />
      <SearchInput onSubmit={onSubmit} />
      <ConcertList>
        {concerts.map(concert => (
          <ConcertCard
            key={concert.id}
            date={concert.shortDate}
            artist={concert.artist}
            location={concert.location}
            image3_2={concert.image3x2}
            price={concert.price}
            onClick={() => onNavigate(concert.id)}
          />
        ))}
      </ConcertList>
    </>
  )
}

const ConcertList = styled.li`
  padding: 5px;
  display: grid;
  justify-content: center;
  overflow-y: auto;
`
