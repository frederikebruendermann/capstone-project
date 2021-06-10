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
  --blue: #1C85E8;
  --peach: #FF896D;
  --light-peach: #1C85E8;
  --light-blue: #ACD3F8;
  --white: #FFFFFF;
  --black: #212121;
}

`;

export default GlobalStyle;
