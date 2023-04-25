import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Row, Col, FormLabel} from 'react-bootstrap'



class ModalForEditStudentStatus extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          show: false,
          selectSemester:''
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.midtermResult = this.midtermResult.bind(this);
         this.TranslateResult = this.TranslateResult.bind(this);
    }
    

   handleClose(){
    this.setState({show: false});
    }
    handleShow(){
        this.setState({show: true});
    }
    handleSubmit() {
      console.log(this.props.courseId ,this.props.studentId, this.props.markType, this.state.selectSemester)
     this.props.editStudentMarkThunk(this.props.courseId ,this.props.studentId, this.props.markType, this.state.selectSemester)
      this.handleClose();
    }


    callThisSemester = (e) => {
      this.setState({selectSemester: e.target.id});
    }
    midtermResult(result){
        
        if ((result === null)|| (result === 'NotDefined')){
            return  <span className="badge text-bg-secondary">Отметки нет</span>
        }
        else if (result === 'Passed') {
            return  <span className="badge text-bg-success">Успешно пройдена</span>
        }
        else if (result === "Failed"){
            return  <span className="badge text-bg-danger">Провалена</span>
        }
    }

    TranslateResult(){
        if(this.props.markType === 'Midterm'){
            return 'Промежуточная аттестация'
        }
        else if (this.props.markType === 'Final'){
            return 'Финальная аттестация'
        }
    }
    render(){
  return (
    <>
        <Col>
         <div type = 'button' onClick={this.handleShow}> {this.TranslateResult()} - {this.midtermResult(this.props.Result)}</div>
         </Col>

      <Modal show={this.state.show} onHide={this.handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Изменение отметки для {this.TranslateResult()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormLabel>Студент - {this.props.name}</FormLabel>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3" onChange={this.callThisSemester}>
              <Row>
                <Col>
                    <Form.Check
                    inline
                    type='radio'
                    name="group1"
                    label={`Пройдено`}
                    id={`Passed`}
                    />
                </Col>
                <Col>
                    <Form.Check
                    inline
                    type='radio'
                    name="group1"
                    label={`Провалено`}
                    id={`Failed`}
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

export default ModalForEditStudentStatus ;