import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Registration from "./components/Registration";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./components/Login";
import Profile from "./components/Profile";
import Classes from "./components/ClassesPage/Classes";
import GroupConteiner from "./components/GroupPage/GroupConteiner";


const App = () =>{
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/groups" element={<GroupConteiner/>}/>
       {/* <Route path="/groups/id" element={<Classes course={props.appState.state.course}/>}/> */}
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
