import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Card, ListGroup, Tab, Tabs, Badge } from "react-bootstrap";
import {Row, Container } from "react-bootstrap"
class RequirementsCourse extends React.Component {
    
    render(){
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
                        <Tab eventKey="contact" title="Уведомления" >
                         <Card>  
                        {this.props.notifications.map((value) => {
                         return <ListGroup variant="flush" >
                            <ListGroup.Item>
                                {value.text}
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

export default RequirementsCourse