import React, { Component } from 'react';

import MenuItem from './MenuItem';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <MenuItem showTimer={() => this.props.showTimer()} color="red" type="Soft" time="03" />
        <MenuItem showTimer={() => this.props.showTimer()} color="yellow" type="Medium" time="04" />
        <MenuItem showTimer={() => this.props.showTimer()} color="green" type="Hard" time="06" />
      </div>
    );
  }
}
