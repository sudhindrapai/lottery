import React from "react";

import * as localStorageActionType from './localStorage/ActionTypes';
import {getLocalStorage} from './localStorage/GetLocalStorage';

import {Routes, Route} from 'react-router-dom';

import Profile from './containers/Profile/Profile';
import Registration from './containers/Auth/Signup/SignUp';
import Signin from './containers/Auth/Siginin/Signin';
import PasswordUpdate from './containers/Auth/UpdatePassword/UpdatePassword';
import ResetPassword from './containers/Auth/ResetPassword/ResetPassword';
import ForgotPassword from './containers/Auth/ForgotPassword/ForgotPassword';
import Home from './containers/Home/home'

const AppRoutes = () => {
  const rootComponent = getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN) ? <Home /> : <Signin />
    return (
        <Routes>
            <Route path={"/account/profile"} element={<Profile />} />
            <Route path={"/account/registration"} element={<Registration />} />
            <Route path={"/account/signin"} element={<Signin />} />
            <Route path= {"/account/password-update"} element={<PasswordUpdate />} />
            <Route path={"/account/reset-password"} element={<ResetPassword />} />
            <Route path={"/account/forgot-password"} element={<ForgotPassword />} />
            <Route path={"/"} element={rootComponent} />
            <Route path={"*"} element={<h2>404</h2>} />
      </Routes>
    )
}

export default AppRoutes