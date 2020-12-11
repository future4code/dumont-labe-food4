import styled from "styled-components";

export const AllFeed = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;

export const FeedContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  margin-bottom: 72px;
`;

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
