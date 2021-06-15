import styled from "styled-components/macro";
import PropTypes from "prop-types";
import ConcertCard from "../components/ConcertCard";
import Heading from "../components/Header";
import React from "react";

SearchPage.propTypes = {
  pageName: PropTypes.string,
  concerts: PropTypes.array,
  onClick: PropTypes.func,
  onNavigate: PropTypes.func,
};

export default function SearchPage({ pageName, onNavigate, concerts }) {
  return (
    <>
      <Heading pageName={pageName} />
      <ConcertList>
        {concerts.map((concert) => (
          <ConcertCard
            key={concert.id}
            date={concert.date}
            artist={concert.artist}
            location={concert.location}
            image={concert.image}
            price={concert.price}
            onClick={() => onNavigate(concert.id)}
          />
        ))}
      </ConcertList>
    </>
  );
}

const ConcertList = styled.li`
  padding: 5px;
  margin-top: 50px;
  display: grid;
  justify-content: center;
  overflow-y: auto;
`;
