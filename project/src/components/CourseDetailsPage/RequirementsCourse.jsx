import React from "react";

import { Card, ListGroup, Tab, Tabs,Col} from "react-bootstrap";

import ModalForAddNotifications from "./ModalForAddNotifications";

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
                        <Card className='p-2'>  
                            
                            {this.props.Role.isAdmin?  <Col className='p-2'> <ModalForAddNotifications id = {this.props.id} 
                            AddNotificationsThunk = {this.props.AddNotificationsThunk}/></Col> : null}
                        
                        {this.props.notifications.map((value) => {
                         return <ListGroup  variant="flush" key = {value.text}>
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