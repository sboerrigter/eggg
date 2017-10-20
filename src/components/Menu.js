import React, { Component } from 'react';

import MenuItem from './MenuItem';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <MenuItem color="red" type="Soft" time="03" />
        <MenuItem color="yellow" type="Medium" time="04" />
        <MenuItem color="green" type="Hard" time="06" />
      </div>
    );
  }
}
