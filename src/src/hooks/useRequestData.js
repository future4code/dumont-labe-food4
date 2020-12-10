import { useState, useEffect } from 'react'
import axios from 'axios'
import {axiosConfig} from '../constants/urls'

export const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)
    

    useEffect(() => {
        axios.get(url, axiosConfig)
        .then((response) => {
            setData(response.data);
        })
        .catch((erro) => {
            console.log(erro);
        });
    }, [url])

    return data;
}