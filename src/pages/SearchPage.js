import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import ConcertCard from '../components/ConcertCard'
import Heading from '../components/Header'
import React from 'react'
import SearchInput from '../components/SearchInput'
// import StartPage from './StartPage'

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
              image3_2={concert.image3x2}
              price={concert.price}
              onClick={() => onNavigate(concert.id)}
            />
          ))}
        </ConcertList>
        {/* <button onClick={() => onNavigate(StartPage)}>Home</button> */}
      </main>
    </>
  )
}

const ConcertList = styled.ul`
  padding: 5px;
  display: grid;
  justify-content: center;
  overflow-y: auto;
`
