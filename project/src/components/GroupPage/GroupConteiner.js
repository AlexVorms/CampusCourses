import { connect } from "react-redux";
import React from 'react';
import Group from './group'
import { deleteGroup, setGroupAC, setIsFetchingAC } from "../../reducers/groupReduser";

let mapStateToProps = (state) =>{
    return {
        group: state.groupPage.group,
        isFetching: state.groupPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        delete:(id) =>{
            dispatch(deleteGroup(id))
        },
        setGroup:(group) =>{
            dispatch(setGroupAC(group))
        },
        setIsFetching:(isFetching) =>{
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Group);
