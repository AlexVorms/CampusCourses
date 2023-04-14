import React from 'react';
import Registration from './Registration';
import { registrationThunk } from '../../reducers/authReducer';
import { connect } from 'react-redux';

class RegistrationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClick= this.handleOnClick.bind(this);
    }
    handleOnClick(data) {
        this.props.registrationThunk(data);
    }
    render(){
        return <Registration {...this.props} handleOnClick = {this.handleOnClick}></Registration>
    }
}

let mapStateToProps = (state) =>{
    return {
        email : state.auth.email,
        password : state.auth.password
    }
}

export default connect(mapStateToProps, {registrationThunk})(RegistrationContainer);