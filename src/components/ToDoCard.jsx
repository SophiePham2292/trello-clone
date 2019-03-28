import React, { Component } from 'react'
import styled from "styled-components"
import ToDoItem from "./ToDoItem"

export default class ToDoCard extends Component {
    render() {
        const { title } = this.props;
        return (
            <$Wrapper>
                <$Header>{title}</$Header>
                <ToDoItem title="Web API - Drag & Drop" />
                <ToDoItem title="Web API - History & Location" />
                <ToDoItem title="Web API - DOM" />
                <div>Add more items</div>
            </$Wrapper>
        )
    }
}

const $Wrapper = styled.div`
    width: 300px;
    background: #eee;
    margin-right: 24px;
    border-radius: 5px;
    box-shadow: 2px 3px 5px #333;
    padding: 12px 8px;
`
const $Header = styled.header`
    padding: 4px 8px;
    margin-bottom: 12px;
`