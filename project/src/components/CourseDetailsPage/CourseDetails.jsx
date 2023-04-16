import React from "react";
import { Container } from "react-bootstrap";
import BasicCourseData from "./BasicCourseData";

class CourseDetails extends React.Component {
    render(){
        return (
            <div className = 'p-2'>
                <h1>{this.props.name}</h1>
                <Container>
                    <BasicCourseData startYear= {this.props.startYear}
                    maximumStudentsCount = {this.props.maximumStudentsCount}
                    studentsEnrolledCount = {this.props.studentsEnrolledCount}
                    studentsInQueueCount = {this.props.studentsInQueueCount}
                    status = {this.props.status}
                    semester = {this.props.semester}/>
                </Container>
            </div>
        )
    }
}

export default CourseDetails;