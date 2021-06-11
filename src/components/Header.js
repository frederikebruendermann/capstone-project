import styled from "styled-components/macro";
import PropTypes from "prop-types";
import DividingLine from "./DividingLine";
import Title from "../components/Title";

Header.propTypes = {
  pageName: PropTypes.node,
};

export default function Header({ pageName }) {
  return (
    <Heading>
      <Title pageName={pageName} />
      <DividingLine />
    </Heading>
  );
}

const Heading = styled.header`
  position: fixed;
  background: white;
  text-align: center;
  width: 100%;
  margin: 0;
  top: 0;
`;
