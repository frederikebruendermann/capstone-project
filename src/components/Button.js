import styled from "styled-components/macro";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default function Button(props) {
  return <ButtonStyled {...props} />;
}

const ButtonStyled = styled.button`
  border-style: none;
  font-family: Helvetica Neue;
  font-weight: 200;
  padding: 1em;
  background-color: ${(props) => (props.isActive ? "lightgrey" : "white")};
`;
