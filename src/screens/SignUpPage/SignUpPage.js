import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { TextField, InputLabel, FormControl, FormHelperText, Typography } from '@material-ui/core';
import { useForm } from '../../hooks/useForm';
import { FlexForm } from './styles';
import { LoginContainer, Logo, Button } from '../LoginPage/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { signUp } from '../../services/user'
import logo from '../../assets/black-logo.svg'
import { cpfMask } from '../../util/functions'
import NavBar from '../../components/NavBar/NavBar';

const SignUpPage = () => {
  const history = useHistory()
  const { form, onChange } = useForm({ name: "", email: "", cpf: "", password: "" })
  const formatedCPF = cpfMask(form.cpf)
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false)
  const [errorState, setErrorState] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  
  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  const handleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility(!confirmPasswordVisibility)
  }

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value)

    if ( form.password !== event.target.value ) {
      setErrorState(true)
      setErrorMessage('Deve ser a mesma que a anterior')
    }else {
      setErrorState(false)
    }
  }

  const checkIfPasswordsMatch = (event) => {
    event.preventDefault()
    errorState ? window.alert('As senhas precisam ser iguais!') : onSubmitForm()  
  }

  const onSubmitForm = () => {
    signUp(form, history)
  }

  return (
    <div>
      <NavBar />
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
            value={formatedCPF}
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

          <FormControl error={errorState} variant="outlined">
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
            <FormHelperText id="component-error-text">{errorState ? errorMessage : null}</FormHelperText>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Criar
          </Button>
        </FlexForm>
      </LoginContainer>
    </div>
  )
}

export default SignUpPage;