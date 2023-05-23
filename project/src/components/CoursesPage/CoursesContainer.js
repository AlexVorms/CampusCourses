import { connect } from "react-redux";
import { getCoursesThunk, getListAllUsersThunk, addCourseThunk, deleteCourseThunk } from "../../reducers/coursesReducer";
import Courses from "./Courses";
import { useParams } from 'react-router-dom';
import React from "react";
import { Navigate } from "react-router-dom";


export function withRouter(Children){
    return(props)=>{
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 } 

 class CoursesContainer extends React.Component {
    componentDidMount(){
            this.props.getCoursesThunk(this.props.match.params.id);
            if (this.props.Role.isAdmin){
                this.props.getListAllUsersThunk();
            }
      }

      render(){
        return (<div>
             {this.props.isAuth? <Courses {...this.props} groupId = {this.props.match.params.id}/> : <Navigate to = '/login'/>}
             </div>)
      }
 }
let mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        courses: state.coursesPage.courses,
        isFetching: state.coursesPage.isFetching,
        Role: state.auth.Role,
        users: state.coursesPage.users
    }
}

let WithUrlDataContainerComponent = withRouter(CoursesContainer);
export default connect(mapStateToProps, { getCoursesThunk, getListAllUsersThunk, addCourseThunk, deleteCourseThunk})(WithUrlDataContainerComponent);
