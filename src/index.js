import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login';
import { UserContextProvider } from './context/user';
import { UIProvider } from './context/ui';
import RegisterPage from './components/register';
import ProfileScreen from './components/profile';
import EditProfile from './components/editProfile/EditProfile';
import AdminPage from './components/admin';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <UIProvider>
          <Routes>
            <Route path="/*" element={<App />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="profile" element={<ProfileScreen />} />
            <Route path="edit_profile" element={<EditProfile />} />
            <Route path="admin" element={<AdminPage />} />
          </Routes>
        </UIProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
