import { injectGlobal } from 'styled-components'
import variables from './variables'

injectGlobal`
  a {
    color: ${variables.colors.white};
    cursor: pointer;
    text-decoration: none;
    transition: color 0.25s;

    &:hover {
      color: ${variables.colors.grey75};
    }

    &.red:hover {
      color: ${variables.colors.red} !important;
    }

    &.yellow:hover {
      color: ${variables.colors.yellow} !important;
    }

    &.green:hover {
      color: ${variables.colors.green} !important;
    }
  }
`;
