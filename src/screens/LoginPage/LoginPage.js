import React, { useState } from 'react'
import { TextField, Button, Typography, OutlinedInput, InputAdornment, IconButton, FormControl, InputLabel } from '@material-ui/core'
import { LoginContainer, FormContainer, Logo } from './styles'
import logo from '../../assets/black-logo.svg'
import { useForm } from '../../hooks/useForm'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const LoginPage = () => {
  const { form, onChange, reset } = useForm({ email: "", password: "" })
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  return (
    <LoginContainer>
      <Logo src={logo} />
      <Typography variant="h6" align="center">Entrar</Typography>
      <FormContainer>
        <TextField name="email" value={form.email} onChange={onChange} type="email" label="Email" placeholder="email@email.com" required variant="outlined" />

        <FormControl variant="outlined">
        <InputLabel required>Senha</InputLabel>
        <OutlinedInput
        type={passwordVisibility ? 'text' : 'password'}
        value={form.password}
        name="password" label="Senha" placeholder="Mínimo 6 caracteres" required
        onChange={onChange} inputProps={{ pattern: "[0-9a-zA-Z]{6,}" }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handlePasswordVisibility}
              edge="end"
            >
              {passwordVisibility ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        } />
        </FormControl>
        <Button type="submit" color="primary" variant="contained">LOGAR</Button>
      </FormContainer>

    </LoginContainer>
  )
}

export default LoginPage;