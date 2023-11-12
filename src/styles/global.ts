import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background: ${({ theme }) => theme["gray-100"]};
  }

  @media (max-width: 425px) {
    :root {
      font-size: 87.5%;
    }
  }
`;
