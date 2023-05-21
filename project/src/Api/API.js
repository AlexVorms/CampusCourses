import axios from 'axios';

let instance = axios.create({
    baseURL:"https://camp-courses.api.kreosoft.space/"
})


async function getGroups(){
    let token1 = JSON.parse(localStorage.getItem('user'));
    return await instance.get("groups", {headers: { Authorization: `Bearer ${token1}` }})
    .then(response =>{
        return response.data;
      })
      .catch(error => {
        console.log(error);
    });
}

function getCourses(id){
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.get("groups/" + id, {headers: { Authorization: `Bearer ${token1}` }})
    .then(response =>{
        return response.data;
      })
      .catch(error => {
        console.log(error);
    });
}

function getProfile(){
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.get("profile", {headers: { Authorization: `Bearer ${token1}` }})
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error);
    });
}

async function authorisation(email, password){
    return await instance.post('login', {
        email,
        password
    })
    .then(response => {
        localStorage.setItem("user", JSON.stringify(response.data.token));
        
        return response.status
    })
    .catch(error => {
        console.log(error.response.data.error);
        return error.response.data.error
    });
}

async function logout(){
    let token23 = JSON.parse(localStorage.getItem('user'));
    let instance1 = axios.create({
        baseURL:"https://camp-courses.api.kreosoft.space/",
        headers: { Authorization: `Bearer ${token23}` }
    })
    
    console.log(token23)
    return await instance1.post("logout")
    .then(response => {
        localStorage.removeItem("user");
        return response;
    })
    .catch(error => {
        alert('Что-то пошло не так')
    });
}
async function getUserStatus(){
    let token1 = JSON.parse(localStorage.getItem('user'));
    return await instance.get('roles', {headers: { Authorization: `Bearer ${token1}` }})
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error.response.data.error)
    });
}
function Registration(data){
    let token23 = JSON.parse(localStorage.getItem('user'));
    let instance2 = axios.create({
        baseURL:"https://camp-courses.api.kreosoft.space/",
        headers: { Authorization: `Bearer ${token23}` }
    })
    return instance2.post('registration', data)
    .then(response => {
        return response;
    })
    .catch(error => {
        console.log(error.response.data.error);
    });
}

