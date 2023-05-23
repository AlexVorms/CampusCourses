import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class ModalForAddNotifications extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          show: false,
          selectSemester: false
        };
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
       this.props.AddNotificationsThunk(this.props.id, this.nameRef.current.value, this.state.selectSemester)
      this.handleClose();
    }

    callThisSemester = (e) => {
        this.setState({selectSemester: e.target.checked});
        
      }
    render(){
  return (
    <>
      <Button variant="outline-primary" onClick={this.handleShow}>
        Создать уведомление
        </Button>

      <Modal show={this.state.show} onHide={this.handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Создание уведомления</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                autoFocus
                ref={this.nameRef}/>
            </Form.Group>

            <Form.Check onChange = {this.callThisSemester}
            type='checkbox'
            id={`default-checkbox`}
            label={`Важное`}
          />
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

export default ModalForAddNotifications ;