import React, { Component } from 'react'
import styled from 'styled-components'
import variables from '../styles/variables'
import sectionMargin from '../styles/mixins/sectionMargin'

import Logo from './Logo'
import Menu from './Menu'
import Restart from './Restart'
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
  display: flex;
  justify-content: space-between;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'menu',
    };
  }

  showTimer(timerSettings) {
    this.setState({
      view: 'timer',
      timerSettings: timerSettings
    });
  }

  showMenu() {
    this.setState({
      view: 'menu',
    });
  }

  render() {
    let menu = null;
    let timer = null;
    let restart = null;

    if (this.state.view === 'menu') {
      menu = <Menu showTimer={(timerSettings) => this.showTimer(timerSettings)} />;
    } else {
      timer = <Timer settings={this.state.timerSettings} showMenu={() => this.showMenu()} />;
      restart = <Restart showMenu={() => this.showMenu()} />;
    }

    return (
      <Container>
        <Header>
          <Logo />
          {restart}
        </Header>

        <main>
          {menu}
          {timer}
        </main>
      </Container>
    );
  }
}
