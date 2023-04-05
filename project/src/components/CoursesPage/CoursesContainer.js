import { connect } from "react-redux";
import { setCoursesAC } from "../../reducers/coursesReduser";
import Courses from "./Courses";

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
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
