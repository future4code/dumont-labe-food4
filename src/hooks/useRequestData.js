import { useState, useEffect } from 'react'
import axios from 'axios'

export const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)
    const token = localStorage.getItem("token")

    useEffect(() => {
        axios.get(url, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            setData(response.data);
        })
        .catch((erro) => {
            console.log(erro);
        });
    }, [url])

    return data;
}