import styled from "styled-components/macro";
import PropTypes from "prop-types";

Title.propTypes = {
  pageName: PropTypes.string,
};

export default function Title({ pageName }) {
  return <PageName>{pageName}</PageName>;
}

const PageName = styled.h1`
  display: grid;
  justify-content: center;
  padding-top: 20px;
`;
