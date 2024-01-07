import { connect } from "react-redux";
import React from "react";
import { getMyTeachingCoursesThunk } from "../../reducers/myTeachingCoursesReducer"
import MyTeachingCourse from "./MyTeachingCourse";

 class MyTeachingCoursesContainer extends React.Component {
    componentDidMount(){
         this.props.getMyTeachingCoursesThunk();
      }

      render(){
        return (<MyTeachingCourse {...this.props}/>)
      }
 }
let mapStateToProps = (state) =>{
    return {
        MyTeachingCourses: state.MyTeachingCoursesPage.MyTeachingCourses,
        isFetching: state.MyTeachingCoursesPage.isFetching
    }
}

export default connect(mapStateToProps, {getMyTeachingCoursesThunk})(MyTeachingCoursesContainer);