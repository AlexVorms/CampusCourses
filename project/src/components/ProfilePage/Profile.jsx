import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from 'react-bootstrap';

class Profile extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
  
    return (
        <Container>
            <h1>Профиль</h1>
            <Row>
            <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" value={this.props.email} disabled />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              ФИО
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" value={this.props.fullName} />
            </Col>
          </Form.Group>
        
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              День рождения
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="date" />
            
            </Col>
          </Form.Group>


          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Изменить</Button>
            </Col>
          </Form.Group>
        </Form>
            </Row>
        </Container>
    )
  }
}

export default Profile;