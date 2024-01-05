import {instance} from "./axios"

const getCourses = (id) => {
    return instance.get("groups/" + id)
    .then(response =>{
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

const createCourse = (groupId, data) =>{
    return instance.post('/courses/' + groupId, data)
    .then(response =>{
        return response;
      })
      .catch(error => error.response);
}

export const CoursesApi = {
    getCourses: getCourses,
    getMyCourses: getMyCourses,
    getMyTeachingCourses: getMyTeachingCourses,
    createCourse: createCourse,
}