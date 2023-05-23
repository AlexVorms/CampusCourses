import { connect } from "react-redux";
import React from "react";
import { Navigate } from "react-router-dom";
import { getMyTeachingCoursesThunk } from "../../reducers/myTeachingCoursesReducer"
import MyTeachingCourse from "./MyTeachingCourse";

 class MyTeachingCoursesContainer extends React.Component {
    componentDidMount(){
         this.props.getMyTeachingCoursesThunk();
      }

      render(){
        return (<div>
             {this.props.isAuth? <MyTeachingCourse {...this.props}/> : <Navigate to = '/login'/>}
             </div>)
      }
 }
let mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        MyTeachingCourses: state.MyTeachingCoursesPage.MyTeachingCourses,
        isFetching: state.MyTeachingCoursesPage.isFetching
    }
}

export default connect(mapStateToProps, {getMyTeachingCoursesThunk})(MyTeachingCoursesContainer);