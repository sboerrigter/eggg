import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Menu from './Menu';
import Title from './Title';

const Header = styled.div`
  margin 0 0 40px;
`

export default class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Logo />
        </Header>

        <main>
          <Title />
          <Menu />
        </main>
      </div>
    );
  }
}
