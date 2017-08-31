import React, { Component } from 'react';
import styled from 'styled-components';
import '../styles/App.css';

// Components:
import NavBar from './NavBar'
import PlayListForm from './PlayListForm'
import PlayList from './PlayList'

// NavBar Component Styling:
const Content = styled.div`
  display: flex;
  flex-flow: flex-wrap
`


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Content>
          <PlayListForm/>
          <PlayList/>
        </Content>
      </div>
    );
  }
}

export default App;
