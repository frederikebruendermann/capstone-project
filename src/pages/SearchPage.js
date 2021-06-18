import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import ConcertCard from '../components/ConcertCard'
import Heading from '../components/Header'
import SearchInput from '../components/SearchInput'

SearchPage.propTypes = {
  pageName: PropTypes.string,
  concerts: PropTypes.array,
  onClick: PropTypes.func,
  onNavigate: PropTypes.func,
  setCity: PropTypes.func,
}

export default function SearchPage({
  pageName,
  onNavigate,
  concerts,
  setCity,
}) {
  return (
    <>
      <Heading pageName={pageName} />
      <SearchInput setCity={setCity} />
      <ConcertList>
        {concerts.map(concert => (
          <ConcertCard
            key={concert.id}
            date={concert.shortDate}
            artist={concert.artist}
            location={concert.location}
            image3_2={concert.image3_2}
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
