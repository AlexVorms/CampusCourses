import { API } from "../Api/API";

const SET_COURSE_DETAILS = 'SET_COURSE_DETAILS';
const COURSE_IS_FETCHING = 'COURSE_IS_FETCHING';
const CHANGE_STUDENT_STATUS = 'CHANGE_STUDENT_STATUS';
const CHANGE_STUDENT_MIDTERM_RESULT = 'CHANGE_STUDENT_MIDTERM_RESULT';
const CHANGE_STUDENT_FINAL_RESULT = 'CHANGE_STUDENT_FINAL_RESULT';
const EDIT_COURSE = 'EDIT_COURSE';
const EDIT_COURSE_STATUS = 'EDIT_COURSE_STATUS';
const ADD_NOTIFICATION = 'ADD_NOTIFICATION';

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
    courseState.teachers = [...state.teachers];
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
        case CHANGE_STUDENT_FINAL_RESULT:{
            courseState.students = state.students.map(n => {
                if(n.id === action.id){
                    var studentCopy = { ...n };
                    studentCopy.finalResult = action.finalResult;
                    return studentCopy;
                }
                return n;
            });
            return courseState;
        }
        case CHANGE_STUDENT_MIDTERM_RESULT:{
            courseState.students = state.students.map(n => {
                if(n.id === action.id){
                    var studentCopy = { ...n };
                    studentCopy.midtermResult = action.midtermResult;
                    return studentCopy;
                }
                return n;
            });
            return courseState;
        }
        case EDIT_COURSE:{
            courseState.requirements = action.data.requirements
            courseState.annotations = action.data.annotations
            return courseState
        }
        case ADD_NOTIFICATION:{
            courseState.notifications.push(action.data)
            return courseState
        }
        case EDIT_COURSE_STATUS:{
            courseState.status = action.CourseStatus
            return courseState
        }
        default: 
            return courseState;
    }

}

export const setCourseDetailsAC = (data) =>({type:SET_COURSE_DETAILS, data:data})
export const setIsFetchingAC = (isFetching)=>({type:COURSE_IS_FETCHING, isFetching})
export const editStudentStatusAC = (id, status) => ({type:CHANGE_STUDENT_STATUS, id,status})
export const editStudentFinalMarkAC = (id, finalResult) => ({type:CHANGE_STUDENT_FINAL_RESULT, id, finalResult})
export const editStudentMidtermMarkAC = (id, midtermResult) => ({type: CHANGE_STUDENT_MIDTERM_RESULT, id, midtermResult})
export const editCourseAC = (requirements, annotations) => ({type: EDIT_COURSE, data:{requirements, annotations}})
export const AddNotificationAC = (text, isImportant) => ({type:ADD_NOTIFICATION, data:{text, isImportant}})
export const editCourseStatusAC = (CourseStatus) => ({type:EDIT_COURSE_STATUS, CourseStatus})
//THUNKS

export function getCourseDetailsThunk(id){
    return async dispatch =>{
        try{
            dispatch(setIsFetchingAC(true));
           await API.getCourseDetails(id).then(data =>{
                dispatch(setCourseDetailsAC(data))
                dispatch(setIsFetchingAC(false))
            })
        }
        catch{

        }
       
    }
}

export function signUpCourseThink(id){
    return async dispatch =>{
        try{
            await API.SignUpCourse(id).then(async data => {
                await dispatch(getCourseDetailsThunk(id))
            })
        }
       catch(err){

       }
    }
}

export function editStatusCourseThunk(id, status){
    return(dispatch) => {
        API.editStatusCourse(id,status).then(data => {
            if(data.status === 200){
                dispatch(editCourseStatusAC(status))
            }
            else{
                alert('Что-то пошло не так')
            }
        })
    }
}

export function editStudentStatusThunk(id, studentId, status){
    return(dispatch) => {
        API.editStudentStatus(id, studentId, status).then(data => {
            if(data.status === 200){
            dispatch(editStudentStatusAC(studentId, status))
            }
        })
    }
}

export function editStudentMarkThunk(courseId, studentId, markType, mark ){
    return(dispatch)=>{
        API.editStudentMark(courseId, studentId, markType, mark).then(data => {
            
            if(markType === 'Midterm'){
                dispatch(editStudentMidtermMarkAC(studentId,mark))
            }
            else if (markType === 'Final'){
                dispatch(editStudentFinalMarkAC(studentId,mark))
            }
        })
    }
}

export function editCourseThunk(id, requirements, annotations){
    return(dispatch)=>{
        API.editCourse(id, requirements, annotations).then(data => {
            if(data.status === 200){
            dispatch(editCourseAC(requirements, annotations))
            }
        })
    }
}

export function addTeacherThunk(id, userId){
    return(dispatch) => {
        API.AddTeacher(id, userId).then(data => {
            if(data.status === 200){
            dispatch(getCourseDetailsThunk(id))
            }
        })
    }
}

export function AddNotificationsThunk(id, text, isImportant){
    return(dispatch) => {
        API.AddNotification(id, text, isImportant).then(data => {
            if(data.status === 200){
            dispatch(AddNotificationAC(text, isImportant))
            }
        })
    }
}
export default courseDetailsReducer;