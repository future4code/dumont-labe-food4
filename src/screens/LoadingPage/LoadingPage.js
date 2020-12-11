import React, { useEffect } from 'react'
import logo from '../../assets/white-logo.svg'
import { useHistory } from 'react-router-dom'
import { goToLogin, goToFeed } from '../../router/coordinator'
import {LoadingContainer, AllLoadingContainer} from './styles'


const LoadingPage = () => {
  const history = useHistory()
  const token = window.localStorage.getItem("token")

  useEffect(() => {
    setTimeout(redirection, 3000)
  }, [])

  const redirection = () => {
    if (token) { goToFeed(history) } else { goToLogin(history) }
  }


  return (
    <AllLoadingContainer>
      <LoadingContainer>
        <img src={logo} alt={"logo do Future Eats"} />
      </LoadingContainer>
    </AllLoadingContainer>
  )
}

export default LoadingPage;