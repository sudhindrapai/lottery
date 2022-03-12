import React from 'react';
import ResetPasswordForm from '../../Forms/ResetPassword/ResetPassword';
import Loader from '../../../components/Loader/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {resetPasswordHandler} from '../../../features/resetPassword';
import { RootState } from '../../../app/store';

import {StyledWrapper, StyledFormContainer} from './StyledResetPassword'

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

    return <StyledWrapper>
        <StyledFormContainer>
        <Loader isLoading={loading} />
        Reset Password
        <ResetPasswordForm onResetPassword={passwordResetHandler} />
        </StyledFormContainer>
    </StyledWrapper>
};

export default ResetPassword