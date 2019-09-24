import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://5d8947bcb2568e0014d87a57.mockapi.io",
        headers: {
            Authorization: token
        }
    });
};