import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Title from '../components/Title'
import DividingLine from './DividingLine'

Header.propTypes = {
  pageName: PropTypes.node,
}

export default function Header({ pageName }) {
  return (
    <Heading>
      <Title pageName={pageName} />
      <DividingLine />
    </Heading>
  )
}

const Heading = styled.header`
  position: fixed;
  left: 0;
  font-family: Helvetica Neue;
  font-weight: 200;
  letter-spacing: 0.2em;
  background: white;
  text-align: center;
  width: 100%;
  margin: 0;
  top: 0;
`
