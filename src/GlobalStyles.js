import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin:0;
}

:root{
  --purple: #A0568D;
  --light-grey: #A09B9B;
  --light-purple: #ECCDDF;
  --white: #FFFFFF;
  --black: #393636;
  --text-transform: uppercase;
}

body {
  margin: 0;
  font-family: Helvetica Neue, sans-serif;
  font-size: 112.5%;
  font-weight: 200;
  background-color: white;
  letter-spacing: 0.1em;
;
}
input,
button,
textarea, 
p {
  font-size: inherit;
  font-family: Helvetica Neue;
  font-weight: 200;
}

h1{
  display: grid;
  justify-content: center;
  color: var(--black);
  font-size: 20px;
  text-transform: uppercase;
  font-family: Helvetica Neue;
  letter-spacing: 0.1em;
  font-weight: 200;
}



`

export default GlobalStyle
