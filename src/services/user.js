import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToAdress } from '../router/coordinator'

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