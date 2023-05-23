import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { getProfileThunk, editProfileThunk} from '../../reducers/authReducer';
import { Navigate } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount(){
        this.props.getProfileThunk();
    }
   
    render(){
        return (
        <div>
            {this.props.isAuth? <Profile {...this.props}/> : <Navigate to = '/login'/>}
        </div>
        )
    }
}
let mapStateToProps = (state) =>{
    return {
        isAuth:state.auth.isAuth,
        email: state.auth.email,
        fullName : state.auth.fullName,
        birthDate: state.auth.birthDate,
        isFetching: state.auth.isFetching
    }
}

export default connect(mapStateToProps, {getProfileThunk, editProfileThunk})(ProfileContainer);