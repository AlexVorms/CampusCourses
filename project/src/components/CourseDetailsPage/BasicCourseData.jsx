import React from 'react';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
class BasicCourseData extends React.Component {
    constructor(props) {
        super(props);
        this.FoundSemester = this.FoundSemester.bind(this);
        this.TranslationSemester = this.TranslationSemester.bind(this);
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
    render(){
        return (
            <Card>
                <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                            <div className='col-12 '>
                                <h5>Статус курса</h5>
                                <div>{this.TranslationSemester()}</div>
                            </div>
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