import React from "react";

import { Card, ListGroup, Tab, Tabs,Col, Badge} from "react-bootstrap";

import ModalForAddNotifications from "./ModalForAddNotifications";

class RequirementsCourse extends React.Component {
    constructor(props) {
        super(props);
        this.notificationsCount = this.notificationsCount.bind(this);
    }
    notificationsCount(){
        return this.props.notifications.length
    }
    render(){
        let id_letters = 0;
        return (
            <div className = 'p-2'>
                <Tabs defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        justify>
                        <Tab eventKey="home" title="Требования к курсу">
                            <div className="card-text" dangerouslySetInnerHTML={{ __html: this.props.requirements}}></div>
                        </Tab>
                        <Tab eventKey="profile" title="Аннотация">
                        <div className="card-text" dangerouslySetInnerHTML={{ __html: this.props.annotations}}></div>
                        </Tab>
                        <Tab eventKey="contact" title={<span>Уведомления <Badge bg="danger">{this.notificationsCount()}+</Badge> </span>}  >
                            
                        <Card className='p-2'>  
                            
                            {(this.props.Role.isAdmin || this.props.IsTeacherCourse)?   <Col className='p-2'> <ModalForAddNotifications id = {this.props.id} 
                            AddNotificationsThunk = {this.props.AddNotificationsThunk}/></Col> : null}
                        {this.props.notifications.map((value) => {
                            id_letters += 1;
                         return <ListGroup  variant="flush" key = {id_letters}>
                            {value.isImportant? <ListGroup.Item variant="primary">
                                {value.text} 
                            </ListGroup.Item> : <ListGroup.Item >
                                {value.text}
                            </ListGroup.Item>}
                            
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

export default RequirementsCourse