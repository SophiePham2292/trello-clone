import React, { Component } from 'react'
import styled from "styled-components"
import ToDoItem from "./ToDoItem"

export default class ToDoCard extends Component {

    render() {
        const { title, toDoItems } = this.props;
        if (!toDoItems) return null;
        console.log("items", toDoItems)
        return (
            <$Wrapper>
                <$Header>{title}</$Header>
                {toDoItems.map(item => {
                    return <ToDoItem
                        key={item.title}
                        title={item.title} />
                })}
                <$AddMoreItemButton>+ Add more items</$AddMoreItemButton>
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
    padding: 12px 8px 0 8px;
    overflow: hidden;
`
const $Header = styled.header`
    padding: 4px 8px;
    margin-bottom: 12px;
`

const $AddMoreItemButton = styled.div`
    padding: 10px;
    cursor: pointer;
    color: #888;
    margin-left: -8px;
    margin-right: -8px;
    &:hover {
        text-decoration: underlined;
        color: #333;
        background: #ccc;
    }
`