import React, { Component } from 'react';

import MenuItem from './MenuItem';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <MenuItem type="Soft" time="03" />
        <MenuItem type="Medium" time="04" />
        <MenuItem type="Hard" time="06" />
      </div>
    );
  }
}
