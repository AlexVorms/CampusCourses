import React from 'react';
import GroupItem from './groupItem';
import Preloader from '../common/Preloader';



//необходим рефакторинг - скорее всего удалить groupItem, чтобы не передавать все функции. 

class Group extends React.Component {
    constructor(props) {
      super(props);
      }

    render() {
      return <>
      {this.props.isFetching ? <Preloader/> : null}
      <div className="mt-3 mb-3 p-3">
            <div className="list-group">
            {this.props.group.map((value) => {
                return <div key = {value.id}> <GroupItem delete = {this.props.delete} name ={value.name}
                key = {value.id}
                id = {value.id}/>
                </div>
            })
            }
            </div>
        </div>
        </>
    }
  }
  
  export default Group;
  