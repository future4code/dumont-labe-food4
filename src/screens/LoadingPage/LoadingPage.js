import React, { useEffect } from 'react'
import styled from 'styled-components'
import logo from '../../assets/white-logo.svg'
import {useHistory} from 'react-router-dom'
import {goToLogin, goToFeed} from '../../router/coordinator'
  
const LoadingContainer=styled.div`
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

const AllLoadingContainer=styled.div`
  display:flex;
  justify-content:center;
`

const LoadingPage = () => {
  const history = useHistory()
  const token = window.localStorage.getItem("token")

  useEffect(()=>{
    setTimeout(redirection, 3000)
  },[])

  const redirection = () => {
    if(token) { goToFeed(history) } else { goToLogin(history) }
  }


  return (
    <AllLoadingContainer>
      <LoadingContainer>
        <img src={logo} alt={"logo do Future Eats"}/>
      </LoadingContainer>
    </AllLoadingContainer>
  )
}

export default LoadingPage;