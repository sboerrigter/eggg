import React, { Component } from 'react';
import styled from 'styled-components';
import sectionMargin from '../styles/mixins/sectionMargin'

import TextLight from './TextLight';

const Container = styled.div`
  ${sectionMargin(60)};
`

export default class Title extends Component {
  render() {
    return (
      <Container>
        <h1>How would you like your eggs<TextLight content='?' /></h1>
      </Container>
    );
  }
}
