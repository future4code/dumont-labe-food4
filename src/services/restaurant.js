import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeed} from "../router/coordinator"

const axiosConfig = {
    headers: { auth: window.localStorage.getItem("token") },
}; 
  
export const getRestaurants = () => {
    axios
        .get(`${BASE_URL}/restaurants`)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.message)
        })
}

export const placeOrder = (restaurantId, body, history, reset) => {
    axios
        .post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, axiosConfig )
        .then(() => {
            window.alert("Seu pedido foi recebido pelo restaurante!")
            reset()
            goToFeed(history)
        })
            .catch(error => {
            console.log(error.message)
            window.alert("Algo deu errado, tente novamente!")
        })
}