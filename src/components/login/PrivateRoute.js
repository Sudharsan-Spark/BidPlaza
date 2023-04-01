import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute=({authenticated})=>{
    return(
        authenticated?
        <Outlet/>:
        <Navigate to="/" />
    )
}

export default PrivateRoute;