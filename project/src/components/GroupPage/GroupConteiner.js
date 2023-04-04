import { connect } from "react-redux";
import React from 'react';
import Group from './group'
import { deleteGroup, setGroupAC } from "../../reducers/groupReduser";

let mapStateToProps = (state) =>{
    return {
        group: state.groupPage.group
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        delete:(id) =>{
            dispatch(deleteGroup(id))
        },
        setGroup:(group) =>{
            dispatch(setGroupAC(group))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Group);
