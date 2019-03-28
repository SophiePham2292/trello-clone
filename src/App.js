import React, { Component } from 'react';
import ToDoCard from "./components/ToDoCard"
import styled from "styled-components";
import cardData from "./data/cardData"

class App extends Component {
  state = {
    cardData: null
  }
  componentDidMount() {
    if (!this.state.cardData) {
      this.setState({
        cardData: cardData
      })
    }
  }
  render() {
    const { cardData } = this.state;
    if (!cardData) return null;

    let cardDisplayItems = [];
    for (let cardKey in cardData) {
      cardDisplayItems.push(<ToDoCard
        key={cardKey}
        title={cardKey}
        toDoItems={cardData[cardKey]}
      />)
    }

    return (
      <$Wrapper >
        {cardDisplayItems}
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