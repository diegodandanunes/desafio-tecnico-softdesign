import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Auth from './auth';

export const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render = {props => {
                return Auth.authenticated ? <Component {...props} /> : <Redirect to="/" />
            }}
        />
    )
}