import React, { Component } from 'react'
import styled from 'styled-components'
import variables from '../styles/variables'

const Container = styled.svg`
  cursor: pointer;
  fill: ${variables.colors.white};
  height: 25px;
  width: 20px;
  transition: fill 0.25s;

  @media (min-width: ${variables.breakpoints.medium}) {
    height: 37.5px;
    width: 30px;
  }

  @media (min-width: ${variables.breakpoints.large}) {
    height: 50px;
    width: 40px;
  }

  &:hover {
    fill: ${variables.colors.grey50};
  }
`;

export default class Logo extends Component {
  render() {
    return (
      <Container viewBox="0 0 20 25" xmlns="http://www.w3.org/2000/svg" onClick={() => this.props.showMenu()}>
        <path d="M2 6l6-6 1.414 1.414L5.828 5h4.237C15.554 5.035 20 9.502 20 15c0 5.519-4.481 10-10 10S0 20.519 0 15h2c0 4.415 3.585 8 8 8s8-3.585 8-8-3.585-8-8-8H5.828l3.586 3.586L8 12 2 6z"/>
      </Container>
    );
  }
}
