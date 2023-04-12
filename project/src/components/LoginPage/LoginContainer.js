import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { authorisationThunk } from '../../reducers/authReducer';


class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClick= this.handleOnClick.bind(this);
    }
    handleOnClick(email, password) {
        this.props.authorisationThunk(email, password);
    }
    render() {
        return <Login {...this.props} handleOnClick = {this.handleOnClick} ></Login>
    }
   
}
function mapStateToProps(state){
    return {
        email : state.auth.email,
        password : state.auth.password
    }
}

export default connect(mapStateToProps, {authorisationThunk})(LoginContainer);