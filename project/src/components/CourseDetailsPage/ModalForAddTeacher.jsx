import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {FormLabel} from 'react-bootstrap'



class ModalForAddTeacher extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          show: false,
          selectValue: ''
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);

         this.nameRef = React.createRef();
        this.yearRef = React.createRef();
        this.maximumStudentsCountRef = React.createRef();

    }
    

   handleClose(){
    this.setState({show: false});
    }
    handleShow(){
        this.setState({show: true});
    }
    handleSubmit() {
      let mainTeacherId1 = this.state.selectValue;
      console.log(this.props.id ,mainTeacherId1);
      this.props.addTeacherThunk(this.props.id, mainTeacherId1)
      this.handleClose();
    }

    callThis = (e) => {
      this.setState({selectValue: e.target.value});
    }

    render(){
  return (
    <>
      <Button variant="outline-primary" onClick={this.handleShow}>
        Добавить преподавателя
        </Button>

      <Modal show={this.state.show} onHide={this.handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Добавление преподавателя на курс</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormLabel>Выберите преподавателя</FormLabel>
          <Form.Select aria-label="Default select example" onChange={this.callThis}>
      <option>Преподаватель</option>
      {this.props.users.map((user) => {
                    return <option value={user.id} key = {user.id}>{user.fullName}</option>  
                })
                }
    </Form.Select>

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

export default ModalForAddTeacher ;