import { API } from "../../../backend";

export const createDepartment = (userId, token, department) => {
    return fetch(`${API}/department/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(department)
    })
}
export const getDepartments = () => {
    return fetch(`${API}/departments`, {
            method: "GET"
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const deleteDepartment = (departmentId, userId, token) => {
    return fetch(`${API}/department/${departmentId}/${userId}`, {
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