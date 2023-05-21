import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BasicCourseData from "./BasicCourseData";
import RequirementsCourse from "./RequirementsCourse";
import Preloader from '../common/Preloader';
import TeachersCourseData from "./TeachersCourseData";
import ModalForEditCourse from "./ModalForEditCourse";


class CourseDetails extends React.Component {
    render(){
        return <> 
        {this.props.isFetching ? <Preloader/> : (
            <div className = 'p-2'>
               
                <Container className = 'p-2'>
                <h2>{this.props.name}</h2>
                    <Row className = 'p-2'>
                        <Col>
                        <h4>Основная информация</h4>
                        </Col>
                        <Col>
                        { (this.props.Role.isAdmin || this.props.IsTeacherCourse)? <div className = 'col d-grid gap-2 d-md-flex justify-content-md-end'>
                                 <ModalForEditCourse editCourseThunk = {this.props.editCourseThunk}  id = {this.props.id}/>
                            </div> : null}
                           
                        </Col>
                    </Row>
                   
                    <BasicCourseData startYear= {this.props.startYear}
                    maximumStudentsCount = {this.props.maximumStudentsCount}
                    studentsEnrolledCount = {this.props.studentsEnrolledCount}
                    studentsInQueueCount = {this.props.studentsInQueueCount}
                    status = {this.props.status}
                    semester = {this.props.semester}
                    signUpCourseThink = {this.props.signUpCourseThink}
                    id = {this.props.id}
                    Role = {this.props.Role}
                    editStatusCourseThunk = {this.props.editStatusCourseThunk}
                    IsTeacherCourse = {this.props.IsTeacherCourse}/>
                    <RequirementsCourse id = {this.props.id} 
                    requirements = {this.props.requirements}
                    annotations = {this.props.annotations}
                    notifications = {this.props.notifications}
                    Role = {this.props.Role}
                    AddNotificationsThunk = {this.props.AddNotificationsThunk}
                    IsTeacherCourse = {this.props.IsTeacherCourse}/>
                    <TeachersCourseData students = {this.props.students}
                    teachers = {this.props.teachers}
                    Role = {this.props.Role}
                    id = {this.props.id}
                    editStudentStatusThunk = {this.props.editStudentStatusThunk}
                    editStudentMarkThunk = {this.props.editStudentMarkThunk}
                    users = {this.props.users}
                    addTeacherThunk = {this.props.addTeacherThunk}
                    IsTeacherCourse = {this.props.IsTeacherCourse}/>
                </Container>

            </div>
        )
    }
        </> 
    }
}

export default CourseDetails;