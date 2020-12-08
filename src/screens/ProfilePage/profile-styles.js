import styled from 'styled-components'

export const FlexBox = styled.div`
    box-sizing: border-box;
    display: flex;
    padding: 16px;
    gap: 4px;
    flex-direction: column;
    align-items: flex-start;
    background-color:${props => props.greyBackground ? "#EEEEEE" : "#FFF" }
`

export const BaseContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-between;
    align-items: center;
`

export const Divisor = styled.hr`
    width: 100%;
    color: #000;
`