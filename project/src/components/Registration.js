import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from 'react-bootstrap';

function Registration() {
  return (
    <Container>
        <Row>
            <Col>
                <h1>Регистрация нового пользователя</h1>
            <Form>
            <Form.Label>ФИО</Form.Label>
                <Form.Control type="name" />

            <Form.Label>День Рождения</Form.Label>
             <Form.Control type="date" />

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
                <Form.Text className="text-muted">
                Email будет использоваться для входа в систему
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" />
                <Form.Label>Повторите пароль</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Зарегистрироваться
            </Button>
            </Form>
            </Col>
        </Row>
    </Container>
  );
}

export default Registration;