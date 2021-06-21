import styled from 'styled-components/macro'

const Wrapper = styled.button`
  position: absolute;
  width: 52px;
  height: 52px;
  right: 16px;
  color: var(--white);
  font-size: 50px;
  cursor: pointer;
  background-color: var(--light-purple);
  /* background-color: ${concerts =>
    concerts.isBookmarked ? 'var(--purple)' : 'var(--light-purple)'}; */
  box-shadow: none;
  border: 1px solid #a09b9b;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Bookmark() {
  return <Wrapper>☆</Wrapper>
}
