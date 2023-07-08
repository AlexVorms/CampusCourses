import axios from "axios";
import {deleteUserData} from "../reducers/authReducer";

export const instance = axios.create({
    baseURL: "https://camp-courses.api.kreosoft.space/",
    headers: {'Authorization': `Bearer ${localStorage.getItem("user")}`}
});

instance.interceptors.response.use(response => response,
    error => {
        if (error.response?.status === 401) {
            localStorage.removeItem('user');
            deleteUserData();
            window.location.pathname = "/login";
        }
        return Promise.reject(error);
    });