import React, { useContext, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { AuthContext } from '../context/auth';

const AuthRoute = () => {
  const { user } = useContext(AuthContext);
  const userObject = useSelector(state => state.userReducer.currUser)

    if (user && !userObject.hasOwnProperty("question_responses")){
      return <Navigate to="/QuestionsStepperPage" />
    } else if (user) {
      return <Outlet />
    } else if (!user) {
      return <Navigate to="/LoginPage" />
    } 
}

export default AuthRoute;