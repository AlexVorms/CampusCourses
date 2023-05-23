import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Container } from "react-bootstrap";

let HeaderForUser = () =>{
    return (
                <Navbar bg="dark" expand="md" variant="dark">
                     <div className='container-fluid'>
             <Navbar.Brand >Кампусные курсы</Navbar.Brand>
                 <div className ="justify-content-end">
                    <Navbar.Brand>
                        <NavLink to="/registration" style={{ textDecoration: 'none', color: 'white' }}>Регистрация</NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <NavLink to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Вход</NavLink>
                    </Navbar.Brand>
                    </div>
      
                     </div>
                </Navbar>
           
    )
}

export default HeaderForUser;