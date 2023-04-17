import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Container } from "react-bootstrap";

class HeaderForTeacher extends React.Component {
    render(){
        return(
            <div className='Havbar'>
            <Navbar bg="dark" expand="md" variant="dark">
            <Container>
             <Navbar.Brand >Кампусные курсы</Navbar.Brand>
            <Nav className="me-auto">
                <Navbar.Brand>
                <NavLink  to="/groups" style={{ textDecoration: 'none',color: 'white' }} >Группы курсов</NavLink>
                </Navbar.Brand>

                <Navbar.Brand>
                <NavLink  to="/groups" style={{ textDecoration: 'none',color: 'white' }} >Преподаваемые курсы</NavLink>
                </Navbar.Brand>
            </Nav>
        <div className="col-2 justify-content-end">
            <Navbar.Brand>
            <NavLink to="/profile" style={{ textDecoration: 'none',color: 'white' }}>{this.props.email}</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
            <NavLink to="/" style={{ textDecoration: 'none',color: 'white'  }}>Выход</NavLink>
            </Navbar.Brand>
        </div>
    </Container> 
            </Navbar>
        </div>
        )
    }
}

export default HeaderForTeacher