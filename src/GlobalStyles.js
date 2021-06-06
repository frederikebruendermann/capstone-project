import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
  margin: 0;
  font-family: sans-serif;
  font-size: 112.5%;
  background-color: white;
;
}
input,
button,
textarea {
  font-size: inherit;
}
`;

export default GlobalStyle;
