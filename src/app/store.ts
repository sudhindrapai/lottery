import {configureStore} from '@reduxjs/toolkit';
import Login from '../features/loginSlice';
import Register from '../features/registrationSlice';
import Profile from '../features/profileSlice';
import UpdatePassword from '../features/updatePasswordSlicd';
import ResetPassword from '../features/resetPassword';
import ForgotPassword from '../features/forgotPassword';
import Notifcation from "../features/notificationSlice";
import Navigation from "../features/navigationSlice";
import Lotteries from '../features/lotteriesSlice';
import ProfileSlide from '../features/userProfileSlice';
import PurchaseSlice from '../features/purchaseLotterySlice';
import AuctionSlice from '../features/auctionList';
import OrdersSlice from '../features/ordersSlice';
import ImageUploader from '../features/imageUploaderSlice'

const store = configureStore({
    reducer:{
       login:Login,
       register: Register,
       Profile: Profile,
       passwordUpdate: UpdatePassword,
       resetPassword: ResetPassword,
       forgotPassword: ForgotPassword,
       notifcation:Notifcation,
       navigation: Navigation,
       lotteries: Lotteries,
       userProfile: ProfileSlide,
       purchaseLottery: PurchaseSlice,
       auction: AuctionSlice,
       orders:OrdersSlice,
       images:ImageUploader
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;