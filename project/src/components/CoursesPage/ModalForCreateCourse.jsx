import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Row, Col} from 'react-bootstrap'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';


class ModalForCreateCourse extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          show: false,
          editorState: EditorState.createEmpty(),
          editorState1: EditorState.createEmpty(),
          selectValue: '',
          selectSemester:''
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);

         this.nameRef = React.createRef();
        this.yearRef = React.createRef();
        this.maximumStudentsCountRef = React.createRef();

         this.onEditorStateChange = this.onEditorStateChange.bind(this);
         this.onEditorStateChange1 = this.onEditorStateChange1.bind(this);
    }
    
    onEditorStateChange = (editorState) => {
      this.setState({
        editorState,
      });
    };

    onEditorStateChange1 = (editorState1) => {
      this.setState({
        editorState1,
      });
    };

   handleClose(){
    this.setState({show: false});
    }
    handleShow(){
        this.setState({show: true});
    }
    handleSubmit() {
      let name1 = this.nameRef.current.value,
      startYear1 = Number(this.yearRef.current.value),
      maximumStudentsCount1 = Number(this.maximumStudentsCountRef.current.value),
      semester1 = this.state.selectSemester,
      requirements1 = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
      annotations1 = draftToHtml(convertToRaw(this.state.editorState1.getCurrentContent())),
      mainTeacherId1 = this.state.selectValue;

      let data = {
        name: name1,
        startYear: startYear1,
        maximumStudentsCount: maximumStudentsCount1,
        semester: semester1,
        requirements: requirements1,
        annotations : annotations1,
        mainTeacherId: mainTeacherId1
      }
      console.log(this.props.groupId)
      console.log(data)
      this.props.addCourseThunk(this.props.groupId, data)
      this.handleClose();
    }

    callThis = (e) => {
      this.setState({selectValue: e.target.value});
    }

    callThisSemester = (e) => {
      this.setState({selectSemester: e.target.id});
    }

    render(){
      const { editorState } = this.state;
      const { editorState1 } = this.state;
  return (
    <>
      <Button variant="outline-primary" onClick={this.handleShow}>
       Создать курс
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose} size="lg">
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
                ref={this.yearRef}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Общее количество мест</Form.Label>
              <Form.Control
                type="name"
                autoFocus
                ref={this.maximumStudentsCountRef}/>
            </Form.Group>

            

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3" onChange={this.callThisSemester}>
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

            <div>
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
          </div>

          <div>
            <Editor
              editorState={editorState1}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange1}
            />
          </div>

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

export default ModalForCreateCourse ;