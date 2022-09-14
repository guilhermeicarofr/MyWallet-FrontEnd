import axios from 'axios';

function signIn(body) {
    const promise = axios.post(`${process.env.BASE_URL}/signin`, body);
    return promise;
}

function signUp(body) {
    const promise = axios.post(`${process.env.BASE_URL}/signup`, body);
    return promise;
}

function getUserName(token) {
    const promise = axios.get(`${process.env.BASE_URL}/name`, { headers: {'Authorization':`Bearer ${token}`} });
    return promise;
}

function getUserBalance(token) {
    const promise = axios.get(`${process.env.BASE_URL}/balance`, { headers: {'Authorization':`Bearer ${token}`} });
    return promise;
}

function getTransactions(token) {
    const promise = axios.get(`${process.env.BASE_URL}/transactions`, { headers: {'Authorization':`Bearer ${token}`} });
    return promise;
}

function postTransaction(token, body) {
    const promise = axios.post(`${process.env.BASE_URL}/transactions`, body, { headers: {'Authorization':`Bearer ${token}`} });
    return promise;
}

function deleteTransaction(token, id) {
    const promise = axios.delete(`${process.env.BASE_URL}/transactions/${id}`, { headers: {'Authorization':`Bearer ${token}`} });
    return promise;
}

export {
    signIn,
    signUp,
    getUserName,
    getUserBalance,
    getTransactions,
    postTransaction,
    deleteTransaction
};
