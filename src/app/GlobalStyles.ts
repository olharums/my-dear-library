import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(210,182,165);
    background: linear-gradient(146deg, rgba(210,182,165,1) 0%, rgba(144,109,91,1) 52%) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding-left: 3rem;
    padding-right: 3rem;
    font-family: 'Lobster' !important;
    font-size: x-large;

    @media (max-width: 768px) {
        background: rgba(144,109,91,1);
        padding: 1.5rem;
    }

    @media (max-width: 375px) {
        padding: 0.5rem;
    }
  }  
`;

export default GlobalStyle;
