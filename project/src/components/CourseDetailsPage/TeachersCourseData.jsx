import React from "react";

import { Card, ListGroup, Tab, Tabs, Col} from "react-bootstrap";
import StudentsList from "./StudentsList";
import ModalForAddTeacher from "./ModalForAddTeacher";

class TeachersCourseData extends React.Component {
    render(){
        let teacher_id = 0;
        let student_id = 0;
        return (

            <div className = 'p-2'>
                <Tabs defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        justify>
                        <Tab eventKey="home" title="Преподаватели">
                            <Card className='p-2'>  
                            {(this.props.Role.isAdmin || this.props.IsTeacherCourse)?   <Col className='p-2'> <ModalForAddTeacher users = {this.props.users}
                            addTeacherThunk = {this.props.addTeacherThunk} id = {this.props.id}/></Col> : null}
                               
                        {this.props.teachers.map((value) => {
                            teacher_id +=1;
                         return <ListGroup variant="flush" key = {teacher_id} >
                            <ListGroup.Item>
                            {value.isMain?
                                <div><h6>{value.name} <span className="badge text-bg-success">Основной</span></h6> 
                                </div>
                                
                                :<h6>{value.name}</h6>}
                                <div className = 'text-muted'>{value.email}</div>
                            </ListGroup.Item>
                         </ListGroup>
                        })
                         }
                         </Card> 
                        </Tab>
                        <Tab eventKey="profile" title="Студенты">
                        <Card>  
                        {this.props.students.map((value) => {
                            student_id += 1;
                         return <StudentsList
                            key = {student_id}
                            studentId = {value.id}
                            courseId = {this.props.id}
                            name = {value.name}
                            status = {value.status}
                            email = {value.email}
                            Role = {this.props.Role}
                            midtermResult = {value.midtermResult}
                            finalResult = {value.finalResult}
                           editStudentStatusThunk = {this.props.editStudentStatusThunk}
                           editStudentMarkThunk = {this.props.editStudentMarkThunk}
                           IsTeacherCourse = {this.props.IsTeacherCourse}
                         />
                        })
                         }
                         </Card> 
                        </Tab>
                        </Tabs>
            </div>
        )
    }
}

export default TeachersCourseData