import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Container = styled.div`
  font-family: 'Khula', sans-serif;
  font-size: 24px;
  font-weight: 800;
`

export default class Logo extends Component {
  render() {
    return (
      <Container>
        Eggg<span className="text-light">.io</span>
      </Container>
    );
  }
}
