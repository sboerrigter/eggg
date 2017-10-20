import variables from '../variables'

export default (margin = 40) => `
  display: block;
  margin-bottom: ${margin}px;

  @media (min-width: ${variables.breakpoints.medium}) {
    margin-bottom: ${margin * 1.5}px;
  }

  @media (min-width: ${variables.breakpoints.large}) {
    margin-bottom: ${margin * 2}px;
  }
`
