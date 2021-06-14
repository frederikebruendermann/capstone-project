import styled from "styled-components/macro";
import PropTypes from "prop-types";
import ConcertCard from "../components/ConcertCard";
import Heading from "../components/Header";

SearchPage.propTypes = {
  pageName: PropTypes.string,
  concerts: PropTypes.array,
  onClick: PropTypes.func,
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
  display: grid;
  margin-top: 50px;
  justify-content: center;
  padding: 5px;
  ::-webkit-scrollbar {
    width: 10px;
  }
`;
