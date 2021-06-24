import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

NavBar.propTypes = {
  onClickSearch: PropTypes.func,
  onClickHome: PropTypes.func,
}

export default function NavBar({ onClickSearch, onClickHome }) {
  return (
    <Nav>
      <NavButton onClick={onClickHome}>HOME</NavButton>
      <NavButton onClick={onClickSearch}>SUCHE</NavButton>
    </Nav>
  )
}

const Nav = styled.nav`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  background-color: var(--white);
  bottom: 0;
  border: 1px solid white;
  border-radius: 10px 10px 0px 0px;
  box-shadow: var(--light-grey) 0px 2px 5px -1px, var(--black) 0px 1px 3px -1px;
  width: 100%;
  height: 45px;
`
const NavButton = styled.button`
  color: ${props => (props.isActive ? 'var(--purple)' : 'var(--black)')};
  background-color: var(--white);
  box-shadow: none;
  border: none;
  line-height: 2;
`
