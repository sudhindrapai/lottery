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
import UserProfile from './containers/UserProfile/UserProfile';
import PaymentSuccess from './containers/LotteryPaymentSuccess/PaymentSuccess';
import Auction from './containers/Auction/AuctionList';
import AuctionDetail from './containers/AuctionDetail/AuctionDetail';
import CreateAuction from './containers/CreateAuction/CreateAuction';
import {AppRoutePath} from './features/navigationSlice';
import Purchases from './containers/Purchases/Purchases';
import AuctionPaymentSuccess from './containers/AuctionPaymentSuccess/PaymentSuccess';
import PaypalSuccess from './containers/PaymentStatus/Success/Success';
import PaypalFail from './containers/PaymentStatus/Fail/Fail';
import MembershipSuccess from './containers/BuyMembershipStatus/Success/Success';
import TextAreaComponent from './containers/TAndC/TandC';
import PrivacyPolicy from './containers/PrivacyPolicy/PrivacyPolicy';

export const RouterPath = {
  ...AppRoutePath
}

const AppRoutes = () => {
  // const rootComponent = getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN) ? <Home /> : <Signin />;
  const rootComponent = getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN) ? <Home /> : <Home />;
    return (
        <Routes>
            <Route path={RouterPath.profile} element={<UserProfile activeState={"PROFILE"} />} />
            <Route path={RouterPath.address} element={<UserProfile activeState={"ADDRESS"} />} />
            <Route path={RouterPath.changePassword} element={<UserProfile activeState={"CHANGE PASSWORD"} />} />
            <Route path={RouterPath.settings} element={<UserProfile activeState={"SETTINGS"} />} />
            <Route path={RouterPath.membership} element={<UserProfile activeState={"MEMBERSHIP"} />} />
            <Route path={RouterPath.signUp} element={<Registration />} />
            <Route path={RouterPath.signIn} element={<Signin />} />
            <Route path={RouterPath.twoFA} element={<TwoFA />} />
            <Route path={RouterPath.updatePassword} element={<PasswordUpdate />} />
            <Route path={RouterPath.resetPassword} element={<ResetPassword />} />
            <Route path={RouterPath.resendResetLink} element={<ResendPwdResetLink />} />
            <Route path={RouterPath.forgotPassword} element={<ForgotPassword />} />
            <Route path={RouterPath.tempRoot} element={rootComponent} />
            <Route path={RouterPath.root} element={rootComponent} />
            <Route path={RouterPath.lotteries} element={<Lottery />} />
            <Route path={RouterPath.lotteryPaymentView} element={<LotteryPayment />} />
            <Route path={RouterPath.lotteryPaymentSuccess} element={<PaymentSuccess />} />
            <Route path={RouterPath.userProfile} element={<UserProfile activeState={"PROFILE"} />} />
            <Route path={RouterPath.auctionList} element={<Auction />} />
            <Route path={RouterPath.notFound} element={<h2>404</h2>} />
            <Route path={RouterPath.auctionDetail} element={<AuctionDetail />} />
            <Route path={RouterPath.createAuction} element={<CreateAuction />} />
            <Route path={RouterPath.orders} element={<Purchases />} />
            <Route path={RouterPath.auctionPaymentSuccess} element={<AuctionPaymentSuccess />} />
            <Route path={RouterPath.paypalSuccess} element={<PaypalSuccess />} />
            <Route path={RouterPath.paypalFail} element={<PaypalFail />} />
            <Route path={RouterPath.membershipSuccess} element={<MembershipSuccess />} />
            <Route path={RouterPath.termsAndCondition} element={<TextAreaComponent />} />
            <Route path={RouterPath.privacyPolicy} element={<PrivacyPolicy />} />
      </Routes>
    )
}

export default AppRoutes