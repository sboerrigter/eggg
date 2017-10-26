import React, { Component } from 'react'
import styled from 'styled-components'
import variables from '../styles/variables'
import sectionMargin from '../styles/mixins/sectionMargin'

import TextLight from './TextLight';

const Title = styled.div`
  ${sectionMargin()};
`;

const Egg = styled.div`
  ${sectionMargin()};
  align-items: center;

  display: flex;
  flex-direction: column;
  height: 240px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  position: relative;
  text-align: center;


  @media (min-width: ${variables.breakpoints.medium}) {
    height: 360px;
  }

  @media (min-width: ${variables.breakpoints.large}) {
    height: 480px;
  }
`;

const Start = styled.a`
  color: ${variables.colors.red};
  font-size: 2.5em;
  font-weight: 800;
  height: auto;
  line-height: 1;
  margin: 0.5em 0 0;
  transition: transform 0.2s;
  z-index: 1;

  &:hover {
    color: ${variables.colors.red};
    transform: scale(1.1);
  }
`;

const Time = styled.div`
  color: ${variables.colors.white};
  font-size: 2.5em;
  font-weight: 800;
  height: auto;
  line-height: 1;
  margin: 0.5em 0 0;
`;

const Done = styled.div`
  color: ${variables.colors.green};
  font-size: 2.5em;
  font-weight: 800;
  height: auto;
  line-height: 1;
  margin: 0.5em 0 0;
`;

const Svg = styled.svg`
  position: absolute;
  height: 100%;
  padding: 0.5em;
  width: 100%;
  z-index: 0;
`;


const Progress = styled.path`
  animation: dash 10s linear forwards;
  fill: none;
  stroke-dasharray: 1000;
  stroke-width: 0.5rem;

  @keyframes dash {
    0% {
      stroke: ${variables.colors.red};
      stroke-dashoffset: 1000;
    }
    50% {
      stroke: ${variables.colors.yellow};
    }
    100% {
      stroke: ${variables.colors.green};
      stroke-dashoffset: 0;
    }
  }
`;

const Background = styled.path`
  fill: none;
  stroke: ${variables.colors.grey25};
  stroke-width: 0.5rem;
`;

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'start',
      time: 10,
    };
  }

  start() {
    this.setState({ view: 'running' });

    setInterval(() => {
      this.setState({ time: this.state.time - 1 });

      if (this.state.time < 1) {
        this.setState({ view: 'done' });
      }
    }, 1000);
  }

  render() {
    let title = null;
    let subtitle = false;

    if (this.state.view === 'start') {
      title = <Start onClick={() => this.start()}>Start</Start>;
      subtitle = <p>{this.props.timer.time} Minutes</p>;
    } else if (this.state.view === 'done') {
      title = <Done>Done</Done>;
      subtitle = <p>Enjoy your eggs!</p>;
    } else {
      title = <Time>{this.state.time}</Time>;
    }

    return (
      <div>
        <Title>
          <h2>{this.props.timer.name}<TextLight>.</TextLight></h2>
          <p>{this.props.timer.time} Minutes</p>
        </Title>

        <Egg>
          {title}
          {subtitle}

          <Svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg">
            <Background d="M120 0c60 0 120 90 120 170s-60 130-120 130S0 250 0 170 60 0 120 0z"/>
            <Progress d="M120 0c60 0 120 90 120 170s-60 130-120 130S0 250 0 170 60 0 120 0z"/>
          </Svg>
        </Egg>
      </div>
    );
  }
}
