import React, { Component } from 'react';

import TextLight from './TextLight';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <h2>Soft boiled<TextLight content='.' /></h2>
        <p>03 Minutes</p>

        <h2>Medium boiled<TextLight content='.' /></h2>
        <p>04 Minutes</p>

        <h2>Hard boiled<TextLight content='.' /></h2>
        <p>06 Minutes</p>
      </div>
    );
  }
}
