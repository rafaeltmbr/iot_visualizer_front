import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  /* Chrome scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.scrollbarTrack};
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.scrollbarThumb};
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.colors.scrollbarThumbHover};
  }

`;
