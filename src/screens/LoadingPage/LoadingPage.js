import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/white-logo.svg'
  
const LoadingContainer=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width: 360px;
  height: 640px;
  
  
  background-color: #000000;
  img{
    width: 126px;
    height: 65px;
    object-fit: contain;
  }
`

const AllLoadingContainer=styled.div`
  display:flex;
  justify-content:center;
`

const LoadingPage = () => {
  return (
    <AllLoadingContainer>
      <LoadingContainer>
        <img src={logo} alt={"logo do Future Eats"}/>
      </LoadingContainer>
    </AllLoadingContainer>
  )
}

export default LoadingPage;