import React from 'react';
import LeftArrow from '../img/LeftArrow.png'
import RightArrow from '../img/RightArrow.png'
import styled from "styled-components"

const ArrowType = styled.img`
    position: absolute;
    width: 30px;
    top: 50%;
    ${props => props.direction}: 25px;
    float: ${props => props.direction};
`

function Arrow(props){
    const source = props.direction == 'left' ? LeftArrow : RightArrow;
    return(<div><ArrowType direction={props.direction} src={source} onClick={props.clickAction}/></div>)
}

export default Arrow