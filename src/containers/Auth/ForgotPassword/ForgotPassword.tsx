import React from 'react';
import ForgotPasswordForm from '../../Forms/ForgotPassword/ForgotPassword';
import Header from '../../../components/Header/Header';
import {useSelector, useDispatch} from 'react-redux';
import {forgotPasswordHandler} from '../../../features/forgotPassword';
import { RootState } from '../../../app/store';
import Loader from '../../../components/Loader/Loader';
import {StyledWrapper, StyledFormContainer, StyledFormHeader, StyledIconContainer, StyledDescription} from './StyledForgotPassword';
import {FeatierArrowLeft} from '../../../icons';
import {useNavigate} from 'react-router-dom';
import {RouterPath} from '../../../routes';

interface ForgotPassword {
    emailId: string
}

const ForgotPassword: React.FC = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch();
    let loading = useSelector((state: RootState) => state.forgotPassword.isLoading);

    const onClickSendLink = (obj:ForgotPassword):void => {
        dispatch(forgotPasswordHandler(obj))
    }

    const routeToLogin = () => {
        navigate(RouterPath.signIn);
    }

    return <StyledWrapper>
        <Header isHeaderVisible={true} />
        <Loader isLoading={loading} />
        <StyledFormContainer>
            <StyledFormHeader>
            <StyledIconContainer onClick={routeToLogin} >
                <FeatierArrowLeft />
            </StyledIconContainer>
            Forgot Password?
            </StyledFormHeader>
            <StyledDescription>
            Please enter your registered email address to reset the password
            </StyledDescription>
        <ForgotPasswordForm  onClickSendLink={onClickSendLink} />
        </StyledFormContainer>
    </StyledWrapper>
}

export default ForgotPassword