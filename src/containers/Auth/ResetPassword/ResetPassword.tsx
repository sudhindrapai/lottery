import React from 'react';
import ResetPasswordForm from '../../Forms/ResetPassword/ResetPassword';
import Loader from '../../../components/Loader/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {resetPasswordHandler} from '../../../features/resetPassword';
import { RootState } from '../../../app/store';
import Header from '../../../components/Header/Header';
import {StyledWrapper, StyledFormContainer, StyledFormHeader, StyledIconContainer, StyledDescription} from './StyledResetPassword';

import {useNavigate} from 'react-router-dom';


import {FeatherCross} from '../../../icons'

interface ResetPassword {
    newPassword: string,
    confirmPassword: string
}


const ResetPassword:React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let loading = useSelector((state:RootState) => state.resetPassword.isLoading);

    const passwordResetHandler = (obj:ResetPassword):void => {
        dispatch(resetPasswordHandler(obj));
    }

    const routeToLogin = () => {
        navigate("/account/signin");
    }

    return <StyledWrapper>
        <Header isHeaderVisible={true} />
        <Loader isLoading={loading} />
        <StyledFormContainer>
            <StyledFormHeader>
                <StyledIconContainer onClick={routeToLogin} >
                    <FeatherCross />
                </StyledIconContainer>
                Set new password
            </StyledFormHeader>
            <StyledDescription>
            Here you can set new password for signing in to Kings Rings account. 
            Make sure you rember this password and keep it in a safe place. 
            You can change the password at any time by visiting Profile section.
            </StyledDescription>
        <ResetPasswordForm onResetPassword={passwordResetHandler} />
        </StyledFormContainer>
    </StyledWrapper>
};

export default ResetPassword