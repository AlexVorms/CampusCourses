import React from 'react';
import GroupItem from './groupItem';
import Preloader from '../common/Preloader';
import { Col, Row } from 'react-bootstrap';
import ModalForCreateGroup from './ModalForCreateGroup';


//необходим рефакторинг - скорее всего удалить groupItem, чтобы не передавать все функции. 

class Group extends React.Component {
    constructor(props) {
      super(props);
      this.CreateGroup = this.CreateGroup.bind(this);
      }
      CreateGroup(){
          return <ModalForCreateGroup/>
      }
    render() {
      return <>
      {this.props.isFetching ? <Preloader/> : 
      <div className="container mt-3 mb-3 p-3">
            <Row>
              <Col>
                 <h1>Группы кампусных курсов</h1>
                 {this.props.Role.isAdmin?  <ModalForCreateGroup addGroupThunk = {this.props.addGroupThunk}/>: null}
                 
              </Col>
             
            </Row>
            
            <div className="list-group p-2">
            {this.props.group.map((value) => {
                return <div key = {value.id}> <GroupItem deleteGroupThunk = {this.props.deleteGroupThunk} 
                editGroupThunk = {this.props.editGroupThunk}
                name = {value.name}
                key = {value.id}
                id = {value.id}
                isAdmin = {this.props.Role.isAdmin}/>
                </div>
            })
            }
            </div>
        </div>
        }
        </>
    }
  }
  
  export default Group;
  