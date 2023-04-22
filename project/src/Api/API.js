import axios from 'axios';

 
 let token = JSON.parse(localStorage.getItem('user'));

let instance = axios.create({
    baseURL:"https://camp-courses.api.kreosoft.space/",
    headers: { Authorization: `Bearer ${token}` }
})


async function getGroups(){
    
    return await instance.get("groups")
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

async function authorisation(email, password){
    return await instance.post('login', {
        email,
        password
    })
    .then(response => {
        localStorage.setItem("user", JSON.stringify(response.data.token));
        token = JSON.parse(localStorage.getItem('user'));
        return response.status
    })
    .catch(error => {
        console.log(error.response.data.error);
    });
}

async function logout(){
    return await instance.post('logout')
    .then(response => {
        localStorage.removeItem("user");
        token = ''
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

async function getUserStatus(){
    return await instance.get('roles')
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error.response.data.error)
    });
}

function getCourseDetails(id){
    return instance.get('courses/' + id + '/details')
    .then(response => {
        console.log(response.data)
        return response.data;
    })
    .catch(error => {
        console.log(error.response.data.error);
    });
}

function getMyCourses(){
    return instance.get('/courses/my')
    .then(response =>{
        return response.data;
      })
      .catch(error => {
        console.log(error);
    });

}

function getMyTeachingCourses(){
    return instance.get('/courses/teaching')
    .then(response =>{
        return response.data;
      })
      .catch(error => {
        console.log(error);
    });

}


function SignUpCourse(id){
    return instance.post('/courses/' + id + '/sign-up')
    .then(response =>{
        return response.data;
      })
      .catch(error => {
        console.log(error);
    });
}

function deleteGroup(id){
    return instance.delete('/groups/' + id)
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

function createGroup(name){
    return instance.post('/groups', {
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
    return instance.put('/groups/' + id, {
        name
    })
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

function getListAllUsers(){
    return instance.get('/users')
    .then(response =>{
        return response.data;
      })
      .catch(error => {
        console.log(error);
    });
}
function createCourse(groupId, data){
    return instance.post('/courses/' + groupId, data)
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

function editStatusCourse(id,status){
    return instance.post('/courses/' + id + '/status', {
        status
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
    editStatusCourse:editStatusCourse
};
