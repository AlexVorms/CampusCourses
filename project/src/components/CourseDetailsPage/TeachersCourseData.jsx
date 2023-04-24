import React from "react";

import { Card, ListGroup, Tab, Tabs, Row, Col } from "react-bootstrap";
import StudentsList from "./StudentsList";

class TeachersCourseData extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (

            <div className = 'p-2'>
                <Tabs defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        justify>
                        <Tab eventKey="home" title="Преподаватели">
                            <Card>  
                        {this.props.teachers.map((value) => {
                         return <ListGroup variant="flush" key = {value.email} >
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
                         return <StudentsList
                            studentId = {value.id}
                            courseId = {this.props.id}
                            name = {value.name}
                            status = {value.status}
                            email = {value.email}
                            Role = {this.props.Role}
                            midtermResult = {value.midtermResult}
                            finalResult = {value.finalResult}
                           editStudentStatusThunk = {this.props.editStudentStatusThunk}
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