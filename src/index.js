import React from 'react';
import ReactDOM from 'react-dom/client';

// MARK - react-router-dom + route components
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NavBar } from "./components/CommonComponents/NavBar";
import HomePage from "./components/HomePage/HomePage";
import UserDashboardPage from "./components/UserDashboardPage/UserDashboardPage";
import SignUpPage from "./components/SignupPage/SignupPage";
import LoginPage from "./components/LoginPage/LoginPage"
import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';
import { DestinationRecommendationPage } from "./components/DestinationRecommendationPage/DestinationRecommendationPage";
import AccountSettingsPage from "./components/AccountSettingsPage/AccountSettingsPage";
import { NotFoundPage } from "./components/CommonComponents/NotFoundPage";
//

// MARK - Redux
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

//

// MARK - Global styling
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import blue from '@mui/material/colors/blue';
import purple from '@mui/material/colors/purple';
import { QuestionnairePage } from './components/QuestionnairePage/QuestionnairePage';
import { DestinationPage } from './components/DestinationRecommendationPage/DestinationPage';
//

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: purple[500],
      light: purple[50]
    }
  }
});

const store = configureStore({ 
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <AuthProvider>
          <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                <NavBar />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="LoginPage" element={<LoginPage />} />
                  <Route path="SignUpPage" element={<SignUpPage />} />
                  <Route element={<AuthRoute />}>
                    <Route path="UserDashboardPage" element={<UserDashboardPage />} />
                    <Route path="AccountSettingsPage" element={<AccountSettingsPage />} />
                    <Route path="DestinationRecommendationPage" element={<DestinationRecommendationPage />} />
                    <Route path="QuestionnairePage" element={<QuestionnairePage />} />
                    <Route path="DestinationPage" element={<DestinationPage />} />
                  </Route>
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </BrowserRouter>
            </PersistGate>
          </Provider>
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
// !!!TODO: Sherman to figure out how to re-route if manually entering a url
// and not logged in (because right now if I go to Account url when not logged in, it lets me)