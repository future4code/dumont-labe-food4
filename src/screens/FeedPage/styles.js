import styled from "styled-components";
import { OutlinedInput } from '@material-ui/core'

export const AllFeed = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 0 16px;
`

export const FeedContainer = styled.div`
  width: 100%;
  display:flex;
  gap: 16px;
  flex-direction:column;
  padding-bottom: 3em;
  margin: ${props => props.searchScreen ? "16px 0" : "0 0 16px 0"};
`

export const StyledOutlinedInput = styled(OutlinedInput)`
  width: 80vw;
  max-width: 400px;
  min-width: 300px;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const CarouselContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;
export const Carousel = styled.p`
  padding: 0px 18px;
  &:hover {
    cursor: pointer;
    color: #5cb646;
  }
`;