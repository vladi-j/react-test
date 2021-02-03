import React from 'react'
import styled from "styled-components"

const SlideDiv = styled.div`
    width: 100%;
    height: auto;
`

const Slide = ({content}) => (
    <SlideDiv>
        {content}
    </SlideDiv>
)

export default Slide