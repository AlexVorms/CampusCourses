import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class ModalForEditGroup extends React.Component{
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
      this.props.editGroupThunk(this.nameRef.current.value, this.props.id)
      this.handleClose();
    }
    render(){
  return (
    <>
      <Button variant="outline-warning" onClick={this.handleShow}>
       Редактировать
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Редактирование группы</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Название группы</Form.Label>
              <Form.Control
                type="name"
                autoFocus
                ref={this.nameRef}/>
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

export default ModalForEditGroup ;