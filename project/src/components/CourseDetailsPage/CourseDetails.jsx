import React from "react";
import { Container } from "react-bootstrap";
import BasicCourseData from "./BasicCourseData";
import RequirementsCourse from "./RequirementsCourse";

class CourseDetails extends React.Component {
    render(){
        return (
            <div className = 'p-2'>
                <h2>{this.props.name}</h2>
                <Container className = 'p-2'>
                    <h4>Основная информация</h4>
                    <BasicCourseData startYear= {this.props.startYear}
                    maximumStudentsCount = {this.props.maximumStudentsCount}
                    studentsEnrolledCount = {this.props.studentsEnrolledCount}
                    studentsInQueueCount = {this.props.studentsInQueueCount}
                    status = {this.props.status}
                    semester = {this.props.semester}/>
                    <RequirementsCourse requirements = {this.props.requirements}/>
                </Container>

            </div>
        )
    }
}

export default CourseDetails;