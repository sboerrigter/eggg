import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <h1>How would you like your eggs<span className="text-light">?</span></h1>

        <h2>Soft boiled<span className="text-light">.</span></h2>
        <p>03 Minutes</p>

        <h2>Medium boiled<span className="text-light">.</span></h2>
        <p>04 Minutes</p>

        <h2>Hard boiled<span className="text-light">.</span></h2>
        <p>06 Minutes</p>
      </div>
    );
  }
}
