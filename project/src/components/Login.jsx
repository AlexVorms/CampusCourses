import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from 'react-bootstrap';

class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Авторизация</h1>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Войти
                        </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;