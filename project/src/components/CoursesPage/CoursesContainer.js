import { connect } from "react-redux";
import { getCoursesThunk } from "../../reducers/coursesReducer";
import Courses from "./Courses";
import { useParams } from 'react-router-dom';
import React from "react";



export function withRouter(Children){
    return(props)=>{
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 } 

 class CoursesContainer extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
            this.props.getCoursesThunk(this.props.match.params.id);
      }

      render(){
        return (<div>
             {this.props.isAuth? <Courses {...this.props}/> : null}
             </div>)
      }
 }
let mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        courses: state.coursesPage.courses
    }
}

let WithUrlDataContainerComponent = withRouter(CoursesContainer);
export default connect(mapStateToProps, { getCoursesThunk})(WithUrlDataContainerComponent);
