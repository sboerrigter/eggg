import React, { Component } from 'react'
import styled from 'styled-components'
import Time from '../helpers/Time.js'
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
  height: 300px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  position: relative;
  text-align: center;


  @media (min-width: ${variables.breakpoints.medium}) {
    height: 420px;
  }

  @media (min-width: ${variables.breakpoints.large}) {
    height: 540px;
  }
`;

const Start = styled.a`
  color: ${variables.colors.red};
  font-size: 3em;
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

const TimeRemaining = styled.div`
  color: ${variables.colors.white};
  font-size: 3em;
  font-weight: 800;
  height: auto;
  line-height: 1;
  margin: 0.5em 0 0;
`;

const Done = styled.div`
  color: ${variables.colors.green};
  font-size: 3em;
  font-weight: 800;
  height: auto;
  line-height: 1;
  margin: 0.5em 0 0;
`;

const Svg = styled.svg`
  position: absolute;
  height: 100%;
  padding: 1em;
  width: 100%;
  z-index: 0;
`;


const Progress = styled.path`
  animation: dash ${props => props.time}s linear forwards;
  fill: none;
  stroke-dasharray: 850;
  stroke-width: 0.5rem;

  @keyframes dash {
    0% {
      stroke: ${variables.colors.red};
      stroke-dashoffset: 850;
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

const Tips = styled.p`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;

  @media (min-width: ${variables.breakpoints.medium}) {
    max-width: 480px;
  }

  @media (min-width: ${variables.breakpoints.large}) {
    max-width: 640px;
  }
`;

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'start',
      totalTime: this.props.settings.time,
      time: this.props.settings.time,
    };
  }

  start() {
    this.setState({ view: 'running' });

    setInterval(() => {
      const time = this.state.time - 1;

      this.setState({
        time: time,
      });

      if (this.state.time < 1) {
        this.setState({ view: 'done' });
      }
    }, 1000);
  }

  render() {
    let title = null;
    let subtitle = null;
    let tips = null;
    let background = <Background d="M120 0c60 0 120 90 120 170s-60 130-120 130S0 250 0 170 60 0 120 0z"/>;
    let progress = <Progress time={this.state.totalTime} d="M120 0c60 0 120 90 120 170s-60 130-120 130S0 250 0 170 60 0 120 0z"/>;

    if (this.state.view === 'running') {
      title = <TimeRemaining>{Time.format(this.state.time)}</TimeRemaining>;
      tips = <Tips>Did you know that fresh eggs sink and spoiled eggs float?</Tips>;
    } else if (this.state.view === 'done') {
      title = <Done>Done</Done>;
      subtitle = <p>Enjoy your eggs!</p>;
      tips = <Tips>Rinse your eggs 10 seconds with cold water for the best result</Tips>;
    } else {
      title = <Start onClick={() => this.start()}>Start</Start>;
      subtitle = <p>{Time.minutes(this.state.totalTime)} Minutes</p>;
      progress = null;
      tips = <Tips><a onClick={() => this.props.showMenu()}>Change cooking time</a></Tips>;
    }

    return (
      <div>
        <Title>
          <h2>{this.props.settings.name}<TextLight>.</TextLight></h2>
          <p>{Time.minutes(this.state.totalTime)} Minutes</p>
        </Title>

        <Egg>
          {title}
          {subtitle}

          <Svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg">
            {background}
            {progress}
          </Svg>
        </Egg>

        {tips}
      </div>
    );
  }
}
