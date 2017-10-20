import { injectGlobal } from 'styled-components'

injectGlobal`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1;
  }

  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 2em;
  }
`;
