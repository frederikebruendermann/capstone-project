import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin:0;
}
body {
  margin: 0;
  font-family: Helvetica Neue;
  font-size: 112.5%;
  background-color: white;
;
}
input,
button,
textarea {
  font-size: inherit;
}

h1{
  display: grid;
  justify-content: center;
  color: var(--black);
  font-size: 20px;
  text-transform: uppercase;
  font-family: Helvetica Neue;
  font-weight: 200;
}

:root{
  --purple: #A0568D;
  --light-grey: #A09B9B;
  --light-purple: #ECCDDF;
  --white: #FFFFFF;
  --black: #393636;
  --font-family: Helvetica Neue;
  --text-transform: uppercase;


}

`;

export default GlobalStyle;
