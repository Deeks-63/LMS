import { API } from "../../../backend";
export const createLeave = (userId, token, leave) => {
    return fetch(`${API}/leaves/create`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(leave)
    })
}
