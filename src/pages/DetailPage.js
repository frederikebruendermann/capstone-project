import PropTypes from "prop-types";
import styled from "styled-components/macro";
import Heading from "../components/Header";
import Button from "../components/Button";
import DividingLine from "../components/DividingLine";

DetailPage.propTypes = {
  concert: PropTypes.object,
  onNavigate: PropTypes.func,
  pageName: PropTypes.string,
};

export default function DetailPage({ concert, onNavigate, pageName }) {
  return (
    <div>
      <Heading pageName={pageName} /> <DividingLine />
      <Wrapper>
        <ImageContainer src={concert.image} alt="" />
        <ArtistContainer>
          <span>{concert.artist}</span>
        </ArtistContainer>
        <DetailsContainer>
          <Facts>
            Location:
            <br /> Termin:
            <br /> Tickets:
            <br /> Preis:
          </Facts>
          <FactsData>
            {concert.location}
            <br /> {concert.date}
            <br /> www.eventim.de
            <br /> {concert.price}
          </FactsData>
        </DetailsContainer>
      </Wrapper>
      <Button onClick={onNavigate}>&lt;-- back </Button>
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  margin: 0;
  grid-template-columns: 30% 30% 30%;
  /* grid-template-rows: 15% 15% 15% 15%; */
  font-family: Helvetica Neue;
  font-weight: 200;
  gap: 0px 0px;
  grid-template-areas:
    "Image Image Image"
    "Image Image Image"
    "Artist Artist Artist"
    "Details Details Details";
`;

const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  margin: 50px 20px 0px 20px;
  grid-area: Image;
`;

const ArtistContainer = styled.p`
  grid-area: Artist;
  padding: 10px 20px 0px 20px;
  letter-spacing: 0.1em;
  margin-bottom: 20px; ;
`;

const DetailsContainer = styled.p`
        padding: 0px 20px 0px 20px;
        display: grid;
        grid-area: Details;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 2fr;
        grid-template-areas: "Facts FactsData;
      `;

const Facts = styled.span``;

const FactsData = styled.span`
  text-align: right;
`;
