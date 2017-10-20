import variables from '../variables'

export default `
  margin: 0 0 40px;

  @media (min-width: ${variables.breakpoints.medium}) {
    margin 0 0 60px;
  }

  @media (min-width: ${variables.breakpoints.large}) {
    margin 0 0 100px;
  }
`
