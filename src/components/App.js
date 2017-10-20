import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Logo />
        </header>

        <main>
          <Menu />
        </main>
      </div>
    );
  }
}
