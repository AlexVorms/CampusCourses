import React from 'react';
import { Card, ListGroup, Tab, Tabs, Row, Col } from "react-bootstrap";

class StudentsList extends React.Component {
    constructor(props){
        super(props);
        this.TranslationStatus = this.TranslationStatus.bind(this);
        this.midtermResult = this.midtermResult.bind(this);
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

    midtermResult(result){
        
        if ((result === null)|| (result === 'NotDefined')){
            return  <span className="badge text-bg-secondary">Отметки нет</span>
        }
        else if (result === 'Passed') {
            return  <span className="badge text-bg-success">Успешно пройдена</span>
        }
        else if (result === "Failed"){
            return  <span className="badge text-bg-danger">Провалена</span>
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
                                    {this.props.status === 'Accepted' && (this.props.Role.isAdmin || this.props.Role.isTeacher)? <Col>
                                    <div >Промежуточная аттестация - {this.midtermResult(this.props.midtermResult)}</div>
                                    </Col>
                                     : null}
                                      {this.props.status === 'Accepted' && (this.props.Role.isAdmin || this.props.Role.isTeacher)? <Col>
                                    <div>Финальная аттестация - {this.midtermResult(this.props.finalResult)}</div>
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