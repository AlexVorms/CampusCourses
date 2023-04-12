import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { getProfileThunk } from '../../reducers/authReducer';


class ProfileContainer extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getProfileThunk();
    }
    render(){
        return <Profile {...this.props}></Profile>
    }
}
let mapStateToProps = (state) =>{
    return {
        email: state.auth.email,
        fullName : state.auth.fullName,
        birthDate: state.auth.birthDate,
        isFetching: state.auth.isFetching
    }
}

export default connect(mapStateToProps, {getProfileThunk})(ProfileContainer);