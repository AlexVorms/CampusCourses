import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const PrivateRoute = (props) => {
    if (props.unauthorized) {
        return !props.isAuth ? props.component : <Navigate to="/" />;
    }
    return props.isAuth? props.component : <Navigate to="/login" />;
};

let mapStateToProps = (state, props) => {
    return {
        isAuth:state.auth.isAuth,
        component: props.component,
        unauthorized: props.unauthorized
    };
}

export default connect(mapStateToProps)(PrivateRoute);