import React from 'react';
import LeftArrow from '../img/LeftArrow.png'
import RightArrow from '../img/RightArrow.png'
import styled from "styled-components"

const ArrowType = styled.img`
    position: absolute;
    width: 30px;
    bottom: 50%;
    ${props => props.direction}: 25px;
    float: ${props => props.direction};
`

const Arrow = ({direction, clickAction}) => {
    const source = direction == 'left' ? LeftArrow : RightArrow;
    return(<div><ArrowType direction={direction} src={source} onClick={clickAction}/></div>)
}

export default Arrow