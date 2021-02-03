import styled from "styled-components"

const SliderContent = styled.div.attrs(props => ({
    style: {
        transform: `translateX(-${props.translate}px)`,
        transition: `transform ease-out ${props.transition}s`,
        width: `${props.width}px`,
    },
}))`height: 100%;
    display: flex;
    overflow-x: visible;
    transition-property: transform;
    will-change: transform;
`

export default SliderContent