import PropTypes from "prop-types";
import styled from "styled-components/macro";
import Title from "../components/Title";

DetailPage.propTypes = {
  pageName: PropTypes.string.isRequired,
  concerts: PropTypes.array,
  image: PropTypes.node,
};
export default function DetailPage({ concerts, pageName }) {
  //   const {
  //     date,
  //     artist,
  //     location,
  //     link,
  //     price,
  //     image,
  //   } = concerts;

  return (
    <div>
      <Title pageName={"Details"}></Title>
      <Wrapper>
        <Image
          img
          src="https://images.unsplash.com/photo-1499424017184-418f6808abf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2700&q=80"
          alt=""
        />
        <ArtistContainer>
          <span>Thees Uhlmann</span>
        </ArtistContainer>
        <DetailsContainer>
          <Facts>
            Location:
            <br /> Termin:
            <br /> Tickets:
          </Facts>
          <FactsData>
            Pier 2, Bremen
            <br /> 26.06.2021, 20Uhr
            <br /> <a href="www.eventim.de">www.eventim.de</a>
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
