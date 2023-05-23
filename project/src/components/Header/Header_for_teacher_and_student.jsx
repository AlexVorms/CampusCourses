import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Container } from "react-bootstrap";

class HeaderForTeacherAndStudent extends React.Component {
    render(){
        return(
           
            <Navbar bg="dark" expand="md" variant="dark">
         <div className='container-fluid'>
             <Navbar.Brand >Кампусные курсы</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
                <Navbar.Brand>
                <NavLink  to="/groups" style={{ textDecoration: 'none',color: 'white' }} >Группы курсов</NavLink>
                </Navbar.Brand>

                <Navbar.Brand>
                    <NavLink  to="/courses/my" style={{ textDecoration: 'none',color: 'white' }} >Мои курсы</NavLink>
                    </Navbar.Brand>

                <Navbar.Brand>
                <NavLink  to="/courses/teaching" style={{ textDecoration: 'none',color: 'white' }} >Преподаваемые курсы</NavLink>
                </Navbar.Brand>
        
            </Nav>
            <div className="col-md-auto justify-content-end">
            <Navbar.Brand>
            <NavLink to="/profile" style={{ textDecoration: 'none',color: 'white' }}>{this.props.email}</NavLink>
            </Navbar.Brand>

            <Navbar.Brand>
            <NavLink to="/" style={{ textDecoration: 'none',color: 'white'  }} onClick={this.props.logout}>Выход</NavLink>
            </Navbar.Brand>
            </div>
        </Navbar.Collapse>
        </div>
            </Navbar>
       
        )
    }
}

export default HeaderForTeacherAndStudent