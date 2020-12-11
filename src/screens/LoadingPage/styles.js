import styled from 'styled-components'

export const LoadingContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  img{
    width: 126px;
    height: 65px;
    object-fit: contain;
  }
`

export const AllLoadingContainer = styled.div`
  display:flex;
  justify-content:center;
`