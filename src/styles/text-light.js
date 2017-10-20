import { injectGlobal } from 'styled-components'
import variables from './variables'

injectGlobal`
  .text-light {
    color: ${variables.colors.grey50};
  }
`;
