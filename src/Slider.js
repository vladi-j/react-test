import React, {useState} from 'react'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import styled from "styled-components"
import SliderDots from './SliderDots'

const sliderWidth =  window.innerWidth/1.5;

const SliderDiv = styled.div`
    position: relative;
    overflow: hidden;
    margin: auto;
    width:${sliderWidth}px;
    height: auto;
`

const Slider = ({content}) =>{

    const [state, setState] = useState({
        touchStartX: 0,
        beingTouched: false,
        activeIndex: 0,
        location: 0,
        transition: 0
    })

    const handleEnd = () =>{
        const slidePosition = state.location / sliderWidth;
        const slideDecimal = slidePosition % 1;
        const slideIndex = slidePosition - slideDecimal;
        const swipedSlides = slideIndex - state.activeIndex;

        let nextIndex = slideIndex;

        if(swipedSlides >=0){
            if(slideDecimal >= 0.2){
                nextIndex++;
            }
        } else if (swipedSlides < 0){
            nextIndex = state.activeIndex + swipedSlides;
            if(slideDecimal > 0.9){
                nextIndex++;
            }
        }

        switchTo(nextIndex);
        
    }

    const handleMotionStart = (clientX) => {
        setState({
            ...state,
            beingTouched: true,
            touchStartX: clientX
        })
    }

    const handleMovement = (clientX) =>{
        if(state.beingTouched === true){
            let difference = state.touchStartX - clientX;
            let newLocation = state.location + difference;

            if(newLocation > sliderWidth * (content.length - 1)){
                newLocation = sliderWidth * (content.length - 1);
            } else if (newLocation < 0){
                newLocation = 0;
            }
            setState({
                ...state,
                location: newLocation,
                touchStartX: clientX
            })
        }
    }

    const handleMouseDown = (mouseDownEvent) =>{
        mouseDownEvent.preventDefault();
        handleMotionStart(mouseDownEvent.clientX);
    }

    const handleMouseMove = (mouseMoveEvent) =>{
        handleMovement(mouseMoveEvent.clientX);
    }

    const handleMouseUp = () =>{
        handleEnd();
    }
      
    const handleMouseLeave = () =>{
        handleEnd();
    }

    const handleTouchStart = (touchStartEvent) =>{
        handleMotionStart(touchStartEvent.targetTouches[0].clientX);
    }

    const handleTouchMove = (touchMoveEvent) =>{
        handleMovement(touchMoveEvent.targetTouches[0].clientX);
    }

    const switchTo = (index) =>{
        const newLocation = index * sliderWidth;
        setState({
            ...state,
            touchStartX: 0,
            beingTouched: false,
            activeIndex: index,
            location: newLocation,
            transition: 0.3
        });
    }

    const handleTouchEnd = () =>{
        handleEnd();
    }

    const slideLeft = () => {
        if(state.activeIndex - 1 >= 0){
            switchTo(state.activeIndex - 1)
        }
    }

    const slideRight = () => {
        if(state.activeIndex + 1 < content.length){
            switchTo(state.activeIndex + 1)
        }
    }

    return(
        <SliderDiv 
            onMouseDown={mouseDownEvent => handleMouseDown(mouseDownEvent)}
            onMouseMove={mouseMoveEvent => handleMouseMove(mouseMoveEvent)}
            onMouseUp={() => handleMouseUp()}
            onMouseLeave={() => handleMouseLeave()}

            onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
            onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
            onTouchEnd={() => handleTouchEnd()}
        >
            <SliderContent translate={state.location} transition={state.transition} width={sliderWidth * content.length}>
                <Slide slideContent={content}/>
            </SliderContent>
            <Arrow direction="left" clickAction={slideLeft}/>
            <Arrow direction="right" clickAction={slideRight}/>
            <SliderDots sliderContent={content} clickAction={switchTo} activeSlide={state.activeIndex}/>
        </SliderDiv>
    )
}

export default Slider