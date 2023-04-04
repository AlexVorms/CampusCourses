import React from 'react';
import GroupItem from './groupItem';


class Group extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      return (
        <div className="mt-3 mb-3 p-3">
            <div className="list-group">
            {this.props.group.map((value) => {
                return <GroupItem name ={value.name}
                key = {value.id}
                id = {value.id}/>
            })
            }
            </div>
        </div>)
    }
  }
  
  export default Group;
  