import React, { Component } from 'react';
import styled from 'styled-components';
import sectionMargin from '../styles/mixins/sectionMargin'

import TextLight from './TextLight';

const Title = styled.h1`
  ${sectionMargin(60)};
`

const MenuItem = styled.a`
  ${sectionMargin(30)};
`

export default class Menu extends Component {
  render() {
    const items = [
      {
        key: 'soft',
        color: 'red',
        name: 'Soft boiled',
        time: '03'
      },
      {
        key: 'medium',
        color: 'yellow',
        name: 'Medium boiled',
        time: '04'
      },
      {
        key: 'hard',
        color: 'green',
        name: 'Hard boiled',
        time: '06'
      }
    ]

    const menuItems = items.map((item) =>
      <MenuItem className={item.color} key={item.key} onClick={() => this.props.showTimer()}>
        <h2>{item.name}<TextLight content='.' /></h2>
        <p>{item.time} Minutes</p>
     </MenuItem>
    );

    return (
      <div>
        <Title>
          How would you like your eggs<TextLight content='?' />
        </Title>

        {menuItems}
      </div>
    );
  }
}
