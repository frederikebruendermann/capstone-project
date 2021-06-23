import styled from 'styled-components/macro'

export default function Bookmark({ onClick, isActive }) {
  return (
    <Wrapper isActive={isActive} onClick={onClick}>
      ☆
    </Wrapper>
  )
}

const Wrapper = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 16px;
  color: var(--white);
  font-size: 30px;
  cursor: pointer;
  background-color: ${props =>
    props.isActive ? 'var(--purple)' : 'var(--light-purple)'};
  box-shadow: none;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
