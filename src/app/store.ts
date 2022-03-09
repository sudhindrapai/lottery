import {configureStore} from '@reduxjs/toolkit';
import Login from '../features/loginSlice';
import Register from '../features/registrationSlice';
import Profile from '../features/profileSlice';
import UpdatePassword from '../features/updatePasswordSlicd';
import ResetPassword from '../features/resetPassword';
import ForgotPassword from '../features/forgotPassword'

const store = configureStore({
    reducer:{
       login:Login,
       register: Register,
       Profile: Profile,
       passwordUpdate: UpdatePassword,
       resetPassword: ResetPassword,
       forgotPassword: ForgotPassword
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;