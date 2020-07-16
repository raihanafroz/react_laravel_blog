import { baseUrl } from '../baseUrl';
import  { toastError }  from '../../helpers/toastHelper';
import { toast } from 'react-toastify';

export const register = (payload) => {
    return fetch(`${baseUrl}register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(response => {
        toastError(response);
        return response;
    })
    .catch(e => {
        toast.error("Server error, please try again later")
    });

}

export const login = (payload) => {
    return fetch(`${baseUrl}login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(response => {
        toastError(response);
        if(response.status === "success"){
            localStorage.setItem("user", JSON.stringify(response));
            return response;
        }
    })
    .catch(e => {
        console.log(e)
        toast.error("Server error, please try again later")
    });

}