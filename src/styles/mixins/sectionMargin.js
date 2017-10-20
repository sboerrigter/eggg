import variables from '../variables'

export default (margin = 40) => `
  display: block;
  margin: 0 0 ${margin}px;

  @media (min-width: ${variables.breakpoints.medium}) {
    margin 0 0 ${margin * 2}px;
  }

  @media (min-width: ${variables.breakpoints.large}) {
    margin 0 0 ${margin * 3};
  }
`
