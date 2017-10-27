import React, { Component } from 'react'
import styled from 'styled-components'

import TextLight from './TextLight'

const Container = styled.span`
  cursor: pointer;
  font-size: 1.5em;
  font-weight: 800;
`;

export default class Logo extends Component {
  render() {
    return (
      <Container onClick={() => this.props.showMenu()}>
        Eggg<TextLight>.io</TextLight>
      </Container>
    );
  }
}
