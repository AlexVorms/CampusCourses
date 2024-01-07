import { connect } from "react-redux";

import MyCourses from "./MyCourses";
import React from "react";
import { getMyCoursesThunk } from "../../reducers/myCoursesReducer"

 class MyCoursesContainer extends React.Component {

   async componentDidMount(){
           await this.props.getMyCoursesThunk();
      }

      render(){
        return (<MyCourses {...this.props}/> )
      }
 }
let mapStateToProps = (state) =>{
    return {
        MyCourses: state.MyCoursesPage.MyCourses,
        isFetching: state.MyCoursesPage.isFetching
    }
}

export default connect(mapStateToProps, {getMyCoursesThunk})(MyCoursesContainer);