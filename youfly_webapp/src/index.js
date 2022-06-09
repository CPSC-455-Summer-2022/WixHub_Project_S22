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
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { SignUpPage } from "./components/SignUpPage";
// 

// Redux
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({reducer: rootReducer});
//



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="SignUpPage" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
