import React, { Component } from 'react';
import styled from 'styled-components';
import '../styles/App.css';

// NavBar Component Styling:
const Div = styled.div`
  display: flex;
  justify-content: center;
`

const Nav = styled.nav`
  width: 100%;
  display: flex;
  background-color: grey;
  justify-content: center;
`


export default class NavBar extends Component {
  render() {
    return (
      <Div>
        <Nav>
          <h1>Play What?!</h1>
        </Nav>
      </Div>
    );
  }
}
