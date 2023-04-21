import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Row, Col} from 'react-bootstrap'

class ModalForCreateCourse extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: false};
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.nameRef = React.createRef();
    }
    
    
   handleClose(){
    this.setState({show: false});
    }
    handleShow(){
        this.setState({show: true});
    }
    handleSubmit() {
      console.log('Отправленное имя: ' + this.nameRef.current.value);
      this.handleClose();
    }
    render(){
  return (
    <>
      <Button variant="outline-primary" onClick={this.handleShow}>
       Создать курс
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Создание курса</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Название курса</Form.Label>
              <Form.Control
                type="name"
                autoFocus
                ref={this.nameRef}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Год начала курса</Form.Label>
              <Form.Control
                type="name"
                autoFocus
                ref={this.nameRef}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Общее количество мест</Form.Label>
              <Form.Control
                type="name"
                autoFocus
                ref={this.nameRef}/>
            </Form.Group>

            

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Семестр</Form.Label>
              <Row>
                <Col>
                    <Form.Check
                    inline
                    type='radio'
                    name="group1"
                    label={`Осенний`}
                    id={`Autumn`}
                    />
                </Col>
                <Col>
                    <Form.Check
                    inline
                    type='radio'
                    name="group1"
                    label={`Весенний`}
                    id={`Spring`}
                    />
                </Col>
              </Row>
              
         
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Отмена
          </Button>
          <Button variant="primary" onClick={this.handleSubmit}>
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
}

export default ModalForCreateCourse ;