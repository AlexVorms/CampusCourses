import {instance} from "./axios"
import axios from "axios";


const getGroups = () => {
    return instance.get("groups")
        .then(response => response.data)
        .catch(error => error.response);
} 

const getCourses = (id) => {
    return instance.get("groups/" + id)
    .then(response =>{
        return response.data;
      })
      .catch(error => error.response);
}

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



const getCourseDetails= (id) => {
    return instance.get('courses/' + id + '/details')
    .then(response => {
        return response.data;
    })
    .catch(error => error.response);
}

const getMyCourses = () =>{
    return instance.get('/courses/my')
    .then(response =>{
        return response.data;
      })
      .catch(error => error.response);
}

const getMyTeachingCourses = () =>{
    return instance.get('/courses/teaching')
    .then(response =>{
        return response.data;
      })
      .catch(error => error.response);
}


const SignUpCourse = (id) =>{
    return instance.post('/courses/' + id + '/sign-up')
    .then(response =>{
        return response;
      })
      .catch(error => error.response);
}
const deleteGroup = (id) =>{
    return instance.delete('/groups/' + id)
    .then(response =>{
        return response;
      })
      .catch(error => error.response);
}

const createGroup = (name) =>{
    return instance.post('/groups', {
        name
    })
    .then(response =>{
        return response;
      })
      .catch(error => error.response);
}

const editGroup = (name, id) =>{
    return instance.put('/groups/' + id, {
        name
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

const createCourse = (groupId, data) =>{
    return instance.post('/courses/' + groupId, data)
    .then(response =>{
        return response;
      })
      .catch(error => error.response);
}

const editStatusCourse = (id,status) =>{
    return instance.post('/courses/' + id + '/status', {
        status
    })
    .then(response =>{
        return response;
      })
    .catch(error => error.response);
}

const editStudentStatus = (id, studentId, status) =>{
    return instance.post('/courses/' + id + '/student-status/' + studentId, {
        status
    })
    .then(response =>{
        return response;
      })
    .catch(error => error.response);
}

const editStudentMark = (id, studentId, markType, mark) =>{
    return instance.post('/courses/' + id + '/marks/' + studentId,{
        markType,
        mark
    })
    .then(response =>{
        return response;
      })
    .catch(error => error.response);
}

const editCourse = (id, requirements, annotations) => {
    return instance.put('/courses/' + id, {
        requirements,
        annotations
    })
    .then(response =>{
        return response;
      })
    .catch(error => error.response);
}

const deleteCourse = (id) =>{
    return instance.delete('/courses/' + id)
    .then(response =>{
        return response;
      })
    .catch(error => error.response);
}

const AddTeacher = (id, userId) =>{
    return instance.post('/courses/' + id + '/teachers',{
        userId
    })
    .then(response =>{
        return response;
      })
      .catch(error => error.response);
}

const AddNotification = (id, text,isImportant) =>{
    return instance.post('/courses/' + id + '/notifications', {
        text,
        isImportant
    })
    .then(response =>{
        return response;
      })
    .catch(error => error.response);
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
