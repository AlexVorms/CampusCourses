import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from 'react-bootstrap';

class Registration extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        birsday:'',
        email:'',
        password:''
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({name: event.target.value});
        this.setState({email: event.target.value});
      }
    
      handleSubmit(event) {
       console.log(this.state);
        event.preventDefault();
      }
    
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Регистрация нового пользователя</h1>
                    <Form>
                    <Form.Label>ФИО</Form.Label>
                        <Form.Control type="name" value={this.state.name} onChange={this.handleChange}/>

                    <Form.Label>День Рождения</Form.Label>
                    <Form.Control type="date" />

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={this.state.email} onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                        Email будет использоваться для входа в систему
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" value={this.state.password} onChange={this.handleChange} />
                        <Form.Label>Повторите пароль</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Зарегистрироваться
                    </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Registration;