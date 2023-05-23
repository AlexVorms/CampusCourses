import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';

function Registration(props){
        const {control,
            handleSubmit,
            formState:{errors},
            getValues 
            } = useForm({
            defaultValues:{
                fullName: '',
                birthDate: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        });

        const formSubmit = (data) => {
            console.log(data)
           props.handleOnClick(data)
        };
        const confirmPassword = (value) => {
            return value === getValues('password')
        };
        return (
            <Container className="mt-3">
                <Row className="mb-3"> 
                    <Col>
                        <h1>Регистрация нового пользователя</h1>
                        <Form noValidate >
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label>ФИО</Form.Label>
                                    <Controller
                                    name = 'fullName'
                                    control={control}
                                    rules = {{
                                        required: true,
                                        minLength: 1
                                    }}
                                    render = {({field}) => (
                                    <Form.Control 
                                        isInvalid={errors.fullName}
                                        type="text"
                                        {...field}
                                        placeholder="First name"
                                    />
                                    )}
                                    />
                                    {errors.fullName?.type === 'minLength' && (
                                        <Form.Control.Feedback type="invalid">
                                        Минимальная длина 1
                                    </Form.Control.Feedback>
                                    )}
                                    {errors.fullName?.type === 'required' && (
                                        <Form.Control.Feedback type="invalid">
                                        Это обязательное поле ввода
                                    </Form.Control.Feedback>
                                    )}
                            </Form.Group>


                            <Form.Group as={Col} md="12" controlId="validationCustom06">
                                <Form.Label>Дата рождения</Form.Label>
                                    <Controller
                                    name = 'birthDate'
                                    control={control}
                                    rules = {{
                                        required: true,
                                    }}
                                    render = {({field}) => (
                                    <Form.Control 
                                        isInvalid={errors.birthDate}
                                        type="date"
                                        {...field}
                                        placeholder="birthDate"
                                    />
                                    )}
                                    />
                                    {errors.birthDate?.type === 'required' && (
                                        <Form.Control.Feedback type="invalid">
                                        Это обязательное поле ввода
                                    </Form.Control.Feedback>
                                    )}
                            </Form.Group>

                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                            <Form.Label>Email</Form.Label>
                            <Controller
                            name = 'email'
                            control={control}
                            rules = {{
                                required:true,
                                pattern:{
                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
                                } 
                            }}
                            render = {({field}) => (
                            <Form.Control 
                                isInvalid={errors.email}
                                type="text"
                                {...field}
                                placeholder="Email"
                            />
                            )}
                            />
                            {errors.email?.type === 'pattern' && (
                                <Form.Control.Feedback type="invalid">
                                Некорректный email
                               </Form.Control.Feedback>
                            )}
                            {errors.email?.type === 'required' && (
                                <Form.Control.Feedback type="invalid">
                                Это обязательное поле ввода
                               </Form.Control.Feedback>
                            )}
                            </Form.Group>



                            <Form.Group as={Col} md="12" controlId="validationCustom03">
                                <Form.Label>Пароль</Form.Label>
                                    <Controller
                                    name = 'password'
                                    control={control}
                                    rules = {{
                                        required: true,
                                        minLength: 6,
                                        maxLength: 32,
                                        pattern:{
                                            value:/^(?=.*?[0-9])/i
                                        }
                                    }}
                                    render = {({field}) => (
                                    <Form.Control 
                                        isInvalid={errors.password}
                                        type="text"
                                        {...field}
                                        placeholder="password"
                                    />
                                    )}
                                    />
                                    {errors.password?.type === 'minLength' && (
                                        <Form.Control.Feedback type="invalid">
                                        Минимальная длина 6
                                    </Form.Control.Feedback>
                                    )}
                                    {errors.password?.type === 'maxLength' && (
                                        <Form.Control.Feedback type="invalid">
                                       Максимальная длина 32
                                    </Form.Control.Feedback>
                                    )}
                                    {errors.password?.type === 'required' && (
                                        <Form.Control.Feedback type="invalid">
                                        Это обязательное поле ввода
                                    </Form.Control.Feedback>
                                    )}
                                    {errors.password?.type === 'pattern' && (
                                        <Form.Control.Feedback type="invalid">
                                        В пароле должна быть хотя бы одна цифра
                                    </Form.Control.Feedback>
                                    )}
                            </Form.Group>



                            <Form.Group as={Col} md="12" controlId="validationCustom04">
                                <Form.Label>Повторите пароль</Form.Label>
                                    <Controller
                                    name = 'confirmPassword'
                                    control={control}
                                    rules = {{
                                        validate: confirmPassword,
                                        required: true,
                                        minLength: 6,
                                        maxLength: 32
                                    }}
                                    render = {({field}) => (
                                    <Form.Control 
                                        isInvalid={errors.confirmPassword}
                                        type="text"
                                        {...field}
                                        placeholder="confirmPassword"
                                    />
                                    )}
                                    />
                                    {errors.confirmPassword?.type === 'minLength' && (
                                        <Form.Control.Feedback type="invalid">
                                        Минимальная длина 6
                                    </Form.Control.Feedback>
                                    )}
                                    {errors.confirmPassword?.type === 'required' && (
                                        <Form.Control.Feedback type="invalid">
                                        Это обязательное поле ввода
                                    </Form.Control.Feedback>
                                    )}
                                    {errors.confirmPassword?.type === 'maxLength' && (
                                        <Form.Control.Feedback type="invalid">
                                       Максимальная длина 32
                                    </Form.Control.Feedback>
                                    )}
                                    {errors.confirmPassword?.type === 'validate' && (
                                        <Form.Control.Feedback type="invalid">
                                        Пароли должны совпадать
                                    </Form.Control.Feedback>
                                    )}
                            </Form.Group>
                           
                            <Button className="mt-3" type="button" onClick = {handleSubmit(formSubmit)}>Зарегистрироваться</Button>
                            
                         </Form>
                    </Col>
                </Row>
            </Container>
        );
}

export default Registration;