import styled from "styled-components"

const SliderContent = styled.div.attrs(({translate, transition, width}) => ({
    style: {
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
        width: `${width}px`,
    },
}))`height: 100%;
    display: flex;
    overflow-x: visible;
    transition-property: transform;
    will-change: transform;
`

export default SliderContent