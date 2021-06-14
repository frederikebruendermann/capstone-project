import styled from "styled-components/macro";

const Button = styled.button`
  border-style: none;
  font-weight: 200;
  padding: 1em;
  background-color: ${(props) => (props.isActive ? "lightgrey" : "white")};
`;

export default Button;
