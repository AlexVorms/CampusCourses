import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function Header() {
    return (
    <div className='Havbar'>
        <Navbar bg="dark" expand="md" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Кампусные курсы</Navbar.Brand>
        <div className ="col-2 justify-content-end">
        <Navbar.Brand>
            <NavLink to="/registration">Регистрация</NavLink>
        </Navbar.Brand>
        <Navbar.Brand>
            <NavLink to="/login">Вход</NavLink>
        </Navbar.Brand>
        </div>
        
        </Container>
    </Navbar>
  </div>
    )
}

export default Header;