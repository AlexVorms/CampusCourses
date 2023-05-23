import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Row, Col} from 'react-bootstrap'



class ModalForEditStatusCourse extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          show: false,
          selectSemester:''
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }
    

   handleClose(){
    this.setState({show: false});
    }
    handleShow(){
        this.setState({show: true});
    }
    handleSubmit() {
      this.props.editStatusCourseThunk(this.props.id,this.state.selectSemester)
      this.handleClose();
    }


    callThisSemester = (e) => {
      this.setState({selectSemester: e.target.id});
    }

    render(){
  return (
    <>
        
         <Button variant="outline-warning" onClick={this.handleShow}>Изменить</Button>
        

      <Modal show={this.state.show} onHide={this.handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Изменение статуса курса</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
  
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3" onChange={this.callThisSemester}>
              <Row>
                <Col>
                    <Form.Check
                    inline
                    type='radio'
                    name="group1"
                    label={`Открыт для записи`}
                    id={`OpenForAssigning`}
                    />
                </Col>
                <Col>
                    <Form.Check
                    inline
                    type='radio'
                    name="group1"
                    label={`В процессе обучения`}
                    id={`Started`}
                    />
                </Col>

                <Col>
                    <Form.Check
                    inline
                    type='radio'
                    name="group1"
                    label={`Закрыт`}
                    id={`Finished`}
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

export default ModalForEditStatusCourse ;