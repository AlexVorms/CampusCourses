import { connect } from "react-redux";
import React from 'react';
import Group from './group'
import { deleteGroupThunk, getGroupsThunk, addGroupThunk, editGroupThunk } from "../../reducers/groupReducer";


class GroupContainer extends React.Component {
    componentDidMount(){
        this.props.getGroupsThunk();
      }
      render(){
        return (<Group {...this.props}/>)
      }
}

let mapStateToProps = (state) =>{
    return {
        group: state.groupPage.group,
        isFetching: state.groupPage.isFetching,
        Role: state.auth.Role
    }
}

export default connect(mapStateToProps, {deleteGroupThunk,getGroupsThunk, addGroupThunk, editGroupThunk })(GroupContainer);
