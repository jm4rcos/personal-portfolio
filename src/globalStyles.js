import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #1D2024;
    font-family: 'Fira Code', monospace;
    text-align: left;
    font-size: 16px;
  }
  html{
    scroll-behavior: smooth;
  }

  *::selection {
    background: #dc143c;
    color: #fff;
  }

  .App{
    padding: 2.5em 4em;
    position: relative;
  }

  .social-icons{
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 2.5em 4em;
    display: flex;
    background: transparent;
    z-index: 100;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  
  .linkedin-icon,  .github-icon {
    border-radius: 5px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid transparent; /* Adicionado */
  cursor: pointer;
  transition: border 0.2s ease-in-out; /* Atualizado */
}

.linkedin-icon:hover,  .github-icon:hover {
  border: 1px solid #fff;
}
`;

export default GlobalStyle;
