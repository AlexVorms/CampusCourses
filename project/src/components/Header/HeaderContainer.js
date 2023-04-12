import React from 'react';
import Header from './Header';
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount(){

    }
    render(){
        return <Header {...this.props}></Header>
    }
}

let mapStateToProps = (state) => {
    return{
        isAuth:state.auth.isAuth
    }
}
export default connect(mapStateToProps)(HeaderContainer);