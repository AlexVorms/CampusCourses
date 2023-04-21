import React from "react";

import { Card, ListGroup, Tab, Tabs, Row, Col } from "react-bootstrap";

class TeachersCourseData extends React.Component {
    constructor(props){
        super(props);
        this.TranslationStatus = this.TranslationStatus.bind(this);
        this.midtermResult = this.midtermResult.bind(this);
    }
    TranslationStatus(status){
        if(status === 'Accepted'){
            return <div className='text-success'>Статус - принят в группу</div>
        }
    }
    midtermResult(result){
        
        if (result === null){
            return  <span className="badge text-bg-secondary">Отметки нет</span>
        }
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
                         return <ListGroup variant="flush"  key = {value.id}>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <h6>{value.name}</h6>
                                        <div>{this.TranslationStatus(value.status)}</div>
                                        <div className = 'text-muted'>{value.email}</div>
                                    </Col>
                                    <Col>
                                    <div>Промежуточная аттестация - {this.midtermResult(value.midtermResult)}</div>
                                    </Col>
                                    <Col>
                                    <div>Финальная аттестация - {this.midtermResult(value.finalResult)}</div>
                                    </Col>
                                </Row>
                            
                            </ListGroup.Item>
                         </ListGroup>
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