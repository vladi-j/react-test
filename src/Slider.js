import React, {useState} from 'react'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import styled from "styled-components"
import AnyHTML from './AnyHTML'
import SliderDots from './SliderDots'

const sliderW =  window.innerWidth/1.5;

const SliderDiv = styled.div`
    position: relative;
    overflow: hidden;
    margin: auto;
    width:${sliderW}px;
    height: auto;
`

function Slider(){

    const [state, setState] = useState({
        touchStartX: 0,
        beingTouched: false,
        activeIndex: 0,
        location: 0,
        transition: 0
    })

    let content = [
                    <AnyHTML content={<img width={sliderW} src='https://cdn.pixabay.com/photo/2020/09/29/23/38/team-5614157_1280.png'></img>}/>,
                    <AnyHTML content={<h1 width={sliderW}>Hello World!</h1>}/>,
                    <AnyHTML content={<img width={sliderW} src='https://cdn.pixabay.com/photo/2021/01/27/13/47/cliff-5954980_1280.jpg'></img>}/>,
                    <AnyHTML content={
                    <table width={sliderW}>
                        <tbody>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                            </tr>
                            <tr>
                                <td>Peter</td>
                                <td>Griffin</td>
                            </tr>
                            <tr>
                                <td>Lois</td>
                                <td>Griffin</td>
                            </tr>
                        </tbody>
                    </table>}/>,
                    <AnyHTML content={<img width={sliderW} src='https://cdn.pixabay.com/photo/2014/07/28/20/39/dusk-404072_1280.jpg'></img>}/>,
                    <AnyHTML content={<img width={sliderW} src='https://cdn.pixabay.com/photo/2021/01/21/14/10/egret-5937499_1280.jpg'></img>}/>
                  ]

    function handleEnd(){
        const slidePosition = state.location / sliderW;
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

    function handleMotionStart(clientX){
        setState({
            ...state,
            beingTouched: true,
            touchStartX: clientX
        })
    }

    function handleMovement(clientX){
        if(state.beingTouched === true){
            let difference = state.touchStartX - clientX;
            let newLocation = state.location + difference;

            if(newLocation > sliderW * (content.length - 1)){
                newLocation = sliderW * (content.length - 1);
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

    function handleMouseDown(mouseDownEvent){
        mouseDownEvent.preventDefault();
        handleMotionStart(mouseDownEvent.clientX);
    }

    function handleMouseMove(mouseMoveEvent) {
        handleMovement(mouseMoveEvent.clientX);
    }

    function handleMouseUp() {
        handleEnd();
    }
      
    function handleMouseLeave() {
        handleEnd();
    }

    function handleTouchStart(touchStartEvent){
        handleMotionStart(touchStartEvent.targetTouches[0].clientX);
    }

    function handleTouchMove(touchMoveEvent){
        handleMovement(touchMoveEvent.targetTouches[0].clientX);
    }

    function switchTo(index){
        const newLocation = index * sliderW;
        setState({
            ...state,
            touchStartX: 0,
            beingTouched: false,
            activeIndex: index,
            location: newLocation,
            transition: 0.3
        });
    }

    function handleTouchEnd(){
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
            <SliderContent translate={state.location} transition={state.transition} width={sliderW * content.length}>
                {content.map((slide, index) =>
                <Slide key={index} content={slide} />
                )}
            </SliderContent>
            <Arrow direction="left" clickAction={slideLeft}/>
            <Arrow direction="right" clickAction={slideRight}/>
            <SliderDots sliderLength={content.length} clickAction={switchTo}/>
        </SliderDiv>
    )
}

export default Slider