function EditProfile(fullName, birthDate){

     let token23 = JSON.parse(localStorage.getItem('user'));
    let instance2 = axios.create({
        baseURL:"https://camp-courses.api.kreosoft.space/",
        headers: { Authorization: `Bearer ${token23}` }
    })
    return instance2.put('profile',{
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



function getCourseDetails(id){
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.get('courses/' + id + '/details', {headers: { Authorization: `Bearer ${token1}` }})
    .then(response => {
        console.log(response.data)
        return response.data;
    })
    .catch(error => {
        console.log(error.response.data.error);
    });
}

function getMyCourses(){
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.get('/courses/my', {headers: { Authorization: `Bearer ${token1}` }})
    .then(response =>{
        return response.data;
      })
      .catch(error => {
        console.log(error);
    });

}

function getMyTeachingCourses(){
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.get('/courses/teaching', {headers: { Authorization: `Bearer ${token1}` }})
    .then(response =>{
        return response.data;
      })
      .catch(error => {
        console.log(error);
    });

}


function SignUpCourse(id){
    let token23 = JSON.parse(localStorage.getItem('user'));
    let instance2 = axios.create({
        baseURL:"https://camp-courses.api.kreosoft.space/",
        headers: { Authorization: `Bearer ${token23}` }
    })
    return instance2.post('/courses/' + id + '/sign-up')
    .then(response =>{
        return response.data;
      })
      .catch(error => {
        console.log(error);
    });
}

function deleteGroup(id){
    let token23 = JSON.parse(localStorage.getItem('user'));
    let instance2 = axios.create({
        baseURL:"https://camp-courses.api.kreosoft.space/",
        headers: { Authorization: `Bearer ${token23}` }
    })
    return instance2.delete('/groups/' + id)
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

function createGroup(name){
    let token23 = JSON.parse(localStorage.getItem('user'));
    let instance2 = axios.create({
        baseURL:"https://camp-courses.api.kreosoft.space/",
        headers: { Authorization: `Bearer ${token23}` }
    })
    return instance2.post('/groups', {
        name
    })
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

function editGroup(name, id){
    let token23 = JSON.parse(localStorage.getItem('user'));
    let instance2 = axios.create({
        baseURL:"https://camp-courses.api.kreosoft.space/",
        headers: { Authorization: `Bearer ${token23}` }
    })
    return instance2.put('/groups/' + id, {
        name
    })
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

async function getListAllUsers(){

    let token1 = JSON.parse(localStorage.getItem('user'));
    return await instance.get('/users', {headers: { Authorization: `Bearer ${token1}` }})
    .then(response =>{
        return response.data;
      })
      .catch(error => {
        console.log(error);
    });
}
function createCourse(groupId, data){
    let token23 = JSON.parse(localStorage.getItem('user'));
    let instance2 = axios.create({
        baseURL:"https://camp-courses.api.kreosoft.space/",
        headers: { Authorization: `Bearer ${token23}` }
    })
    return instance2.post('/courses/' + groupId, data)
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

function editStatusCourse(id,status){
    let token23 = JSON.parse(localStorage.getItem('user'));
    let instance2 = axios.create({
        baseURL:"https://camp-courses.api.kreosoft.space/",
        headers: { Authorization: `Bearer ${token23}` }
    })
    return instance2.post('/courses/' + id + '/status', {
        status
    })
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

function editStudentStatus(id, studentId, status){
    let token23 = JSON.parse(localStorage.getItem('user'));
    let instance2 = axios.create({
        baseURL:"https://camp-courses.api.kreosoft.space/",
        headers: { Authorization: `Bearer ${token23}` }
    })
    return instance2.post('/courses/' + id + '/student-status/' + studentId, {
        status
    })
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

async function editStudentMark(id, studentId, markType, mark){
    let token23 = JSON.parse(localStorage.getItem('user'));
    let instance2 = axios.create({
        baseURL:"https://camp-courses.api.kreosoft.space/",
        headers: { Authorization: `Bearer ${token23}` }
    })

    return await instance2.post('/courses/' + id + '/marks/' + studentId,{
        markType,
        mark
    })
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

function editCourse(id, requirements, annotations){
    let token23 = JSON.parse(localStorage.getItem('user'));
    let instance2 = axios.create({
        baseURL:"https://camp-courses.api.kreosoft.space/",
        headers: { Authorization: `Bearer ${token23}` }
    })
    return instance2.put('/courses/' + id, {
        requirements,
        annotations
    })
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

function deleteCourse(id){
    let token23 = JSON.parse(localStorage.getItem('user'));
    let instance2 = axios.create({
        baseURL:"https://camp-courses.api.kreosoft.space/",
        headers: { Authorization: `Bearer ${token23}` }
    })
    return instance2.delete('/courses/' + id)
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

function AddTeacher(id, userId){
    let token23 = JSON.parse(localStorage.getItem('user'));
    let instance2 = axios.create({
        baseURL:"https://camp-courses.api.kreosoft.space/",
        headers: { Authorization: `Bearer ${token23}` }
    })
   
    return instance2.post('/courses/' + id + '/teachers',{
        userId
    })
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

function AddNotification(id, text,isImportant){
    let token23 = JSON.parse(localStorage.getItem('user'));
    let instance2 = axios.create({
        baseURL:"https://camp-courses.api.kreosoft.space/",
        headers: { Authorization: `Bearer ${token23}` }
    })
    return instance2.post('/courses/' + id + '/notifications', {
        text,
        isImportant
    })
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
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
    getUserStatus: getUserStatus,
    getCourseDetails: getCourseDetails,
    getMyCourses: getMyCourses,
    SignUpCourse:SignUpCourse,
    deleteGroup: deleteGroup,
    createGroup: createGroup,
    getListAllUsers: getListAllUsers,
    createCourse: createCourse,
    getMyTeachingCourses: getMyTeachingCourses,
    editGroup: editGroup,
    editStatusCourse:editStatusCourse,
    editStudentStatus: editStudentStatus,
    editStudentMark: editStudentMark,
    editCourse: editCourse,
    deleteCourse: deleteCourse,
    AddTeacher: AddTeacher,
    AddNotification:  AddNotification
};
