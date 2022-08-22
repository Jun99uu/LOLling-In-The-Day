import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Pretendard Variable";
  font-weight: 45 920;
  font-style: normal;
  font-display: swap;
  src: local("Pretendard Variable"),
    url("../public/fonts/PretendardVariable.woff2") format("woff2-variations");
}
  html, body, div, p {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
    font-family: "Pretendard Variable";
  }

  /* :root {
    --color__primary: #E75151;
  } */
`;

export default GlobalStyles;
