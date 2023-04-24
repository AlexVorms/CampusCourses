import { API } from "../Api/API";

const SET_COURSE_DETAILS = 'SET_COURSE_DETAILS';
const COURSE_IS_FETCHING = 'COURSE_IS_FETCHING';
const CHANGE_STUDENT_STATUS = 'CHANGE_STUDENT_STATUS';

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
    courseState.students = [...state.students];
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
        case COURSE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        case CHANGE_STUDENT_STATUS:{
            courseState.students = state.students.map(n => {
                if(n.id === action.id){
                    var studentCopy = { ...n };
                    studentCopy.status = action.status;
                    return studentCopy;
                }
                return n;
            });
            return courseState;
        }
        default: 
            return courseState;
    }

}

export const setCourseDetailsAC = (data) =>({type:SET_COURSE_DETAILS, data:data})
export const setIsFetchingAC = (isFetching)=>({type:COURSE_IS_FETCHING, isFetching})
export const editStudentStatusAC = (id, status) => ({type:CHANGE_STUDENT_STATUS, id,status})
//THUNKS

export function getCourseDetailsThunk(id){
    return(dispatch)=>{
        dispatch(setIsFetchingAC(true));
        API.getCourseDetails(id).then(data =>{
            dispatch(setCourseDetailsAC(data))
            dispatch(setIsFetchingAC(false))
        })
    }
}

export function signUpCourseThink(id){
    return(dispatch)=>{
        API.SignUpCourse(id).then(data => {
            console.log(data);
        })
    }
}

export function editStatusCourseThunk(id, status){
    return(dispatch) => {
        API.editStatusCourse(id,status).then(data => {
            console.log(data);
        })
    }
}

export function editStudentStatusThunk(id, studentId, status){
    return(dispatch) => {
        API.editStudentStatus(id, studentId, status).then(data => {
            console.log(data);
            dispatch(editStudentStatusAC(studentId, status))
        })
    }
}
export default courseDetailsReducer;