import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {forgotPasswordHandler} from '../../../features/forgotPassword';
import { RootState } from '../../../app/store';
import Loader from '../../../components/Loader/Loader';
import {StyledWrapper, StyledFormContainer, StyledFormHeader, StyledIconContainer,StyledResendBtn ,StyledDescription, StyledResetLinkTitle} from './StyledResendMail';
import {FeatierArrowLeft} from '../../../icons';
import {useNavigate} from 'react-router-dom';
import {RouterPath} from '../../../routes';
import AuthWraper from '../AuthWrapper/AuthWrapper';
import ForgotPasswordImg from '../../../assets/forgotPassword.png';

interface ForgotPassword {
    emailId: string
}

const ResendPWDResetLink: React.FC = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch();
    let loading = useSelector((state: RootState) => state.forgotPassword.isLoading);

    const onClickSendLink = ():void => {
        // dispatch(forgotPasswordHandler(obj))
    }

    const routeToLogin = () => {
        navigate(RouterPath.signIn);
    }

    return <StyledWrapper>
        <Loader isLoading={loading} />
        <AuthWraper imgUrl={ForgotPasswordImg} altText="forgot password" >
        <StyledFormContainer>
            <StyledFormHeader>
            <StyledIconContainer onClick={routeToLogin} >
                <FeatierArrowLeft />
            </StyledIconContainer>
            Check Your Email
            </StyledFormHeader>
            <StyledDescription>
            Please check the email address associated with the email address which you have 
            mentioned for instructions to reset yout password.
            </StyledDescription>
            <StyledResetLinkTitle>
            Didn’t receive an email?
            </StyledResetLinkTitle>
            <StyledResendBtn onClick={onClickSendLink} >
                Resend email
            </StyledResendBtn>
        </StyledFormContainer>
        </AuthWraper>
    </StyledWrapper>
}

export default ResendPWDResetLink