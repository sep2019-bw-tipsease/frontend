import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://tipsease-app.herokuapp.com/api/users",
        headers: {
            Authorization: token
        }
    });
};