import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function signIn(body) {
    const promise = axios.post(`${BASE_URL}/signin`, body);
    return promise;
}

function signUp(body) {
    const promise = axios.post(`${BASE_URL}/signup`, body);
    return promise;
}

export {
    signIn,
    signUp
};