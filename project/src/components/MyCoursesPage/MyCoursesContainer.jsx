import { connect } from "react-redux";

import MyCourses from "./MyCourses";
import React from "react";
import { Navigate } from "react-router-dom";
import { getMyCoursesThunk } from "../../reducers/myCoursesReducer"

 class MyCoursesContainer extends React.Component {

   async componentDidMount(){
           await this.props.getMyCoursesThunk();
      }

      render(){
        return (<div>
             {this.props.isAuth? <MyCourses {...this.props}/> : <Navigate to = '/login'/>}
             </div>)
      }
 }
let mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        MyCourses: state.MyCoursesPage.MyCourses,
        isFetching: state.MyCoursesPage.isFetching
    }
}

export default connect(mapStateToProps, {getMyCoursesThunk})(MyCoursesContainer);