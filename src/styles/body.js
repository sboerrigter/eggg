import { injectGlobal } from 'styled-components'
import variables from './variables'

injectGlobal`
  body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(to right, ${variables.colors.grey10}, ${variables.colors.grey20});
    box-sizing: border-box;
    color: ${variables.colors.white};
    font-family: 'Khula', sans-serif;
    font-size: 1em;
    font-weight: 600;
    height: 100%;
    line-height: 1.5;
    margin: 0;
    padding: 30px;
    width: 100%;
    word-wrap: break-word;
  }

  *::before,
  *::after,
  * {
    box-sizing: inherit;
  }
`;
