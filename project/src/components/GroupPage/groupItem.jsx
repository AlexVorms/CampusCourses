import React from 'react';
import {Card} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import ModalForEditGroup from './ModalForEditGroup';
class GroupItem extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick2 = this.handleClick2.bind(this);
    }
      handleClick2(){
       this.props.deleteGroupThunk(this.props.id)
      }

    render() {
     
      return (
        <div className = 'container' type="button">
         
                <Card >
                     <Card.Body>
                     <div className = 'row'>
                     <NavLink to = {'/groups/' + this.props.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className = 'col-9'>
                          <h5>{this.props.name}</h5>
                          </div>
                          </NavLink>
                          {this.props.isAdmin? 
                          <div className = 'col d-grid gap-2 d-md-flex justify-content-md-end'>
                        <ModalForEditGroup editGroupThunk = {this.props.editGroupThunk} id={this.props.id}/>
                          <button className="btn btn-outline-danger" onClick={this.handleClick2}>Удалить</button>
                        </div> : null}
                        </div>
                     </Card.Body>
                </Card>
               
        </div>
     
      )
    }
  }

  export default GroupItem;
  

  