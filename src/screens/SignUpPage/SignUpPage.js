import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { TextField, Button, InputLabel, FormControl, Typography } from '@material-ui/core';
import { useForm } from '../../hooks/useForm';
import { FlexForm } from './styles';
import { LoginContainer, FormContainer, Logo } from '../LoginPage/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { signUp } from '../../services/user'
import logo from '../../assets/black-logo.svg'

const SignUpPage = () => {
  const history = useHistory()
  const { form, onChange } = useForm({ name: "", email: "", cpf: "", password: "" })
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false)

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  const handleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility(!confirmPasswordVisibility)
  }

  const checkIfPasswordsMatch = (event) => {
    event.preventDefault()

    if ( form.password !== confirmPassword ) {
      window.alert('As senhas precisam ser iguais!')
    }else {
      onSubmitForm(event)
    }
  }

  const onSubmitForm = () => {
    signUp(form, history)
  }

  return (
    <LoginContainer>
      <Logo src={logo} />
      <Typography variant="h6" align="center">Cadastrar</Typography>
      <FlexForm autoComplete="off" onSubmit={checkIfPasswordsMatch}>
        <TextField
          required
          label="Nome"
          placeholder="Nome e sobrenome"
          type="text"
          variant="outlined"
          name="name"
          value={form.name}
          onChange={onChange}
        />
        <TextField
          required
          label="E-mail"
          type="email"
          variant="outlined"
          placeholder="email@email.com"
          name="email"
          value={form.email}
          onChange={onChange}
        />
        <TextField
          required
          label="CPF"
          type="text"
          variant="outlined"
          placeholder="000.000.000-00"
          name="cpf"
          value={form.cpf}
          onChange={onChange}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            required
            inputProps={{ pattern: "[0-9a-zA-Z]{6,}" }}
            type={passwordVisibility ? 'text' : 'password'}
            name="password"
            placeholder="Mínimo 6 caracteres"
            value={form.password}
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handlePasswordVisibility}
                  edge="end"
                >
                  {passwordVisibility ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-confirm-password">Confirmar</InputLabel>
          <OutlinedInput
            id="outlined-confirm-password"
            required
            inputProps={{ pattern: "[0-9a-zA-Z]{6,}" }}
            type={confirmPasswordVisibility ? 'text' : 'password'}
            name="confirm-password"
            placeholder="Confirme a senha anterior"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleConfirmPasswordVisibility}
                  edge="end"
                >
                  {confirmPasswordVisibility ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Criar
        </Button>
      </FlexForm>
    </LoginContainer>
  )
}

export default SignUpPage;