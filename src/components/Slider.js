import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Slider.propTypes = {
  podcast: PropTypes.object,
  concert: PropTypes.array,
}

export default function Slider({ artist, image3x2, onClick }) {
  return (
    <Container onClick={onClick}>
      <Image height="80px" width="auto" src={image3x2} />
      <Artist> {artist}</Artist>
    </Container>
  )
}

const Container = styled.section`
  width: 8rem;
  margin: 10px;
`

const Image = styled.img`
  border-radius: 20px;
`

const Artist = styled.h2`
  font-size: 0.7rem;
  display: -webkit-box;
`
