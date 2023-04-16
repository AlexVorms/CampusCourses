import { API } from "../Api/API";
const SET_COURSE_DETAILS = 'SET_COURSE_DETAILS';
let initialState = {
    id: null,
    name: null,
    startYear: null,
    maximumStudentsCount: null,
    studentsEnrolledCount: null,
    studentsInQueueCount: null,
    requirements: null,
    annotations: null,
    status: null,
    semester: null,
    students:[],
    teachers:[],
    notifications:[],
    isFetching: false
};

const courseDetailsReducer = (state = initialState, action) => {
    let courseState = {...state};
    switch(action.type){
        case SET_COURSE_DETAILS:{
            courseState.id = action.data.id
            courseState.name = action.data.name
            courseState.startYear = action.data.startYear
            courseState.maximumStudentsCount = action.data.maximumStudentsCount
            courseState.studentsEnrolledCount = action.data.studentsEnrolledCount
            courseState.studentsInQueueCount = action.data.studentsInQueueCount
            courseState.requirements = action.data.requirements
            courseState.annotations = action.data.annotations
            courseState.status = action.data.status
            courseState.semester = action.data.semester
            courseState.students = action.data.students
            courseState.teachers = action.data.teachers
            courseState.notifications = action.data.notifications
            return courseState
            
        }
        default: 
            return courseState;
    }

}

export const setCourseDetailsAC = (data) =>({type:SET_COURSE_DETAILS, data:data})

//THUNKS

export function getCourseDetailsThunk(id){
    return(dispatch)=>{
        API.getCourseDetails(id).then(data =>{
            dispatch(setCourseDetailsAC(data))
        })
    }
}

export default courseDetailsReducer;