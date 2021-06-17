import styled from "styled-components/macro";
import Button from "../components/Button";

export default function SearchInput() {
  return (
    <SearchForm>
      <SearchInputField
        type="search"
        list="Cities"
        placeholder="Berlin, Hamburg oder Bremen"
      />
      <datalist id="Cities">
        <option value="Bremen" />
        <option value="Hamburg" />
        <option value="Berlin" />
      </datalist>
      <SearchButton type="submit" value="Submit">
        🔍
      </SearchButton>
    </SearchForm>
  );
}

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  grid-gap: 5px;
  margin: 10px;
  margin-top: 50px;
`;

const SearchInputField = styled.input`
  line-height: 1.8;
  font-size: small;
  cursor: pointer;
  width: 200px;
`;

const SearchButton = styled(Button)`
  background-color: var(--light-purple);
  border: 0.8px solid var(--black);
  padding: 2px;
`;
