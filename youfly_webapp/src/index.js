import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NavBar } from "./components/NavBar";

// react-router-dom + route components
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { UserDashboardPage } from "./components/UserDashboardPage";
import { SignUpPage } from "./components/SignUpPage";
import {LoginVsSignup} from "./components/LoginVsSignup";
//

// Redux
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: rootReducer });
//



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="LoginPage" element={<UserDashboardPage />} />
          <Route path="SignUpPage" element={<SignUpPage />} />
          <Route path="LoginVsSignup" element={<LoginVsSignup/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
