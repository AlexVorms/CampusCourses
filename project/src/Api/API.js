import axios from 'axios';

 
let token = JSON.parse(localStorage.getItem('user'));

const instance = axios.create({
    baseURL:"https://camp-courses.api.kreosoft.space/",
    headers: { Authorization: `Bearer ${token}` }
})


function getGroups(){
    
    return instance.get("groups")
    .then(response =>{
        return response.data;
      })
      .catch(error => {
        console.log(error);
    });
}

function getCourses(id){
    return instance.get("groups/" + id)
    .then(response =>{
        return response.data;
      })
      .catch(error => {
        console.log(error);
    });
}

function getProfile(){
    return instance.get("profile")
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error);
    });
}

function authorisation(email, password){
    return instance.post('login', {
        email,
        password
    })
    .then(response => {
        localStorage.setItem("user", JSON.stringify(response.data.token));
        return response.status
    })
    .catch(error => {
        console.log(error.response.data.error);
    });
}

function logout(){
    return instance.post('logout')
    .then(response => {
        localStorage.removeItem("user");
        return response;
    })
    .catch(error => {
        console.log(error.response.data.error);
    });
}

function Registration(data){
    return instance.post('registration', data)
    .then(response => {
        return response;
    })
    .catch(error => {
        console.log(error.response.data.error);
    });
}

function EditProfile(fullName, birthDate){
    return instance.put('profile',{
        fullName,
        birthDate
    })
    .then(response =>{
        return response;
    })
    .catch(error => {
        console.log(error.response.data.error);
    });
}

function getUserStatus(){
    return instance.get('roles')
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error.response.data.error);
    });
}
export const API = {
    getGroups: getGroups,
    getCourses: getCourses,
    getProfile: getProfile,
    authorisation: authorisation,
    logout: logout,
    Registration: Registration,
    EditProfile: EditProfile,
    getUserStatus: getUserStatus
};
