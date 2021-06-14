import PropTypes from "prop-types";
import styled from "styled-components/macro";
import Heading from "../components/Header";
import Button from "../components/Button";

DetailPage.propTypes = {
  concert: PropTypes.object,
  onNavigate: PropTypes.func,
  pageName: PropTypes.string,
};

export default function DetailPage({ concert, onNavigate, pageName }) {
  return (
    <div>
      <Heading pageName={pageName} />
      <Wrapper>
        <Image src={concert.image} alt="" />
        <ArtistContainer>
          <span>{concert.artist}</span>
        </ArtistContainer>
        <DetailsContainer>
          <Facts>
            <tr>
              <td>Location: </td>
              <td>{concert.location}</td>
            </tr>
            <tr>
              <td>Termin: </td>
              <td>{concert.date}</td>
            </tr>
            <tr>
              <td>Preis: </td>
              <td>{concert.price}</td>
            </tr>
            <tr>
              <td>Termin:</td>
              <td>www.eventim.de </td>
            </tr>
          </Facts>
        </DetailsContainer>
      </Wrapper>
      <Button onClick={onNavigate}>&lt;-- back </Button>
    </div>
  );
}

const Wrapper = styled.div`
  display: inline;
  margin: 0;
  font-family: Helvetica Neue;
  font-weight: 200;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 10% 10% 35% 35%;
  grid-template-areas:
    "Image Image Image"
    "Image Image Image"
    "Artist Artist Artist"
    "Details Details Details";
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 60px 0px 0px 0px;
  grid-area: Image;
  display: grid;
  justify-items: center;
`;

const ArtistContainer = styled.p`
  grid-area: Artist;
  padding: 10px 20px 0px 20px;
  letter-spacing: 0.1rem;
  margin-bottom: 20px; ;
`;

const DetailsContainer = styled.table`
        padding: 0px 20px;
        display: grid;
        grid-area: Details;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr fr;
        grid-template-areas: "Facts FactsData;
      `;
const Facts = styled.tbody``;
