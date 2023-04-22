import { connect } from "react-redux";
import React from 'react';
import Group from './group'
import { deleteGroupThunk, getGroupsThunk, addGroupThunk, editGroupThunk } from "../../reducers/groupReducer";
import { Navigate } from "react-router-dom"

class GroupContainer extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getGroupsThunk();
      }
      render(){
        return (<div>
            {this.props.isAuth? <Group {...this.props}/> : <Navigate to = '/login'/>}
        </div>)
      }
}

let mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        group: state.groupPage.group,
        isFetching: state.groupPage.isFetching,
        Role: state.auth.Role
    }
}

export default connect(mapStateToProps, {deleteGroupThunk,getGroupsThunk, addGroupThunk, editGroupThunk })(GroupContainer);
