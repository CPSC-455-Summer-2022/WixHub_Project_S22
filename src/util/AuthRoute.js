import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'

import { AuthContext } from '../context/auth';

const AuthRoute = () => {
  const { user } = useContext(AuthContext);
    return(
        user ? <Outlet/> : <Navigate to="/LoginPage"/>
    )
}

export default AuthRoute;