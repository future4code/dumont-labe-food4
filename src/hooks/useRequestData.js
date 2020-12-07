import { useState, useEffect } from 'react'
import axios from 'axios'

export const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)
    const token = localStorage.getItem("token")

    const getData = () => {
        axios.get(url, {
                headers: {
                    Authorization: token
                }
            })
            .then((response) => {
                setData(response.data);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }

    useEffect(() => {
        getData()
    }, [url])

    return [data, getData]
}