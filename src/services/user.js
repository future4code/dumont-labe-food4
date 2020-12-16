import axios from 'axios'
import { BASE_URL, axiosConfig } from '../constants/urls'
import { goToAdress, goToFeed } from '../router/coordinator'

export const signUp = (body, history) => {
    axios.post(`${BASE_URL}/signup`, body)
    .then(response => {
        localStorage.setItem("token", response.data.token)
        goToAdress(history)
    }).catch(error => {
        error.message === "Request failed with status code 409" ? 
        window.alert("E-mail ou CPF já cadastrados") :
        console.log(error.message)
    })
}

export const login = (body, history) => {
    axios.post(`${BASE_URL}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        window.alert(`Olá ${res.data.user.name}! Estou te redirecionando para o feed`)
        console.log(localStorage.getItem("token"))
        goToFeed(history)
      })
      .catch((error) => {
        console.log(error.message)
        window.alert("Email ou senha incorretos")
      })
}

export const addAdress = (body, history) => {
    axios.put(`${BASE_URL}/address`, body, axiosConfig)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        window.alert("Endereço cadastrado com sucesso!")
        goToFeed(history)
      })
      .catch((error) => {
        console.log(error.message)
        window.alert("Algo deu errado, confira suas informações")
      })
}

export const editProfile = (body) => {
      axios
        .put(`${BASE_URL}/profile`, body, axiosConfig)
        .then(response => {

          console.log(response.data)
          window.alert("Cadastro atualizado com sucesso!")
        })
        .catch(error => {
          console.log(error.message)
          window.alert("Algo deu errado, tente novamente!")
        })
}
