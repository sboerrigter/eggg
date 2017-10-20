import React, { Component } from 'react';
import styled from 'styled-components';
import sectionMargin from '../styles/mixins/sectionMargin'

import TextLight from './TextLight';

const Container = styled.a`
  ${sectionMargin(30)};
`

export default class MenuItem extends Component {
  render() {
    return (
      <Container>
        <h2>{this.props.type} boiled<TextLight content='.' /></h2>
        <p>{this.props.time} Minutes</p>
      </Container>
    );
  }
}
