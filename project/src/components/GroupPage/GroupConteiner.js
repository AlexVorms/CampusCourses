import { connect } from "react-redux";
import React from 'react';
import Group from './group'
import { deleteGroupAC, getGroupsThunk } from "../../reducers/groupReducer";

class GroupContainer extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getGroupsThunk();
      }
      render(){
        return <Group {...this.props}></Group>
      }
}

let mapStateToProps = (state) =>{
    return {
        group: state.groupPage.group,
        isFetching: state.groupPage.isFetching
    }
}

export default connect(mapStateToProps, {deleteGroupAC,getGroupsThunk })(GroupContainer);
