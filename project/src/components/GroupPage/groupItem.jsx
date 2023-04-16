import React from 'react';
import {Card} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
class GroupItem extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick2 = this.handleClick2.bind(this);
    }
      handleClick2(){
        this.props.delete(this.props.id)
      }

    render() {
     
      return (
        <div className = 'container' type="button">
          <NavLink to = {'/groups/' + this.props.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card >
                     <Card.Body>
                     <div className = 'row'>
                        <div className = 'col'>
                          <h5>{this.props.name}</h5>
                          </div>
                        <div className = 'col d-grid gap-2 d-md-flex justify-content-md-end'>
                          <button className="btn btn-outline-danger" onClick={this.handleClick2}>Удалить</button>
                        </div>
                        </div>
                     </Card.Body>
                </Card>
                </NavLink>
        </div>
     
      )
    }
  }

  export default GroupItem;
  

  