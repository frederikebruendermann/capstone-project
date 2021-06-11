import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
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


:root{
  --purple: #A0568D;
  --light-grey: #A09B9B;
  --light-purple: #ECCDDF;
  --white: #FFFFFF;
  --black: #393636;
}

`;

export default GlobalStyle;
