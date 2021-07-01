import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}
               render={ props => {
                   if (rest.isAuth !== null) {
                       return <Redirect to={'/'} />
                   } else {
                       return <Component {...rest} {...props} />
                   }
               }
        } />
    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.settings.email
    }
}

export default connect(mapStateToProps)(ProtectedRoute);