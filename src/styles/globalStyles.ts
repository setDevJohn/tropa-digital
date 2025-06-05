import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F8F8F8;
  }
  
  html {
    font-family: "Roboto", sans-serif;
    font-size: ${({ theme }) => theme.normalSize};
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }
`;