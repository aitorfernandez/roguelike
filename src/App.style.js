import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    display: block;
  }

  *, *::before, *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    -moz-font-feature-settings: liga on;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: #181818;
    color: #999;
    font-family: Helvetica Neue, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin: 12px;
  }
`
