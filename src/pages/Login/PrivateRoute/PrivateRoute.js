
import React from 'react';
//import from react router dom
import { Route, Redirect } from 'react-router-dom';
//import useAuth
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <Route
            {...rest}
            // rerender
            render={({ location }) => user?.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>
            }

        >

        </Route>
    );
};

export default PrivateRoute;