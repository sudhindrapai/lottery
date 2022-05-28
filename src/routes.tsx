import React from "react";

import * as localStorageActionType from './localStorage/ActionTypes';
import {getLocalStorage} from './localStorage/GetLocalStorage';

import {Routes, Route} from 'react-router-dom';

import Profile from './containers/Profile/Profile';
import Registration from './containers/Auth/Signup/SignUp';
import Signin from './containers/Auth/Siginin/Signin';
import TwoFA from "./containers/Auth/TwoFA/TwoFA";
import PasswordUpdate from './containers/Auth/UpdatePassword/UpdatePassword';
import ResetPassword from './containers/Auth/ResetPassword/ResetPassword';
import ResendPwdResetLink from './containers/Auth/ResendMail/ResendMail';
import ForgotPassword from './containers/Auth/ForgotPassword/ForgotPassword';
import Home from './containers/Home/home';
import Lottery from './containers/Lotteries/Lotteries';
import LotteryPayment from "./containers/LotteryPayment/LotteryPayment";
import UrserProfile from './containers/UserProfile/UserProfile';

import commingSoonImgUrl from '../src/commingSoon.png'
const ComingSoonImg = () => {
  return <img src={commingSoonImgUrl} style={{maxHeight: "100%", maxWidth: "100%", height: "99vh", objectFit: "contain"}} />
}

export const RouterPath = {
  profile: "/temp/account/profile",
  signUp: "/temp/account/registration",
  signIn: "/temp/account/signin",
  twoFA: "/temp/account/2FA",
  updatePassword: "/temp/account/password-update",
  resetPassword: "/temp/account/reset-password",
  resendResetLink: "/temp/account/resend-pwd-reset-link",
  forgotPassword: "/temp/account/forgot-password",
  lotteries: "/temp/lottery",
  lotteryPaymentView: "/temp/lottery/payment",
  userProfile:"/temp/userProfile",
  tempRoot: "/temp",
  root: "/",
  notFound: "*"
};

const AppRoutes = () => {
  // const rootComponent = getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN) ? <Home /> : <Signin />;
  const rootComponent = getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN) ? <Home /> : <Home />;
    return (
        <Routes>
            <Route path={RouterPath.profile} element={<Profile />} />
            <Route path={RouterPath.signUp} element={<Registration />} />
            <Route path={RouterPath.signIn} element={<Signin />} />
            <Route path={RouterPath.twoFA} element={<TwoFA />} />
            <Route path= {RouterPath.updatePassword} element={<PasswordUpdate />} />
            <Route path={RouterPath.resetPassword} element={<ResetPassword />} />
            <Route path={RouterPath.resendResetLink} element={<ResendPwdResetLink />} />
            <Route path={RouterPath.forgotPassword} element={<ForgotPassword />} />
            <Route path={RouterPath.tempRoot} element={rootComponent} />
            <Route path={RouterPath.root} element={<ComingSoonImg />} />
            <Route path={RouterPath.lotteries} element={<Lottery />} />
            <Route path={RouterPath.lotteryPaymentView} element={<LotteryPayment />} />
            <Route path={RouterPath.userProfile} element={<UrserProfile />} />
            <Route path={RouterPath.notFound} element={<h2>404</h2>} />
      </Routes>
    )
}

export default AppRoutes