
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/auth';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

function PrivateRoute({ component: Component, ...rest }) {
    const { authTokens } = useAuth();
    dotenv.config();
    try {
        jwt.verify(authTokens, process.env.REACT_APP_TOKEN_SECRET);
    } catch (err) {
        return <Redirect to="/login" />
    }
    
    
  
    return(
        <Route 
            {...rest} 
            render={props =>
                    <Component {...props} />
            }
        />
    );
}

export default PrivateRoute;