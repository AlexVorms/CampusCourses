import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import HeaderForAuthUser from './Header_for_authUser'
import HeaderForUser from './Header_for_user';


class Header extends React.Component {
    
    render(){
        return (
            <div className='Havbar'>
                <Navbar bg="dark" expand="md" variant="dark">
                    {!this.props.isAuth? <HeaderForUser></HeaderForUser>: console.log('notAuthorized')}
                    {this.props.isAuth? <HeaderForAuthUser email = {this.props.email} logout = {this.props.logout}/>: console.log('Authorizet')}
                   
                </Navbar>
            </div>
        )
    }
}

export default Header;