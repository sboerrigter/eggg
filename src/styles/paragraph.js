import { injectGlobal } from 'styled-components'
import variables from './variables'

injectGlobal`
  p {
    color: ${variables.colors.grey50};
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`;
