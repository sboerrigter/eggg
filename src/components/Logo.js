import React, { Component } from 'react'
import styled from 'styled-components'

import TextLight from './TextLight'

const Container = styled.div`
  font-size: 1.5em;
  font-weight: 800;
`;

export default class Logo extends Component {
  render() {
    return (
      <Container>
        Eggg<TextLight>.io</TextLight>
      </Container>
    );
  }
}
