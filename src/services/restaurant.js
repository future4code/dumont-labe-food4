import axios from 'axios'
import { BASE_URL } from '../constants/urls'

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