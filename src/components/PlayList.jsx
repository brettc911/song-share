import React, { Component } from 'react';
import styled from 'styled-components';
import '../styles/App.css';

// Import Components
import PlayListItem from './PlayListItem'

// Styling:
const Div = styled.div`
  height: 300px;
  width: 50%;
  background-color: #789894;
`
const Button = styled.button`

`

export default class PlayList extends Component {
  constructor(props){
    super(props)

    this.fetchData = this.fetchData.bind(this)

    this.state = {
      songs: [],
    }
  }

  fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }


  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    })
  }


  render() {
    return (
      <Div>
        <Button onClick={this.fetchData}>Refresh</Button>
        <PlayListItem items={this.state.songs} />
      </Div>
    );
  }
}
