import React from 'react'
import { Typography } from '@material-ui/core'
import { ErrorContainer } from './styles'
import NavBar from '../../components/NavBar/NavBar'

const ErrorPage = () => {
  return (
    <div>
      <NavBar />
      <ErrorContainer>
        <Typography align="center" variant="h4">Ops! Página não encontrada :(</Typography>
      </ErrorContainer>
    </div>
  )
}

export default ErrorPage;