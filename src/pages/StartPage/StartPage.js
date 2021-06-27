import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Header from '../../components/Header/Header'
import BackgroundImg from './StartPicture.jpg'

StartPage.propTypes = {
  pageName: PropTypes.string,
}

export default function StartPage({ pageName, onStart }) {
  return (
    <>
      <Box>
        <Header pageName={pageName} onClick={onStart} aria-label="button" />
        <SubText>Never miss a good concert again!</SubText>
      </Box>
      <Background
        onClick={onStart}
        aria-label="button"
        src={BackgroundImg}
        alt=""
      ></Background>
    </>
  )
}

const Box = styled.div`
  position: absolute;
  z-index: 2;
  background-color: var(--white);
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid white;
  border-radius: 0px 0px 10px 10px;
  box-shadow: var(--light-grey) 0px 2px 5px -1px, var(--black) 0px 1px 3px -1px;
`

const SubText = styled.p`
  margin: 70px 0px 10px 20px;
  color: var(--light-grey);
  font-size: 15px;
`

const Background = styled.img`
  width: 100%;
  z-index: 1;
  margin-top: 95px;
  position: relative;
`
