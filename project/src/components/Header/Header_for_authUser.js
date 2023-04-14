import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Container } from "react-bootstrap";

let HeaderForAuthUser = (props) =>{
    return (
        <Container>
            
                 <Navbar.Brand >Кампусные курсы</Navbar.Brand>
                <Nav className="me-auto">
                    <Navbar.Brand>
                    <NavLink to="/groups" style={{ textDecoration: 'none',color: 'white' }} >Группы курсов</NavLink>
                    </Navbar.Brand>
                </Nav>
            <div className="col-2 justify-content-end">
                <Navbar.Brand>
                <NavLink to="/profile" style={{ textDecoration: 'none',color: 'white' }}>{props.email}</NavLink>
                </Navbar.Brand>
                <Navbar.Brand>
                <NavLink to="/" style={{ textDecoration: 'none',color: 'white'  }} onClick={props.logout}>Выход</NavLink>
                </Navbar.Brand>
            </div>
            
        </Container> 
    )
}

export default HeaderForAuthUser;