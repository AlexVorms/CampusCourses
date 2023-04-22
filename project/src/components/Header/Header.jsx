import React from 'react';
import HeaderForUser from './Header_for_user';
import HeaderForAuthUser from './Header_for_authUser'
import HeaderForStudent from './Header_for_Student'
import HeaderForTeacher from "./Header_for_teacher";
import HeaderForTeacherAndStudent from './Header_for_teacher_and_student';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.ChoiceHeader = this.ChoiceHeader.bind(this);
    }
    ChoiceHeader(){
        if(this.props.isAuth){
            if(this.props.Role.isStudent && !this.props.Role.isTeacher){
            return <HeaderForStudent email = {this.props.email} logout = {this.props.logoutThunk}/>
            }
            else if (this.props.Role.isTeacher && !this.props.Role.isStudent){
                return <HeaderForTeacher email = {this.props.email} logout = {this.props.logoutThunk}/>
            }
            else if (this.props.Role.isTeacher && this.props.Role.isStudent){
                return <HeaderForTeacherAndStudent email = {this.props.email} logout = {this.props.logoutThunk}/>
            }
            else{
                return <HeaderForAuthUser email = {this.props.email} logout = {this.props.logoutThunk}/>
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