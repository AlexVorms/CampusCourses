import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import HomePage from "./components/HomePage";
import RegistrationContainer from "./components/RegistrationPage/RegistrationContainer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProfileContainer from "./components/ProfilePage/ProfileContainer";
import {connect} from "react-redux";
import PrivateRoute from "./routes/privateRoute";
import GroupConteiner from "./components/GroupPage/GroupConteiner";
import CoursesContainer from "./components/CoursesPage/CoursesContainer";
import LoginContainer from "./components/LoginPage/LoginContainer";
import CourseDetailsPageContainer from "./components/CourseDetailsPage/CourseDetailsPageContainer";
import MyCoursesContainer from './components/MyCoursesPage/MyCoursesContainer'
import MyTeachingCoursesContainer from "./components/MyTeachingCoursesPage/MyTeachingCoursesContainer";

let mapStateToProps = (state) => {
  return {
      isAuth: state.auth.isAuth
  };
}

export default connect(mapStateToProps, {
})(App);


function App (props){

  return (
    <BrowserRouter>
    <div className="App">
      <HeaderContainer/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/registration" element={<PrivateRoute component={<RegistrationContainer/>} unauthorized = {true}/>}/>
        <Route path="/login" element={<PrivateRoute component={<LoginContainer/>} unauthorized = {true}/>}/>
        <Route path="/profile" element={<PrivateRoute component={<ProfileContainer/>}/>}/>
        <Route path="/groups" element={<PrivateRoute component={<GroupConteiner/>}/>}/>
       <Route path="/groups/:id" element={<PrivateRoute component={<CoursesContainer/>}/>}/>
        <Route path = '/courses/:id' element={<PrivateRoute component={<CourseDetailsPageContainer/>}/>}/>
        <Route path = 'courses/my' element={<PrivateRoute component={<MyCoursesContainer/>}/>}></Route>
        <Route path = 'courses/teaching' element={<PrivateRoute component={<MyTeachingCoursesContainer/>}/>}></Route>
        <Route path="*" element={<HomePage/>}/>
      </Routes>
    </div>
   </BrowserRouter>
  );
}
