import React, { Component } from 'react';
import styled from 'styled-components';
import variables from '../styles/variables'

const Container = styled.span`
  color: ${variables.colors.grey50};
`

export default class TextLight extends Component {
  render() {
    return (
      <Container>
        {this.props.content}
      </Container>
    );
  }
}
