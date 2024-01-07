import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { getProfileThunk, editProfileThunk} from '../../reducers/authReducer';

class ProfileContainer extends React.Component {
    componentDidMount(){
        this.props.getProfileThunk();
    }
   
    render(){
        return (
          <Profile {...this.props}/> 
        )
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

export default connect(mapStateToProps, {getProfileThunk, editProfileThunk})(ProfileContainer);