import styled from "styled-components/macro";
import PropTypes from "prop-types";
import Title from "../components/Title";
import ConcertCard from "../components/ConcertCard";

SearchPage.propTypes = {
  pageName: PropTypes.string,
  concerts: PropTypes.array,
  onClick: PropTypes.func,
};

export default function SearchPage({ pageName, onNavigate, concerts }) {
  return (
    <>
      <Title pageName={pageName} />
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

const ConcertList = styled.ul`
  display: grid;
  justify-content: center;
  padding: 5px;
  ::-webkit-scrollbar {
    width: 10px;
  }
`;
