import { API } from "../../../backend";
export const getLeavesByRollId = () => {
    return fetch(`${API}/leaves`, {
            method: "GET"
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const getLeavesById = (userid) => {
    return fetch(`${API}/leaves/${userid}`, {
            method: "GET"
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
