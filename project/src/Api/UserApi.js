import {instance} from "./axios"

const getProfile = () =>{
    return instance.get("profile")
    .then(response => {
        return response.data;
    })
    .catch(error => error.response)
}

const logout = () =>{
    return instance.post("logout")
    .then(response => {
        localStorage.removeItem("user");
        return response;
    })
    .catch(error => error.response)
}

const authorisation = (email, password) => {
    return instance.post("login", {
        email: email,
        password: password
    })
        .then(response => {
            instance.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
            return response.status;
        })
        .catch(error => error.response);
}

const getUserStatus = () =>{
    return instance.get('roles')
    .then(response => {
        return response.data;
    })
    .catch(error => error.response);
}

const Registration = (data) =>{
    return instance.post('registration', data)
    .then(response => {
        return response;
    })
    .catch(error => error.response);
}

const EditProfile = (fullName, birthDate)=>{
    return instance.put('profile',{
        fullName,
        birthDate
    })
    .then(response =>{
        return response;
    })
    .catch(error => error.response);
}

const getListAllUsers =() =>{
    return instance.get('/users')
    .then(response =>{
        return response.data;
      })
      .catch(error => error.response);
}

export const API = {
    getProfile: getProfile,
    authorisation: authorisation,
    logout: logout,
    Registration: Registration,
    EditProfile: EditProfile,
    getUserStatus: getUserStatus,
    getListAllUsers: getListAllUsers,
};
