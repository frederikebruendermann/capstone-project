import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Header from '../../components/Header/Header'
import BackgroundImg from './StartPicture.jpg'
import Button from '../../components/Button/Button'

StartPage.propTypes = {
  pageName: PropTypes.string,
  onSubmit: PropTypes.func,
}

export default function StartPage({ pageName, onStart, onSubmit }) {
  return (
    <>
      <Box>
        <Header pageName={pageName} onClick={onStart} aria-label="button" />
        <SubText>Never miss a good concert again!</SubText>
        <SearchForm onSubmit={handleSubmit} aria-label="form">
          <SearchInputField
            type="text"
            name="searchCity"
            placeholder="Suche in Deiner Stadt ..."
          />
          <SearchButton>🔍</SearchButton>
        </SearchForm>
      </Box>
      <Background
        onClick={onStart}
        aria-label="button"
        src={BackgroundImg}
        alt=""
      ></Background>
    </>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const city = event.target.elements.searchCity.value
    onSubmit(city)
  }
}

const Box = styled.div`
  position: absolute;
  z-index: 2;
  background-color: var(--white);
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 0px 0px 10px 10px;
  box-shadow: var(--light-grey) 0px 2px 5px -1px, var(--black) 0px 1px 3px -1px;
`

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  grid-gap: 5px;
  margin: 15px 10px 10px 25px;
`

const SearchInputField = styled.input`
  line-height: 1;
  border: 1px solid var(--light-grey);
  font-size: medium;
  cursor: pointer;
  width: 200;
`

const SearchButton = styled(Button)`
  background-color: var(--light-purple);
  border: 1px solid var(--light-grey);
  padding: 5px;
  cursor: pointer;
`

const SubText = styled.p`
  margin: 70px 0px 0px 20px;
  color: var(--light-grey);
  font-size: 15px;
`

const Background = styled.img`
  width: 100%;
  z-index: 1;
  margin-top: 95px;
  position: relative;
`
