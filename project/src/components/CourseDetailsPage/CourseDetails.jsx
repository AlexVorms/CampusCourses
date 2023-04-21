import React from "react";
import { Container } from "react-bootstrap";
import BasicCourseData from "./BasicCourseData";
import RequirementsCourse from "./RequirementsCourse";
import Preloader from '../common/Preloader';
import TeachersCourseData from "./TeachersCourseData";
class CourseDetails extends React.Component {
    render(){
     
        return <> 
        {this.props.isFetching ? <Preloader/> : (
            <div className = 'p-2'>
                <h2>{this.props.name}</h2>
                <Container className = 'p-2'>
                    <h4>Основная информация</h4>
                    <BasicCourseData startYear= {this.props.startYear}
                    maximumStudentsCount = {this.props.maximumStudentsCount}
                    studentsEnrolledCount = {this.props.studentsEnrolledCount}
                    studentsInQueueCount = {this.props.studentsInQueueCount}
                    status = {this.props.status}
                    semester = {this.props.semester}
                    signUpCourseThink = {this.props.signUpCourseThink}
                    id = {this.props.id}/>
                    <RequirementsCourse requirements = {this.props.requirements}
                    annotations = {this.props.annotations}
                    notifications = {this.props.notifications}/>
                    <TeachersCourseData students = {this.props.students}
                    teachers = {this.props.teachers}/>
                </Container>

            </div>
        )
    }
        </> 
    }
}

export default CourseDetails;