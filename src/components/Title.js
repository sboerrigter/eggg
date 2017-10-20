import React, { Component } from 'react';
import styled from 'styled-components';

import TextLight from './TextLight';

const Container = styled.div`
  margin 0 0 40px;
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
