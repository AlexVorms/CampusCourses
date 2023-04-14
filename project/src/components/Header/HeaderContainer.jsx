import React from 'react';
import Header from './Header';
import { connect } from "react-redux";
import { logoutThunk } from '../../reducers/authReducer';
class HeaderContainer extends React.Component {
    componentDidMount(){

    }
    render(){
        return <Header {...this.props} logout = {logoutThunk}></Header>
    }
}

let mapStateToProps = (state) => {
    return{
        isAuth:state.auth.isAuth,
        email:state.auth.email
    }
}
export default connect(mapStateToProps, {logoutThunk})(HeaderContainer);