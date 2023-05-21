

let store = {
    state: {
        groupList:{
            group: [
                {
                  id: "b785b820-10ec-4450-8449-08db2e8f03b3",
                  name: "Психология"
                },
                {
                  id: "5c74b5ba-da9e-423c-844a-08db2e8f03b3",
                  name: "Иностранные языки"
                },
                {
                  id: "3fe78a26-83e1-4170-844c-08db2e8f03b3",
                  name: "Программирование"
                },
                {
                  id: "466a37b3-2acf-4f4f-aed3-08db31fd15b0",
                  name: "Философия"
                }
              ]
        },
        course:[
            {
              id: "284218d8-ce17-4d6b-db5f-08db2e90e277",
              name: "Я полюбил публичные выступления",
              startYear: 2022,
              maximumStudentsCount: 100,
              remainingSlotsCount: 100,
              status: "OpenForAssigning",
              semester: "Spring"
            },
            {
              id: "25739b12-f517-4bdd-db61-08db2e90e277",
              name: "Психология парных отношений: тренинг взаимопонимания",
              startYear: 2022,
              maximumStudentsCount: 200,
              remainingSlotsCount: 200,
              status: "OpenForAssigning",
              semester: "Spring"
            },
            {
              id: "0157c4ca-9617-4c00-db62-08db2e90e277",
              name: "Кампусный курс - Социальная тревожность во время обучения в университете: что это такое и как с этим справляться?",
              startYear: 2022,
              maximumStudentsCount: 100,
              remainingSlotsCount: 100,
              status: "OpenForAssigning",
              semester: "Spring"
            },
            {
              id: "c2145e52-6df0-4dc9-a533-08db31d28dd4",
              name: "string",
              startYear: 2029,
              maximumStudentsCount: -1,
              remainingSlotsCount: -1,
              status: "Created",
              semester: "Autumn"
            },
            {
              id: "0b9b361e-5c1e-4106-a534-08db31d28dd4",
              name: "string",
              startYear: 2029,
              maximumStudentsCount: -253,
              remainingSlotsCount: -253,
              status: "Created",
              semester: "Autumn"
            },
            {
              id: "9c4347d0-4e57-4846-975f-08db327c7f06",
              name: "Интересный курс",
              startYear: 2023,
              maximumStudentsCount: 50,
              remainingSlotsCount: 50,
              status: "Created",
              semester: "Autumn"
            }
          ]
    },
    
} 

// {
//   "id": "284218d8-ce17-4d6b-db5f-08db2e90e277",
//   "name": "Я полюбил публичные выступления",
//   "startYear": 2022,
//   "maximumStudentsCount": 100,
//   "studentsEnrolledCount": 2,
//   "studentsInQueueCount": 0,
//   "requirements": "<p><em>Уровень подготовки – любой. не люблю публичные выступления(((( +++++</em></p>\n",
//   "annotations": "<p><em>Цель: Повысить качество общения с публикой</em></p>\n",
//   "status": "Started",
//   "semester": "Spring",
//   "students": [
//     {
//       "id": "e3cb6b92-ec0c-42d0-c8de-08db33fba1b6",
//       "name": "Ситникова Владлена Михайловна",
//       "email": "vlada1111@mail.ru",
//       "status": "Accepted",
//       "midtermResult": null,
//       "finalResult": null
//     },
//     {
//       "id": "b4ee22ed-4873-4d59-c8dd-08db33fba1b6",
//       "name": "Обухов Олег Вадимович",
//       "email": "Oleg1978@mail.ru",
//       "status": "Accepted",
//       "midtermResult": null,
//       "finalResult": null
//     }
//   ],
//   "teachers": [
//     {
//       "name": "Первый Препод Курсович",
//       "email": "firstTeacher@tsu.ru",
//       "isMain": true
//     }
//   ],
//   "notifications": [
//     {
//       "text": "здесь был вася",
//       "isImportant": false
//     },
//     {
//       "text": "angular топ",
//       "isImportant": true
//     },
//     {
//       "text": "пиво топ",
//       "isImportant": false
//     },
//     {
//       "text": "rwezsrdtglh;",
//       "isImportant": false
//     }
//   ]
// }



// [
//   {
//     "id": "25739b12-f517-4bdd-db61-08db2e90e277",
//     "name": "Психология парных отношений: тренинг взаимопонимания",
//     "startYear": 2022,
//     "maximumStudentsCount": 200,
//     "remainingSlotsCount": 196,
//     "status": "OpenForAssigning",
//     "semester": "Spring"
//   }
// ]

export default store;

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
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.post('registration',{headers: { Authorization: `Bearer ${token1}` }}, data)
    .then(response => {
        return response;
    })
    .catch(error => {
        console.log(error.response.data.error);
    });
}

function EditProfile(fullName, birthDate){
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.put('profile',{headers: { Authorization: `Bearer ${token1}` }},{
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
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.post('/courses/' + id + '/sign-up', {headers: { Authorization: `Bearer ${token1}` }})
    .then(response =>{
        return response.data;
      })
      .catch(error => {
        console.log(error);
    });
}

function deleteGroup(id){
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.delete('/groups/' + id, {headers: { Authorization: `Bearer ${token1}` }})
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

function createGroup(name){
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.post('/groups',{headers: { Authorization: `Bearer ${token1}` }},  {
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
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.put('/groups/' + id,{headers: { Authorization: `Bearer ${token1}` }}, {
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
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.post('/courses/' + groupId,{headers: { Authorization: `Bearer ${token1}` }}, data)
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

function editStatusCourse(id,status){
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.post('/courses/' + id + '/status',{headers: { Authorization: `Bearer ${token1}` }}, {
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
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.post('/courses/' + id + '/student-status/' + studentId,{headers: { Authorization: `Bearer ${token1}` }}, {
        status
    })
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

function editStudentMark(id, studentId, markType, mark){
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.post('/courses/' + id + '/marks/' + studentId, {headers: { Authorization: `Bearer ${token1}` }},{
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
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.put('/courses/' + id,{headers: { Authorization: `Bearer ${token1}` }}, {
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
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.delete('/courses/' + id, {headers: { Authorization: `Bearer ${token1}` }})
    .then(response =>{
        return response;
      })
      .catch(error => {
        console.log(error);
    });
}

function AddTeacher(id, userId){
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.post('/courses/' + id + '/teachers',{headers: { Authorization: `Bearer ${token1}` }}, {
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
    let token1 = JSON.parse(localStorage.getItem('user'));
    return instance.post('/courses/' + id + '/notifications',{headers: { Authorization: `Bearer ${token1}` }}, {
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
