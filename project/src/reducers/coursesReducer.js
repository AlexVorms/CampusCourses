import { API } from "../Api/API";

const SET_COURSES = 'SET_COURSES';
const COURSES_IS_FETCHING = 'COURSES_IS_FETCHING';
const SET_USERS = 'SET_USERS';
const DELETE_COURSE = 'DELETE_COURSE';
let initialState = {
  courses:[
  ],
  users:[],
  isFetching: false
};
const coursesReducer = (state = initialState, action) =>{
  let courseState = {...state};
  courseState.courses = [...state.courses];
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
      case DELETE_COURSE:{
        let array = [];
          courseState.courses.map((g) => {
                if(g.id !== action.id ){
                    array.push(g)
                }
            })
            courseState.courses = array;
            return courseState
        
      }
      default: 
          return state;
  }
}

export const setCoursesAC = (courses) => ({type:SET_COURSES, courses})
export const setIsFetchingAC = (isFetching)=>({type:COURSES_IS_FETCHING, isFetching})
export const setUsersAC = (users) => ({type:SET_USERS, users})
export const deleteCourseAC = (id) => ({type:DELETE_COURSE, id})


export function getCoursesThunk(id){
  return (dispatch) =>{
    dispatch(setIsFetchingAC(true));
    API.getCourses(id).then(data =>{
        dispatch(setCoursesAC(data));
        dispatch(setIsFetchingAC(false))

    })
  }
}


export function addCourseThunk(groupId,data){
  return(dispatch) => {
    API.createCourse(groupId,data).then(data => {

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

export function deleteCourseThunk(id){
  return(dispatch) => {
    API.deleteCourse(id).then(data => {

     dispatch(deleteCourseAC(id));

    })
  }
}
export default coursesReducer;