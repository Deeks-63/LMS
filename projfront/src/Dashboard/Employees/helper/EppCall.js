import { API } from "../../../backend";

export const createUser = (userId, token, user) => {
    return fetch(`${API}/user/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(user)
    })
}

export const getUsers = () => {
    return fetch(`${API}/users`, {
            method: "GET"
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const deleteUser = (cuId, userId, token) => {
    return fetch(`${API}/department/${cuId}/${userId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};