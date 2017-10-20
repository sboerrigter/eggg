import { injectGlobal } from 'styled-components'
import variables from './variables'

injectGlobal`
  body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(to right, ${variables.colors.grey10}, ${variables.colors.grey20});
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
    word-wrap: break-word;
  }

  *::before,
  *::after,
  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`;
