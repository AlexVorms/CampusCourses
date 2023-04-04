import React from 'react';
import ClassItem from './ClassItem';


class Classes extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      return (
        <div className="mt-3 mb-3">
            <div className="list-group">
            {this.props.course.map((value) => {
                return <ClassItem name ={value.name}
                key = {value.id}
                id = {value.id}
                startYear={value.startYear}
                semester = {value.semester}
                maximumStudentsCount = {value.maximumStudentsCount}
                remainingSlotsCount = {value.remainingSlotsCount}
                status = {value.status}/>
            })
            }
            </div>
        </div>)
    }
  }
  
  export default Classes;
  