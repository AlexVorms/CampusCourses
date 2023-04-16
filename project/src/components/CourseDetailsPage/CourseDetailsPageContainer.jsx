import React from 'react';
import {connect} from "react-redux";
import {getCourseDetailsThunk} from "../../reducers/courseDetailsReducer"
import { useParams } from 'react-router-dom';
import CourseDetails from './CourseDetails';

export function withRouter(Children){
    return(props)=>{
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 } 

class CourseDetailsPageContainer extends React.Component {
    componentDidMount(){
        this.props.getCourseDetailsThunk(this.props.match.params.id);
    }
    render(){
        return (<div>
            {this.props.isAuth? <CourseDetails {...this.props}/> : null}
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
        notifications:state.courseDetailsPage.notifications

    }
}

let WithUrlDataContainerComponent = withRouter(CourseDetailsPageContainer);
export default connect(mapStateToProps, {getCourseDetailsThunk})(WithUrlDataContainerComponent);