import React, { Component } from 'react'
import styled from 'styled-components'
import variables from '../styles/variables'
import sectionMargin from '../styles/mixins/sectionMargin'

import Logo from './Logo'
import Menu from './Menu'
import Timer from './Timer'

const Container = styled.div`
  color: ${variables.colors.white};
  font-family: 'Khula', sans-serif;
  font-size: 1em;
  font-weight: 600;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 840px;
  padding: 30px;

  @media (min-width: ${variables.breakpoints.medium}) {
    font-size: 1.5em;
    padding: 40px;
  }

  @media (min-width: ${variables.breakpoints.large}) {
    font-size: 2em;
    padding: 60px;
  }
`;

const Header = styled.div`
  ${sectionMargin()}
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: false,
    };
  }

  showTimer(item) {
    this.setState({
      timer: {
        key: 'medium',
        color: 'yellow',
        name: 'Medium boiled',
        time: 60,
      }
    });
  }

  render() {
    let menu = null;
    let timer = false;
    let tips = false;

    if (this.state.timer) {
      timer = <Timer timer={this.state.timer} />;
    } else {
      menu = <Menu showTimer={(item) => this.showTimer()} />;
    }

    return (
      <Container>
        <Header>
          <Logo />
        </Header>

        <main>
          {menu}
          {timer}
        </main>
      </Container>
    );
  }
}
