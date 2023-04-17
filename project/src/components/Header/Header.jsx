import React from 'react';
import HeaderForUser from './Header_for_user';
import HeaderForAuthUser from './Header_for_authUser'
import HeaderForStudent from './Header_for_Student'
import HeaderForTeacher from "./Header_for_teacher";

class Header extends React.Component {
    constructor(props){
        super(props);
        this.ChoiceHeader = this.ChoiceHeader.bind(this);
    }
    ChoiceHeader(){
        if(this.props.isAuth){
            if(this.props.Role.isStudent){
            return <HeaderForStudent email = {this.props.email}/>
            }
            else if (this.props.Role.isTeacher){
                return <HeaderForTeacher email = {this.props.email}/>
            }
            else if (this.props.Role.isAdmin){
                return <div></div>;
            }
            else if (this.props.Role.isTeacher && this.props.Role.isStudent){
                return <div></div>
            }
            else{
                return <HeaderForAuthUser email = {this.props.email} logout = {this.props.logout}/>
            }
        }
        else{
            return <HeaderForUser></HeaderForUser>
        }
    }
    render(){
        return (
            <div >
              {this.ChoiceHeader()}
            </div>
        )
    }
}

export default Header;