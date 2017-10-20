import React, { Component } from 'react'
import styled from 'styled-components'
import variables from '../styles/variables'
import sectionMargin from '../styles/mixins/sectionMargin'

import TextLight from './TextLight';

const Title = styled.div`
  ${sectionMargin()};
`;

const Circle = styled.div`
  ${sectionMargin()};
  align-items: center;
  border: 0.5em solid ${variables.colors.grey25};
  border-right 0.5em solid ${variables.colors.red};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 240px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-align: center;
  width: 240px;

  @media (min-width: ${variables.breakpoints.medium}) {
    height: 360px;
    width: 360px;
  }

  @media (min-width: ${variables.breakpoints.large}) {
    height: 480px;
    width: 480px;
  }
`;

const Time = styled.div`
  color: ${variables.colors.red};
  font-size: 2.5em;
  font-weight: 800;
  height: auto;
`;

export default class Timer extends Component {
  render() {
    return (
      <div>
        <Title>
          <h2>{this.props.timer.name}<TextLight>.</TextLight></h2>
          <p>{this.props.timer.time} Minutes</p>
       </Title>

       <Circle>
         <Time>Start</Time>
         <p>{this.props.timer.time} Minutes</p>
       </Circle>
     </div>
    );
  }
}
