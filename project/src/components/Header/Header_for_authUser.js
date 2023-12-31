import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


let HeaderForAuthUser = (props) =>{
    return (
       
        <Navbar bg="dark" expand="md" variant="dark">
       
        <div className='container-fluid'>
            <Navbar.Brand >Кампусные курсы</Navbar.Brand>
           <Nav className="me-auto">
               <Navbar.Brand>
               <NavLink to="/groups" style={{ textDecoration: 'none',color: 'white' }} >Группы курсов</NavLink>
               </Navbar.Brand>
           </Nav>
       <div className="col-md-auto justify-content-end">
           <Navbar.Brand>
           <NavLink to="/profile" style={{ textDecoration: 'none',color: 'white' }}>{props.email}</NavLink>
           </Navbar.Brand>
           <Navbar.Brand>
           <NavLink to="/" style={{ textDecoration: 'none',color: 'white'  }} onClick={props.logout}>Выход</NavLink>
           </Navbar.Brand>
       </div>
       </div>
        </Navbar>
  

    )
}

export default HeaderForAuthUser;