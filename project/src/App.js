import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import HomePage from "./components/HomePage";
import Registration from "./components/Registration";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProfileContainer from "./components/ProfilePage/ProfileContainer";

import GroupConteiner from "./components/GroupPage/GroupConteiner";
import CoursesContainer from "./components/CoursesPage/CoursesContainer";
import LoginContainer from "./components/LoginPage/LoginContainer";


const App = () =>{
  return (
    <BrowserRouter>
    <div className="App">
      <HeaderContainer/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<LoginContainer/>}/>
        <Route path="/profile" element={<ProfileContainer/>}/>
        <Route path="/groups" element={<GroupConteiner/>}/>
       <Route path="/groups/:id" element={<CoursesContainer/>}/>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
