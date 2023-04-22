import React from 'react';

import Preloader from '../common/Preloader';
import MyTeachingCoursesItem from './MyTeachingCoursesItem';

class MyTeachingCourse extends React.Component {
    constructor(props) {
        super(props);
      }
      
    render() {
      return <>
       {this.props.isFetching? <Preloader/> : 
          <div className="mt-3 mb-3">
                <div className="list-group">
                {this.props.MyTeachingCourses.map((value) => {
                    return <MyTeachingCoursesItem name ={value.name}
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
          </div>
      }
        </>
    }
  }
  
  export default MyTeachingCourse;
  