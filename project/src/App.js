import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Registration from "./components/Registration";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
