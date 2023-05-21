import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { authorisationThunk } from '../../reducers/authReducer';
import { Navigate } from 'react-router-dom';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    async handleOnClick(email, password) {
       await this.props.authorisationThunk(email, password);
    }
    render() {
        return (<div>
            { !this.props.isAuth? <Login {...this.props} handleOnClick = {this.handleOnClick} /> : <Navigate to = '/groups'/> }
            </div>)
    }
   
}
function mapStateToProps(state){
    return {
        isFetching:state.auth.isFetching,
        email : state.auth.email,
        password : state.auth.password,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {authorisationThunk})(LoginContainer);