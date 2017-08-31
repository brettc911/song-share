import React, { Component } from 'react';
import styled from 'styled-components';
import '../styles/App.css';

// Styling:
const Div = styled.div`
  height: 300px;
  width: 50%;
  background-color: #789894;
`
const Div_item = styled.div`
  background-color: pink;
  width: 40%;
`
const Li = styled.li`
  list-style: none;
`

const H1 = styled.h1`
font-size: 12px;

`
const Span = styled.span`

`
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
`

export default class PlayList extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let songs = this.props.items.map(item => {

      return(

        <Li key={item._id}>
          <Div_item>
            <H1>User: <Span>{item.userName}</Span></H1>
            <H1>Artist: <Span>{item.songArtist}</Span></H1>
            <H1>Title: <Span>{item.songTitle}</Span></H1>
            <H1>Notes: <Span>{item.songNotes}</Span></H1>
          </Div_item>
        </Li>
      )
    })

    return (
      <Ul>
        {songs}
      </Ul>
    );
  }
}
