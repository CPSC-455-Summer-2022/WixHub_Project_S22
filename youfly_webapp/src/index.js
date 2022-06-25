import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

// react-router-dom + route components
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NavBar } from "./components/CommonComponents/NavBar";
import LandingPage from "./components/HomePage/HomePage";
import UserDashboardPage from "./components/UserDashboardPage/UserDashboardPage";
import SignUpPage from "./components/Signup/SignupPage";
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
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
