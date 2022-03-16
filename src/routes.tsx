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
import Home from './containers/Home/home';

import commingSoonImgUrl from '../src/commingSoon.png'
const ComingSoonImg = () => {
  return <img src={commingSoonImgUrl} style={{maxHeight: "100%", maxWidth: "100%", height: "99vh", objectFit: "contain"}} />
}

const AppRoutes = () => {
  const rootComponent = getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN) ? <Home /> : <Signin />
    return (
        <Routes>
            <Route path={"/temp/account/profile"} element={<Profile />} />
            <Route path={"/temp/account/registration"} element={<Registration />} />
            <Route path={"/temp/account/signin"} element={<Signin />} />
            <Route path= {"/temp/account/password-update"} element={<PasswordUpdate />} />
            <Route path={"/temp/account/reset-password"} element={<ResetPassword />} />
            <Route path={"/temp/account/forgot-password"} element={<ForgotPassword />} />
            <Route path={"/temp"} element={rootComponent} />
            <Route path={"/"} element={<ComingSoonImg />} />
            <Route path={"*"} element={<h2>404</h2>} />
      </Routes>
    )
}

export default AppRoutes