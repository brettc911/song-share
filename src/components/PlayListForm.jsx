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

    let this.fetchData = this.fetchData.bind(this)

  }

  fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }

  render() {
    return (
      <Div>
        <Form>
          <Label>Username:</Label>
          <Input type="text" value="" placeholder="Username" />
          <Label>Artist:</Label>
          <Input type="text" value="" placeholder="Artist" />
          <Label>Song Title:</Label>
          <Input type="text" value="" placeholder="Song Title" />
          <Label>Notes about Song:</Label>
          <Input type="text" value="" placeholder="Notes" />
          <Button onClick={this.fetchData}>Submit</Button>
        </Form>
      </Div>
    );
  }
}
