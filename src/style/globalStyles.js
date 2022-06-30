import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  body {
      margin: 0;
      padding: 0;
      background:${({ theme }) => theme.body};
      transition:all 0.3s linear;
      font-family:'Roboto', sans-serif;
  }

  tr, td {
    color:${({ theme }) => theme.text} !important;
    opacity:${({ theme }) => theme.opacity} !important;
  }
`;
