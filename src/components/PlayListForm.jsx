import React, { Component } from 'react';
import styled from 'styled-components';
import '../styles/App.css';

// NavBar Component Styling:
const Div = styled.div`
  height: 300px;
  width: 50%;
  background-color: #789894;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`
const Label = styled.label`

`
const Input = styled.input`
  width: 50%;
`
const Button = styled.button`
  background-color: white;
  color: black;
`


export default class NavBar extends Component {
  constructor(props){
    super(props)

    this.addToList = this.addToList.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSongChange = this.handleSongChange.bind(this)
    this.handleArtistChange = this.handleArtistChange.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)

    this.state = {
      userName: '',
      songTitle: '',
      songArtist: '',
      songNotes: ''
    }

  }

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);
      console.log(listItem);

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

  handleNameChange = (e) => {
    this.setState({userName: e.target.value})
  }
  handleSongChange = (e) => {
    this.setState({songTitle: e.target.value})
  }
  handleArtistChange = (e) => {
    this.setState({songArtist: e.target.value})
  }
  handleNotesChange = (e) => {
    this.setState({songNotes: e.target.value})
  }


  render() {
    return (
      <Div>
        <Form onSubmit={this.addToList}>
          <Label>Username:</Label>
          <Input type="text" onChange={this.handleNameChange} value={this.state.userName} placeholder="Username" />
          <Label>Artist:</Label>
          <Input type="text" onChange={this.handleArtistChange} value={this.state.songArtist} placeholder="Artist" />
          <Label>Song Title:</Label>
          <Input type="text" onChange={this.handleSongChange} value={this.state.songTitle} placeholder="Song Title" />
          <Label>Notes about Song:</Label>
          <Input type="text" onChange={this.handleNotesChange} value={this.state.songNotes} placeholder="Notes" />
          <Button>Submit</Button>
        </Form>
      </Div>
    );
  }
}
