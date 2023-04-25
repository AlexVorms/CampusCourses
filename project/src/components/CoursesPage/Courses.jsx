import React from 'react';
import CoursesItem from './CoursesItem';
import Preloader from '../common/Preloader';
import ModalForCreateCourse from './ModalForCreateCourse';

class Courses extends React.Component {
    constructor(props) {
        super(props);
      }
      
    render() {
      return <>
       {this.props.isFetching ? <Preloader/> : 
          <div className="mt-3 mb-3 container">
             {this.props.Role.isAdmin?  <ModalForCreateCourse users = {this.props.users} addCourseThunk = {this.props.addCourseThunk} 
             groupId = {this.props.groupId}/>: null}
                <div className="list-group">
                {this.props.courses.map((value) => {
                    return <CoursesItem name ={value.name}
                    key = {value.id}
                    id = {value.id}
                    startYear={value.startYear}
                    semester = {value.semester}
                    maximumStudentsCount = {value.maximumStudentsCount}
                    remainingSlotsCount = {value.remainingSlotsCount}
                    status = {value.status}
                    Role = {this.props.Role}
                    deleteCourseThunk = {this.props.deleteCourseThunk}/>
                })
                }
                </div>
          </div>
      }
        </>
    }
  }
  
  export default Courses;
  