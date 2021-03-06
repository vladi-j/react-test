import React from 'react';
import styled from "styled-components"

const DotContainer = styled.div`
    margin-top:10px;
`

const Dots = styled.li`
    width: 100%;
    bottom: 9px;
    height: 11px;
    display: block;
    text-align: center;
    top: -5px;
    margin: 0 4px;
    position: relative;
    border-radius: 100%;
`

const Dot = styled.label`
    top: -5px;
    width: 11px;
    height: 11px;
    margin: 0 4px;
    position: relative;
    border-radius: 100%;
    display: inline-block;
    background-color: rgba(100, 100, 100, 0.6);
`

const ActiveDot = styled.label`
    top: -5px;
    width: 11px;
    height: 11px;
    margin: 0 4px;
    position: relative;
    border-radius: 100%;
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.6);
`

const SliderDots = ({sliderContent, clickAction, activeSlide}) =>{

    const changeSlide = e =>(
        clickAction(e.target.id)
    )
    
    return(
        <DotContainer>
            <Dots>
                {sliderContent.map((slide, index) =>
                    index == activeSlide ?
                    <ActiveDot id={index} key={index} onClick={changeSlide}/>:
                    <Dot id={index} key={index} onClick={changeSlide}/>
                )}
            </Dots>
        </DotContainer>
    )
}

export default SliderDots