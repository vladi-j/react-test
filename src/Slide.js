import React from 'react'
import styled from "styled-components"

const SlideDiv = styled.div`
    width: 100%;
    height: auto;
`

const Slide = ({slideContent}) => (
    slideContent.map((slide, index) =>
        <SlideDiv key={index}>
            {slide.content}
        </SlideDiv>
    )
)

export default Slide