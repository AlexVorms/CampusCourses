import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import  Header_for_authUserContainer from './Header_for_authUserContainer'
import HeaderForUser from './Header_for_user';


class Header extends React.Component {
    
    render(){
        return (
            <div >
                    {!this.props.isAuth? <HeaderForUser></HeaderForUser>: console.log('notAuthorized')}
                    {this.props.isAuth? <Header_for_authUserContainer email = {this.props.email} logout = {this.props.logout} Role = {this.props.Role}/>: console.log('Authorizet')}
            </div>
        )
    }
}

export default Header;