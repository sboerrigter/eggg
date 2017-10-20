import React, { Component } from 'react'
import styled from 'styled-components'
import sectionMargin from '../styles/mixins/sectionMargin'

const Container = styled.div`
  ${sectionMargin()};
`;

export default class Timer extends Component {
  render() {
    return (
      <Container>
        [timer]
      </Container>
    );
  }
}
