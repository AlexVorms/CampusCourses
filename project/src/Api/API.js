import axios from 'axios';

const instance = axios.create({
    baseURL:"https://camp-courses.api.kreosoft.space/",
    headers: { Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhMjg0YmFmZC1mMmZhLTRmZjMtNTRiYS0wOGRiMzI2MjMyMTMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbiI6ImFhNjgxZTY1LWE1NGQtNDdlYy1iM2E5LWJmNzIyZTQ1ODY0NiIsIm5iZiI6MTY4MTI3NjE5MywiZXhwIjoxNjgxMjc5NzkzLCJpYXQiOjE2ODEyNzYxOTMsImlzcyI6IkNhbXB1c0NvdXJzZS5BUEkiLCJhdWQiOiJDYW1wdXNDb3Vyc2UuQVBJIn0.l2g1jJK2_VSKkJQG8l16ZPvwZ2fcsdRT1dKFtZHIc9s"}` }
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
export const API = {
    getGroups: getGroups,
    getCourses: getCourses,
    getProfile: getProfile
};
