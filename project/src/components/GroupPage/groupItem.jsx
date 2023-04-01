import React from 'react';
import {Card} from 'react-bootstrap'

class GroupItem extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log(this.props.id)
      }

    render() {
      return (
        <div type="button">
             <div>
                <Card onClick={this.handleClick}>
                     <Card.Body>
                        <div>{this.props.name}</div>
                     </Card.Body>
                </Card>
            </div>
        </div>
      )
    }
  }

  export default GroupItem;
  

  