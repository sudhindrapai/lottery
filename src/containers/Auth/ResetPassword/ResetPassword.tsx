import React from 'react';
import ResetPasswordForm from '../../Forms/ResetPassword/ResetPassword';
import {useDispatch, useSelector} from 'react-redux';
import {resetPasswordHandler} from '../../../features/resetPassword';
import { RootState } from '../../../app/store';

interface ResetPassword {
    newPassword: string,
    confirmPassword: string
}


const ResetPassword:React.FC = () => {

    const dispatch = useDispatch();
    let loading = useSelector((state:RootState) => state.resetPassword.isLoading);

    const passwordResetHandler = (obj:ResetPassword):void => {
        dispatch(resetPasswordHandler(obj));
    }

    return <div>
        {loading && <div>...Loading</div>}
        Reset Password
        <ResetPasswordForm onResetPassword={passwordResetHandler} />
    </div>
};

export default ResetPassword