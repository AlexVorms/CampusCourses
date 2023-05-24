import React from 'react';
import {connect} from "react-redux";
import {getCourseDetailsThunk, signUpCourseThink, editStatusCourseThunk, editStudentStatusThunk, editStudentMarkThunk, editCourseThunk, addTeacherThunk, AddNotificationsThunk} from "../../reducers/courseDetailsReducer"
import {getMyCoursesThunk} from '../../reducers/myCoursesReducer'
import {getUserStatusThunk} from '../../reducers/authReducer'
import {getListAllUsersThunk} from "../../reducers/coursesReducer"
import { useParams } from 'react-router-dom';
import CourseDetails from './CourseDetails';
import { Navigate } from 'react-router-dom';
export function withRouter(Children){
    return(props)=>{
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 } 

class CourseDetailsPageContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          IsTeacherCourse : false,
          IsStudentCourse : false
        };
        this.changeTeacherstate = this.changeTeacherstate.bind(this);
        this.changeStudentstate = this.changeStudentstate.bind(this);
    }
     async changeTeacherstate(flag){
        this.setState({IsTeacherCourse : flag});
    }
    async changeStudentstate(flag){
         this.setState({IsStudentCourse : flag});
    }
    async componentDidMount(){
        
        await this.props.getCourseDetailsThunk(this.props.match.params.id);
        await this.props.getMyCoursesThunk();
       
        await this.changeTeacherstate(false);
        await this.changeStudentstate(false);
      
        for(var i = 0; i < this.props.teachers.length; i++ ){
            if(this.props.MyEmail === this.props.teachers[i].email){
                await this.changeTeacherstate(true)  
            }
        }
        for(var j = 0; j < this.props.MyCourses.length; j++ ){
            if(this.props.id === this.props.MyCourses[j].id){
                await this.changeStudentstate(true)  
            }
        }

        if(this.props.Role.isAdmin || this.state.IsTeacherCourse){
            await this.props.getListAllUsersThunk();
        }
        
    }
    render(){
        return (<div>
            {this.props.isAuth? <CourseDetails {...this.props} IsTeacherCourse = {this.state.IsTeacherCourse}
            IsStudentCourse = {this.state.IsStudentCourse}/> : <Navigate to = '/login'/>}
            </div>) 
    }
}

let mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        isFetching: state.courseDetailsPage.isFetching,
        id: state.courseDetailsPage.id,
        name: state.courseDetailsPage.name,
        startYear: state.courseDetailsPage.startYear,
        maximumStudentsCount: state.courseDetailsPage.maximumStudentsCount,
        studentsEnrolledCount: state.courseDetailsPage.studentsEnrolledCount,
        studentsInQueueCount: state.courseDetailsPage.studentsInQueueCount,
        requirements: state.courseDetailsPage.requirements,
        annotations: state.courseDetailsPage.annotations,
        status: state.courseDetailsPage.status,
        semester: state.courseDetailsPage.semester,
        students:state.courseDetailsPage.students,
        teachers:state.courseDetailsPage.teachers,
        notifications:state.courseDetailsPage.notifications,
        Role: state.auth.Role,
        MyEmail: state.auth.email,
        users: state.coursesPage.users,
        MyCourses: state.MyCoursesPage.MyCourses,
        isMain: state.courseDetailsPage.isMain
    }
}

let WithUrlDataContainerComponent = withRouter(CourseDetailsPageContainer);
export default connect(mapStateToProps, 
    {
    getCourseDetailsThunk, 
    signUpCourseThink,
    editStatusCourseThunk,
    editStudentStatusThunk,
    editStudentMarkThunk,
    editCourseThunk,
    getListAllUsersThunk,
    addTeacherThunk,
    AddNotificationsThunk,
    getMyCoursesThunk,
    getUserStatusThunk})(WithUrlDataContainerComponent);