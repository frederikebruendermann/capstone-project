//@ts-check

import PropType from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'

SearchInput.propTypes = {
  onSubmit: PropType.func.isRequired,
}

export default function SearchInput({ onSubmit }) {
  return (
    <SearchForm onSubmit={handleSubmit} aria-label="form">
      <SearchInputField
        type="text"
        name="searchCity"
        placeholder="z.B. Bremen, Hamburg"
      />
      <SearchButton>🔍</SearchButton>
    </SearchForm>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const city = event.target.elements.searchCity.value
    onSubmit(city)
  }
}

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  grid-gap: 5px;
  margin: 60px 10px 10px;
`

const SearchInputField = styled.input`
  line-height: 1.8;
  border: 1px solid var(--light-grey);
  font-size: medium;
  cursor: pointer;
  width: 400;
`

const SearchButton = styled(Button)`
  background-color: var(--light-purple);
  border: 1px solid var(--light-grey);
  padding: 5px;
  cursor: pointer;
`
