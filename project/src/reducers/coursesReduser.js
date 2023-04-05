
const SET_COURSES = 'SET_COURSES';

let initialState = {
  courses:[
  ]
};
const coursesReducer = (state = initialState, action) =>{
  switch(action.type){
      case SET_COURSES:{
          return{
              ...state, courses:[...state.courses, ...action.courses]
          }
      }
      default: 
          return state;
  }
}

export const setCoursesAC = (courses) => ({type:SET_COURSES, courses})
export default coursesReducer;