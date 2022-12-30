import { API } from "../../../backend";
export const getLeavesPending = () => {
    return fetch(`${API}/leaves/pending`, {
            method: "GET"
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const getLeavesAD = () => {
    return fetch(`${API}/leaves/approved`, {
            method: "GET",
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const updateLeaves = (leaveId, userId, token, status) => {
    return fetch(`${API}/leaves/${leaveId}/${userId}`, {
            method: "PUT",
            headers: {
                "accept": "application/json",
                "Content-Type": 'application/json',
                "Authorization": `bearer ${token}`,
            },
            body: status
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}