import PropTypes from "prop-types";
import styled from "styled-components/macro";
import Title from "../components/Title";
import Button from "../components/Button";
import DividingLine from "../components/DividingLine";
import "../GlobalStyles";

DetailPage.propTypes = {
  concert: PropTypes.object,
  onNavigate: PropTypes.func,
  pageName: PropTypes.string,
};

export default function DetailPage({ concert, onNavigate, pageName }) {
  return (
    <div>
      <Title pageName={pageName}></Title>
      <Button onClick={onNavigate}>&lt;--</Button>
      <DividingLine />
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
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "Image Image Image"
    "Image Image Image"
    "Artist Artist ."
    "Details Details Details";
`;

const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  grid-area: Image;
`;

const ArtistContainer = styled.div`
  grid-area: Artist;
  padding: 20px;
`;

const DetailsContainer = styled.div`
        padding: 20px;
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
