import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { authorisationThunk } from '../../reducers/authReducer';


class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick(email, password) {
        this.props.authorisationThunk(email, password);
    }
    render() {
        return (<div>
            { !this.props.isAuth? <Login {...this.props} handleOnClick = {this.handleOnClick} /> : <div>тут должен быть переход</div> }
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