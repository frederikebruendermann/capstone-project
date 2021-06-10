import PropTypes from "prop-types";
import styled from "styled-components/macro";
import Title from "../components/Title";
import Button from "../components/Button";

DetailPage.propTypes = {
  date: PropTypes.string,
  artist: PropTypes.string,
  location: PropTypes.string,
  id: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.node,
  onNavigate: PropTypes.func,
};

export default function DetailPage({
  date,
  artist,
  location,
  price,
  image,
  onNavigate,
}) {
  return (
    <div>
      <Title pageName={"Details"}></Title>
      <Button onClick={onNavigate}>&lt;--</Button>
      <Wrapper>
        <Image img src={image} alt="" />
        <ArtistContainer>
          <span>{artist}</span>
        </ArtistContainer>
        <DetailsContainer>
          <Facts>
            Location:
            <br /> Termin:
            <br /> Tickets:
            <br /> Preis:
          </Facts>
          <FactsData>
            {location}
            <br /> {date}
            <br /> {price}
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

const Image = styled.img`
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
