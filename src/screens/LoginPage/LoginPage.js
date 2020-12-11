import React, { useState } from 'react'
import { TextField, Typography, OutlinedInput, InputAdornment, IconButton, FormControl, InputLabel } from '@material-ui/core'
import { LoginContainer, FormContainer, Logo, Button } from "./styles"
import logo from '../../assets/black-logo.svg'
import { useForm } from '../../hooks/useForm'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../router/coordinator'

const LoginPage = () => {
  const history = useHistory()
  const { form, onChange, reset } = useForm({ email: "", password: "" })
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility)
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    reset();
    login(form, history);
  }

  return (
    <LoginContainer>
      <Logo src={logo} />
      <Typography variant="h6" align="center">
        Entrar
      </Typography>
      <FormContainer onSubmit={handleSubmission}>
        <TextField
          name="email"
          value={form.email}
          onChange={onChange}
          type="email"
          label="Email"
          placeholder="email@email.com"
          required
          variant="outlined"
        />

        <FormControl variant="outlined">
          <InputLabel required>Senha</InputLabel>
          <OutlinedInput
            type={passwordVisibility ? "text" : "password"}
            value={form.password}
            name="password"
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            required
            onChange={onChange}
            inputProps={{ pattern: "[0-9a-zA-Z]{6,}" }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibility} edge="end">
                  {passwordVisibility ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button type="submit">
          Entrar
        </Button>
      </FormContainer>
      <Typography onClick={() => goToSignUp(history)} align="center" variant="subtitle1">Não possui cadastro? Clique aqui</Typography>
    </LoginContainer>
  );
};

export default LoginPage;
