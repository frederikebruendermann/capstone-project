//@ts-check

import PropType from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'

SearchInput.propTypes = {
  setCity: PropType.func,
}

export default function SearchInput({ setCity }) {
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInputField
        type="text"
        name="searchCity"
        placeholder="Berlin, Hamburg oder Bremen"
      />
      <SearchButton>🔍</SearchButton>
    </SearchForm>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const city = event.target.elements.searchCity.value
    setCity(city)
  }
}

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  grid-gap: 5px;
  margin: 10px;
  margin-top: 50px;
`

const SearchInputField = styled.input`
  line-height: 1.8;
  font-size: small;
  cursor: pointer;
  width: 200px;
`

const SearchButton = styled(Button)`
  background-color: var(--light-purple);
  border: 0.8px solid var(--black);
  padding: 2px;
`
