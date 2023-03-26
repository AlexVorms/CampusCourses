import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
    <div className='Havbar'>
        <Navbar bg="dark" expand="md" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Кампусные курсы</Navbar.Brand>
        <div className ="col-2 justify-content-end">
        <Navbar.Brand  href="/registration">Регистрация</Navbar.Brand>
        <Navbar.Brand className="" href="/login">Вход</Navbar.Brand>
        </div>
        
        </Container>
    </Navbar>
  </div>
    )
}

export default Header;