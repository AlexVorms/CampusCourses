import { connect } from "react-redux";
import { setCoursesAC } from "../../reducers/coursesReduser";
import Courses from "./Courses";
import { useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 } 
let mapStateToProps = (state) =>{
    return {
        courses: state.coursesPage.courses
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        setCourses:(courses) =>{
            dispatch(setCoursesAC(courses))
        }
    }
}
let WithUrlDataContainerComponent = withRouter(Courses);
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);
