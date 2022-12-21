import React, { useEffect } from 'react';
import ResetPasswordForm from '../../Forms/ResetPassword/ResetPassword';
import Loader from '../../../components/Loader/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {resetPasswordHandler,togglePasswordUpdateState} from '../../../features/resetPassword';
import { RootState } from '../../../app/store';
import {StyledWrapper, StyledFormContainer, StyledFormHeader, StyledIconContainer, StyledDescription} from './StyledResetPassword';

import {useNavigate, useParams} from 'react-router-dom';
import AuthWrapper from '../AuthWrapper/AuthWrapper';

import {FeatherCross} from '../../../icons';
import {RouterPath} from '../../../routes';
import RegImgUrl from '../../../assets/registerImg.png';

import {validateResetPassword} from '../../../Utility/formValidation';
import {NotificationType} from '../../../Utility/InterFacesAndEnum';
import {toggleNotificationVisibility} from '../../../features/notificationSlice';

interface ResetPassword {
    newPassword: string,
    confirmPassword: string,
    otp:string
}


const ResetPassword:React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const parm = useParams();

    let loading = useSelector((state:RootState) => state.resetPassword.isLoading);
    let isPasswordUpdated = useSelector((state:RootState) => state.resetPassword.isPasswordUpdated);

    useEffect(() => {
        if (isPasswordUpdated === true) {
            navigate(RouterPath.signIn);
            dispatch(togglePasswordUpdateState({
                isPasswordUpdated: false
            }))
        }
    },[isPasswordUpdated]);

    const passwordResetHandler = (obj:ResetPassword):void => {
    
        let validatedObj = validateResetPassword(obj);

        if (validatedObj.status === true) {
            let resetObj = {
                requestBody:obj,
                userId:parm.publicUserId
            }
                dispatch(resetPasswordHandler(resetObj));
        } else {
            dispatch(toggleNotificationVisibility({
                isVisible: true,
                status: NotificationType.error,
                message: validatedObj.message
            }));
        }

    }

    const routeToLogin = () => {
        navigate(RouterPath.signIn);
    }

    return <StyledWrapper>
        <Loader isLoading={loading} />
        <AuthWrapper imgUrl={RegImgUrl} altText={"Forgot password"} >
        <StyledFormContainer>
            <StyledFormHeader>
                <StyledIconContainer onClick={routeToLogin} >
                    <FeatherCross />
                </StyledIconContainer>
                Set New Password
            </StyledFormHeader>
            <StyledDescription>
            Here you can set new password for signing in to Kings Rings account. 
            Make sure you rember this password and keep it in a safe place. 
            You can change the password at any time by visiting Profile section.
            </StyledDescription>
        <ResetPasswordForm onResetPassword={passwordResetHandler} />
        </StyledFormContainer>
        </AuthWrapper>
    </StyledWrapper>
};

export default ResetPassword