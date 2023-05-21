import React from 'react';
import { Card, ListGroup, Tab, Tabs, Row, Col } from "react-bootstrap";
import ModalForEditStudentStatus from './ModalForEditStudentStatus';


class StudentsList extends React.Component {
    constructor(props){
        super(props);
        this.TranslationStatus = this.TranslationStatus.bind(this);
        this.DeclinedStatus = this.DeclinedStatus.bind(this);
        this.AcceptedStatus = this.AcceptedStatus.bind(this);
    }

    TranslationStatus(status){
        if(status === 'Accepted'){
            return <div className='text-success'>Статус - принят в группу</div>
        }
        else if(status === "InQueue"){
            return <div className='text-primary'>Статус - в очереди</div>
        }
        else if(status === "Declined"){
            return <div className='text-danger'>Статус - отклонен</div>
        }
    }


    DeclinedStatus(){
        console.log('зашел')
        this.props.editStudentStatusThunk(this.props.courseId,this.props.studentId, "Declined" )
    }

    AcceptedStatus(){
        console.log('зашел в принятие')
        this.props.editStudentStatusThunk(this.props.courseId,this.props.studentId, 'Accepted' )
    }
    render(){
        return (
                <ListGroup variant="flush"  key = {this.props.studentId}>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <h6>{this.props.name}</h6>
                                        <div>{this.TranslationStatus(this.props.status)}</div>
                                        <div className = 'text-muted'>{this.props.email}</div>
                                    </Col>
                                    {this.props.status === 'Accepted' && (this.props.Role.isAdmin || this.props.IsTeacherCourse)? <Col>
                                    <ModalForEditStudentStatus Result = {this.props.midtermResult} markType = {'Midterm'}  name = {this.props.name}
                                     studentId = {this.props.studentId} courseId = {this.props.courseId} editStudentMarkThunk = {this.props.editStudentMarkThunk}/>
                                   
                                    </Col>
                                     : null}
                                      {this.props.status === 'Accepted' && (this.props.Role.isAdmin || this.props.IsTeacherCourse)? <Col>
                                      <ModalForEditStudentStatus Result = {this.props.finalResult} markType = {'Final'} name = {this.props.name}
                                      studentId = {this.props.studentId} courseId = {this.props.courseId} editStudentMarkThunk = {this.props.editStudentMarkThunk}/>
                                    </Col>
                                     : null}
                                     
                                    {this.props.status === 'InQueue'?
                                         <div className = 'col d-grid gap-2 d-md-flex justify-content-md-end'>
                                            <button className="btn btn-outline-primary" onClick = {this.AcceptedStatus}>Принять</button>
                                            <button className="btn btn-outline-danger"  onClick = {this.DeclinedStatus}>Отклонить заявку</button>
                                        </div>
                                     : null}
                                </Row>
                            
                            </ListGroup.Item>
                         </ListGroup>
        )
    }
}

export default StudentsList