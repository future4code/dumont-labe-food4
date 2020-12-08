import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToAdress } from '../router/coordinator'

export const signUp = (body, history) => {
    axios.post(`${BASE_URL}/signup`, body)
    .then(response => {
        localStorage.setItem("token", response.data.token)
        goToAdress(history)
    }).catch(error => {
        console.log(error.message)
    })
}