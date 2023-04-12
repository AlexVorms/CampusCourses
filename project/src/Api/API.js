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
        return response
    })
    .catch(error => {
        console.log(error.response.data.error);
    });
}

export const API = {
    getGroups: getGroups,
    getCourses: getCourses,
    getProfile: getProfile,
    authorisation: authorisation
};
