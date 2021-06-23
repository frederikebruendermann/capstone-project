import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Title from '../components/Title'
import Button from '../components/Button'
import DividingLine from './DividingLine'

Header.propTypes = {
  pageName: PropTypes.node,
  onNavigate: PropTypes.func,
}

export default function Header({ pageName, onNavigate }) {
  return (
    <Heading>
      <Wrapper>
        {pageName === 'Details' ? (
          <BackButton onClick={onNavigate}>&lt;-- </BackButton>
        ) : (
          <BackButton hidden />
        )}
        <Title pageName={pageName} />
      </Wrapper>
      <DividingLine />
    </Heading>
  )
}

const Heading = styled.header`
  position: fixed;
  left: 0;
  font-family: 'Helvetica Neue';
  font-weight: 200;
  letter-spacing: 0.2em;
  background: white;
  text-align: center;
  width: 100%;
  top: 0;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 10px 0.5fr;
`

const BackButton = styled(Button)`
  display: grid;
  justify-content: flex-start;
  z-index: 1;
  background-color: transparent;

  hidden {
    display: none;
  }
`
