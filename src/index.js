/*
Ronin and Sherman TODO:
Rework navigation if required for MUI
Learn MUI layout/grid mechanics
Request user data from Josh's endpoints
Make all buttons clickable (confirm with )
*/

import React from 'react';
import ReactDOM from 'react-dom/client';

// MARK - react-router-dom + route components
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NavBar } from "./components/CommonComponents/NavBar";
import LandingPage from "./components/HomePage/HomePage";
import UserDashboardPage from "./components/UserDashboardPage/UserDashboardPage";
import SignUpPage from "./components/Signup/SignupPage";
import LoginPage from "./components/LoginPage/LoginPage"
import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';
//

// MARK - Redux
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: rootReducer });
//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="LoginPage" element={<LoginPage />} />
            <Route path="SignUpPage" element={<SignUpPage />} />
            <Route element={<AuthRoute />}>
              <Route path="UserDashboardPage" element={<UserDashboardPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
