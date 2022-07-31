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
import SignUpPage from "./components/SignupPage/SignupPage";
import LoginPage from "./components/LoginPage/LoginPage"
import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';
import { DestinationRecommendationPage } from "./components/DestinationRecommendationPage/DestinationRecommendationPage";
import AccountSettingsPage from "./components/AccountSettingsPage/AccountSettingsPage";
//

// MARK - Redux
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";


//

// MARK - Global styling
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import blue from '@mui/material/colors/blue';
import purple from '@mui/material/colors/purple';
//

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: purple[500]
    }
  }
});

const store = configureStore({ reducer: rootReducer });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
                  <Route path="AccountSettingsPage" element={<AccountSettingsPage />} />
                  <Route path="DestinationRecommendationPage" element={<DestinationRecommendationPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Provider>
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
