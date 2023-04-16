import React from "react";
import HeaderForAuthUser from './Header_for_authUser'
import HeaderForStudent from './Header_for_Student'

class Header_for_authUserContainer extends React.Component {
    render(){
        return(
            <div>
                {true? <HeaderForStudent email = {this.props.email}/>:<HeaderForAuthUser email = {this.props.email} logout = {this.props.logout}/>}
            </div>
        )
    }
}
export default Header_for_authUserContainer;