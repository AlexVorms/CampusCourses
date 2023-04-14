import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from 'react-bootstrap';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.onChange = this.onChange.bind(this);
    }
    onChange() {
        this.props.handleOnClick(this.emailRef.current.value, this.passwordRef.current.value);
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
                            <Form.Control type="email" 
                                ref={this.emailRef}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password"
                                ref={this.passwordRef}/>
                        </Form.Group>
                        
                        <Button variant="primary" onClick={this.onChange}>
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