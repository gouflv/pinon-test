import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { px2vw } from './px2vw'

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  
  * {
    outline: none;
    user-select: none;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: ${({ theme }) => px2vw(theme.fonsSizes.normal)};
    line-height: 1.2;
    background-color: #f4f4f4;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
