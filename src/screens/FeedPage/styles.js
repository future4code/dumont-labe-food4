import styled from 'styled-components'

export const AllFeed = styled.div`
   display: flex;
    flex-direction: column;
    align-items:center;
`

export const FeedContainer = styled.div`
  
    width: 360px;
    height: 640;
   
    margin-left: 8px;
    
`

export const CarouselContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    overflow:scroll;
    ::-webkit-scrollbar {
    width: 0px; 
    background: transparent; 
}
`
export const Carousel = styled.h4`
    padding: 0px 18px;
    :hover{cursor:pointer}
`