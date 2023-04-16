import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from 'react-bootstrap';

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.fullNameRef = React.createRef();
      this.birthDateRef = React.createRef();
      this.onChange = this.onChange.bind(this);
  }
  onChange(){
    console.log(this.fullNameRef.current.value,this.birthDateRef.current.value)
    this.props.handleOnClick(this.fullNameRef.current.value,this.birthDateRef.current.value)
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
              <Form.Control type="email" placeholder={this.props.email} disabled />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              ФИО
            </Form.Label>
            <Col sm={10}>
              <Form.Control  placeholder={this.props.fullName} ref={this.fullNameRef} />
            </Col>
          </Form.Group>
        
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              День рождения
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="date" className="form-control" value={this.props.birthDate} ref={this.birthDateRef}/>
            </Col>
          </Form.Group>


          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onClick={this.onChange}>Изменить</Button>
            </Col>
          </Form.Group>
        </Form>
            </Row>
        </Container>
    )
  }
}

export default Profile;