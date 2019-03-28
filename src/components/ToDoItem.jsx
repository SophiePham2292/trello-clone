import React from "react"
import styled from "styled-components"

const item = props => {
    const { title } = props;

    return (
        <$Li>{title}</$Li>
    )
}

export default item

const $Li = styled.li`
    list-style: none;
    background: white;
    border-radius: 3px;
    box-shadow: 0 2px 2px #333;
    height: 36px;
    margin-bottom: 8px;
    line-height: 36px;
    padding: 0 8px;
`