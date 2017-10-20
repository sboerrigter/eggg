import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

const Container = styled.div`
  color: white;
  font-family: 'Khula', sans-serif;
  font-size: 1em;
  font-weight: 600;
  height: 100%;
  line-height: 1.5em;
  padding: 30px;
  word-wrap: break-word;
  width: 100%;
`

export default class App extends Component {
  render() {
    return (
      <Container>
        <header>
          <Logo />
        </header>

        <main>
          <Menu />
        </main>
      </Container>
    );
  }
}
