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

export default class PlayList extends Component {
  constructor(props){
    super(props)

    this.addToList = this.addToList.bind(this)

    this.state = {
      songs: [],
    }
  }

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
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
        <PlayListItem items={this.state.songs} />
      </Div>
    );
  }
}
