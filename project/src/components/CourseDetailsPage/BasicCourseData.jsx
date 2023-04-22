import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { ListGroup,Button } from 'react-bootstrap';
import ModalForEditStatusCourse from './ModalForEditStatusCourse';
class BasicCourseData extends React.Component {
    constructor(props) {
        super(props);
        this.FoundSemester = this.FoundSemester.bind(this);
        this.TranslationSemester = this.TranslationSemester.bind(this);
        this.SignUp = this.SignUp.bind(this);
      }
    FoundSemester(){
        if (this.props.semester === 'Autumn'){
            return 'Осенний'
        }
        else if(this.props.semester === 'Spring'){
            return 'Весенний'
        }
        else if(this.props.semester === 'Summer'){
            return 'Летний'
        }
        else if(this.props.semester === 'Winter'){
            return 'Зимний'
        }
    }

    TranslationSemester(){
        if(this.props.status ==='Started'){
            return <div className = 'text-primary'>В процессе обучения</div>
        }
        else if(this.props.status === 'OpenForAssigning'){
            return <div className = 'text-success'>Открыт для записи</div>
        }
        else if(this.props.status === 'Created'){
            return <div className = 'text-secondary'>Создан</div>
        }
        else if(this.props.status === 'Finished'){
            return <div className = 'text-danger'>Закрыт</div>
        }
    }
    SignUp(){
        this.props.signUpCourseThink(this.props.id)
        alert('Вы записались на курс')
    }
    render(){
    
        return (
            <Card>
                <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                            <Row>
                                <Col>
                                <h5>Статус курса</h5>
                                <div>{this.TranslationSemester()}</div>
                                </Col>

                                <Col>
                                <div className = 'col d-grid gap-2 d-md-flex justify-content-md-end'>
                                    {this.props.status === 'OpenForAssigning'? 
                                    <button type="button" className="btn btn-secondary"  onClick={this.SignUp}>Записаться на курс</button>
                                    : null}
                                    {this.props.Role.isAdmin? 
                                    <ModalForEditStatusCourse editStatusCourseThunk= {this.props.editStatusCourseThunk} id = {this.props.id}/>
                                     : null}
                                </div>
                                </Col>
                                
                            </Row>
                           
                    </ListGroup.Item>
                    <ListGroup.Item>
                            <div className = 'row'>
                                    <div className = 'col-6'>
                                        <h5>Учебный год</h5>
                                        <div>{this.props.startYear}</div>
                                    </div>
                                    <div className = 'col-6'>
                                        <h5>Семестр</h5>
                                        <div>{this.FoundSemester()}</div>
                                    </div>
                                </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className = 'row'>
                            <div className = 'col-6'>
                                <h5>Всего мест</h5>
                                <div>{this.props.maximumStudentsCount}</div>
                            </div>
                            <div className = 'col-6'>
                                <h5>Студентов зачислено</h5>
                                <div>{this.props.studentsEnrolledCount}</div>
                            </div>
                        </div>
                        
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h5>Заявок на рассмотрении</h5>
                        <div>{this.props.studentsInQueueCount}</div>
                    </ListGroup.Item>
                </ListGroup>
                </Card.Body>
            </Card>
        )
    }
}

export default BasicCourseData