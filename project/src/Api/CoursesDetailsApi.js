import {instance} from "./axios"

const getCourseDetails = (id) => {
    return instance.get('courses/' + id + '/details')
    .then(response => {
        return response.data;
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

const SignUpCourse = (id) =>{
    return instance.post('/courses/' + id + '/sign-up')
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

export const CourseDetailsApi = {
    getCourseDetails: getCourseDetails,
    editStudentStatus: editStudentStatus,
    editStudentMark: editStudentMark,
    editCourse: editCourse,
    deleteCourse: deleteCourse,
    AddTeacher: AddTeacher,
    AddNotification: AddNotification,
    SignUpCourse: SignUpCourse,
    editStatusCourse: editStatusCourse
}