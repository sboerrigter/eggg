import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <h1>How would you like your eggs<span className="text-light">?</span></h1>

        <h2>Soft boiled<span className="text-light">.</span></h2>

        <h2>Medium boiled<span className="text-light">.</span></h2>

        <h2>Hard boiled<span className="text-light">.</span></h2>
      </div>
    );
  }
}
