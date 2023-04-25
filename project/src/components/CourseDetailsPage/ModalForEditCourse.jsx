import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {FormLabel, Card} from 'react-bootstrap'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';


class ModalForEditCourse extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          show: false,
          editorState: EditorState.createEmpty(),
          editorState1: EditorState.createEmpty()
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);


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
      let requirements1 = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
      annotations1 = draftToHtml(convertToRaw(this.state.editorState1.getCurrentContent()))

      let data = {
        requirements: requirements1,
        annotations : annotations1
      }
      console.log(data)
      this.props.editCourseThunk(this.props.id, requirements1, annotations1)
      this.handleClose();
    }


    render(){
      const { editorState } = this.state;
      const { editorState1 } = this.state;
  return (
    <>
      <Button variant="outline-warning" onClick={this.handleShow}>
       Редактировать
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Редактирование курса</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div>
            <FormLabel>Требования</FormLabel>
            <Card>
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
            </Card>
          </div>

          <div>
            <FormLabel>Аннотации</FormLabel>
            <Card>
            <Editor
              editorState={editorState1}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange1}
            />
            </Card>
          </div>

          

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

export default ModalForEditCourse ;