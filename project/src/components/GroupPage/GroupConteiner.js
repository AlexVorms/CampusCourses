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
        return (<div>
            {this.props.isAuth? <Group {...this.props}/> : null}
        </div>)
      }
}

let mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        group: state.groupPage.group,
        isFetching: state.groupPage.isFetching
    }
}

export default connect(mapStateToProps, {deleteGroupAC,getGroupsThunk })(GroupContainer);
