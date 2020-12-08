import React from 'react'
import { Typography } from '@material-ui/core'
import { ErrorContainer } from './styles'

const ErrorPage = () => {
  return (
    <div>
      <div>
        app bar
      </div>
      <ErrorContainer>
        <Typography align="center" variant="h4">Ops! Página não encontrada :(</Typography>
      </ErrorContainer>
    </div>
  )
}

export default ErrorPage;