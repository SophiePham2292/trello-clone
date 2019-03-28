import React, { Component } from 'react';
import ToDoCard from "./components/ToDoCard"
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <$Wrapper >
        <ToDoCard title="To Do"></ToDoCard>
        <ToDoCard title="Done"></ToDoCard>
      </$Wrapper>
    );
  }
}

export default App;

const $Wrapper = styled.div`
  display: flex;
  padding: 24px;
  border: 1px solid #333;
  background: #777;
`