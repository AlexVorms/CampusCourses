import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import HomePage from "./components/HomePage";
import RegistrationContainer from "./components/RegistrationPage/RegistrationContainer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProfileContainer from "./components/ProfilePage/ProfileContainer";

import GroupConteiner from "./components/GroupPage/GroupConteiner";
import CoursesContainer from "./components/CoursesPage/CoursesContainer";
import LoginContainer from "./components/LoginPage/LoginContainer";
import CourseDetailsPageContainer from "./components/CourseDetailsPage/CourseDetailsPageContainer";
import MyCoursesContainer from './components/MyCoursesPage/MyCoursesContainer'
import MyTeachingCoursesContainer from "./components/MyTeachingCoursesPage/MyTeachingCoursesContainer";

const App = () =>{
  return (
    <BrowserRouter>
    <div className="App">
      <HeaderContainer/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/registration" element={<RegistrationContainer/>}/>
        <Route path="/login" element={<LoginContainer/>}/>
        <Route path="/profile" element={<ProfileContainer/>}/>
        <Route path="/groups" element={<GroupConteiner/>}/>
       <Route path="/groups/:id" element={<CoursesContainer/>}/>
        <Route path = '/courses/:id' element={<CourseDetailsPageContainer/>}/>
        <Route path = 'courses/my' element={<MyCoursesContainer/>}></Route>
        <Route path = 'courses/teaching' element={<MyTeachingCoursesContainer/>}></Route>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
