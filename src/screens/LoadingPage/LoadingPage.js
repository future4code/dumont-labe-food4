import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/white-logo.svg'
  
const LoadingContainer=styled.div`
  width: 360px;
  height: 640px;
  padding: 288px 117px 287px;
  background-color: #000000;
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