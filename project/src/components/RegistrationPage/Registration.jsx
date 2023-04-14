import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from 'react-bootstrap';

class Registration extends React.Component {
    constructor(props) {
      super(props);
     
      this.emailRef = React.createRef();
      this.passwordRef = React.createRef();
      this.fullNameRef = React.createRef();
      this.birthDateRef = React.createRef();
      this.passwordControlRef = React.createRef();
      this.onChange = this.onChange.bind(this);
    }
    
    onChange() {
        let password = this.passwordRef.current.value,
        passwordControl = this.passwordControlRef.current.value,
        email = this.emailRef.current.value,
        birthDate = this.birthDateRef.current.value,
        fullName = this.fullNameRef.current.value;
        if(password === passwordControl){
            let data = {
                fullName: fullName,
                birthDate: birthDate,
                email: email,
                password: password,
                confirmPassword: passwordControl
            }
            console.log(data);
           
            this.props.handleOnClick(data)
        }
        else{
           alert('Пароли не совпадают')
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Регистрация нового пользователя</h1>
                    <Form>
                    <Form.Label>ФИО</Form.Label>
                        <Form.Control type="name" ref={this.fullNameRef}/>

                    <Form.Label>День Рождения</Form.Label>
                    <Form.Control type="date" ref={this.birthDateRef}/>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"  ref={this.emailRef} />
                        <Form.Text className="text-muted">
                        Email будет использоваться для входа в систему
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" ref={this.passwordRef} />
                        <Form.Label>Повторите пароль</Form.Label>
                        <Form.Control type="password" ref={this.passwordControlRef}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="button" onClick={this.onChange}>
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