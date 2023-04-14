import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Container } from "react-bootstrap";

let HeaderForUser = () =>{
    return (
        <Container>
             <Navbar.Brand >Кампусные курсы</Navbar.Brand>
                 <div className ="col-2 justify-content-end">
                    <Navbar.Brand>
                        <NavLink to="/registration" style={{ textDecoration: 'none', color: 'white' }}>Регистрация</NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <NavLink to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Вход</NavLink>
                    </Navbar.Brand>
                    </div>
        </Container> 
    )
}

export default HeaderForUser;