import React, { Component } from 'react'
import styled from 'styled-components'
import Time from '../helpers/Time.js'
import sectionMargin from '../styles/mixins/sectionMargin'

import TextLight from './TextLight'

const Title = styled.h1`
  ${sectionMargin(60)};
`;

const MenuItem = styled.a`
  ${sectionMargin(30)};
`;

export default class Menu extends Component {
  render() {

    const items = [
      {
        key: 'soft',
        color: 'red',
        name: 'Soft boiled',
        time: 180
      },
      {
        key: 'medium',
        color: 'yellow',
        name: 'Medium boiled',
        time: 240
      },
      {
        key: 'hard',
        color: 'green',
        name: 'Hard boiled',
        time: 360
      }
    ]
    return (
      <div>
        <Title>
          How would you like your eggs<TextLight>?</TextLight>
        </Title>

        {items.map(item =>
          <MenuItem className={item.color} key={item.key} onClick={() => this.props.showTimer(item)}>
            <h2>{item.name}<TextLight>.</TextLight></h2>
            <p>{Time.minutes(item.time)} Minutes</p>
         </MenuItem>
        )}
      </div>
    );
  }
}
