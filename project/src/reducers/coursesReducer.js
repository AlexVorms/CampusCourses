import { API } from "../Api/API";

const SET_COURSES = 'SET_COURSES';
const COURSES_IS_FETCHING = 'COURSES_IS_FETCHING';
const SET_USERS = 'SET_USERS';

let initialState = {
  courses:[
  ],
  users:[],
  isFetching: false
};
const coursesReducer = (state = initialState, action) =>{
  switch(action.type){
      case SET_COURSES:{
          return{
              ...state, courses: action.courses
          }
      }
      case COURSES_IS_FETCHING:{
        return {...state, isFetching: action.isFetching}
      }
      case SET_USERS:{
        return{
          ...state, users: action.users
      }
      }
      default: 
          return state;
  }
}

export const setCoursesAC = (courses) => ({type:SET_COURSES, courses})
export const setIsFetchingAC = (isFetching)=>({type:COURSES_IS_FETCHING, isFetching})
export const setUsersAC = (users) => ({type:SET_USERS, users})

export function getCoursesThunk(id){
  return (dispatch) =>{
    dispatch(setIsFetchingAC(true));
    API.getCourses(id).then(data =>{
      dispatch(setCoursesAC(data));
       dispatch(setIsFetchingAC(false))
    })
  }
}

//Можно оптимизировать. Вместо отправления еще одного запроса на сервер, создать AC, который будет добавлять курс в state.
export function addCourseThunk(groupId,data){
  return(dispatch) => {
    API.createCourse(groupId,data).then(data => {
      console.log(data);
      dispatch(getCoursesThunk(groupId));
    })
  }
}

export function getListAllUsersThunk(){
  return(dispatch) => {
    API.getListAllUsers().then(data => {
      dispatch(setUsersAC(data));
    })
  }
}
export default coursesReducer;