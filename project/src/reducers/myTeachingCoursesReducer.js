import { API } from "../Api/API";

const SET_MY_TEACHING_COURSES = 'SET_MY_TEACHING_COURSES';
const MY_TEACHING_COURSE_IS_FETCHING = 'MY_TEACHING_COURSE_IS_FETCHING';

let initialState = {
  MyTeachingCourses:[
  ],
  isFetching: false
};
const MyTeachingCoursesReducer = (state = initialState, action) =>{
  switch(action.type){
      case SET_MY_TEACHING_COURSES:{
          return{
              ...state, MyTeachingCourses: action.MyTeachingCourses
          }
      }
      case MY_TEACHING_COURSE_IS_FETCHING:{
        return {...state, isFetching: action.isFetching}
    }
      default: 
          return state;
  }
}

export const setCoursesAC = (MyTeachingCourses) => ({type:SET_MY_TEACHING_COURSES, MyTeachingCourses})
export const setIsFetchingAC = (isFetching)=>({type:MY_TEACHING_COURSE_IS_FETCHING, isFetching})

export  function getMyTeachingCoursesThunk(){
  return (dispatch) =>{
    dispatch(setIsFetchingAC(true));
    API.getMyTeachingCourses().then(data =>{
       dispatch(setCoursesAC(data));
       dispatch(setIsFetchingAC(false))
    })
  }
}
export default MyTeachingCoursesReducer;