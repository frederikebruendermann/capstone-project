import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import '../GlobalStyles'

Title.propTypes = {
  pageName: PropTypes.string.isRequired,
}

export default function Title({ pageName }) {
  return <PageName>{pageName}</PageName>
}

const PageName = styled.h1`
  display: grid;
  justify-items: center;
  color: var(--black);
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 200;
`
