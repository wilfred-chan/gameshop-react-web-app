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
import ProductPage from "./components/productPage/ProductPage";
import AdminPage from './components/admin';
import SearchPage from './components/search/searchPage';
import PublicProfileScreen from './components/publicProfile';

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
            <Route path="profile/:username" element={<PublicProfileScreen />} />
            <Route path="edit_profile" element={<EditProfile />} />
            <Route path="product/:game_id" element={<ProductPage />} />
            <Route path="admin" element={<AdminPage />} />
            <Route path="search" element={<SearchPage />} />
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
