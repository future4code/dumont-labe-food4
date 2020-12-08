import axios from 'axios'
import { BASE_URL, axiosConfig } from '../constants/urls'
import { goToAdress, goToFeed } from '../router/coordinator'

export const signUp = (body, history) => {
    axios.post(`${BASE_URL}/signup`, body)
    .then(response => {
        localStorage.setItem("token", response.data.token)
        goToAdress(history)
    }).catch(error => {
        console.log(error.message)
    })
}

export const login = (body, history) => {
    axios.post(`${BASE_URL}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        window.alert(`Olá ${res.data.user.name}! Estou te redirecionando para o feed`)
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