import React,{useEffect} from 'react';
import ForgotPasswordForm from '../../Forms/ForgotPassword/ForgotPassword';
import {useSelector, useDispatch} from 'react-redux';
import {forgotPasswordHandler} from '../../../features/forgotPassword';
import { RootState } from '../../../app/store';
import Loader from '../../../components/Loader/Loader';
import {StyledWrapper, StyledFormContainer, StyledFormHeader, StyledIconContainer, StyledDescription} from './StyledForgotPassword';
import {FeatierArrowLeft} from '../../../icons';
import {useNavigate} from 'react-router-dom';
import {RouterPath} from '../../../routes';
import AuthWraper from '../AuthWrapper/AuthWrapper';
import ForgotPasswordImg from '../../../assets/forgotPassword.png';

interface ForgotPassword {
    emailId: string
}

const ForgotPassword: React.FC = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch();
    let loading = useSelector((state: RootState) => state.forgotPassword.isLoading);
    let isLinkSent = useSelector((state:RootState) => state.forgotPassword.isLinkSent);

    const onClickSendLink = (obj:ForgotPassword):void => {
        dispatch(forgotPasswordHandler(obj))
    }

    const routeToLogin = () => {
        navigate(RouterPath.signIn);
    }

    useEffect(() => {
        if (isLinkSent === true) {
            // navigate(RouterPath.resetPassword)
        }
    },[isLinkSent])

    return <StyledWrapper>
        <Loader isLoading={loading} />
        <AuthWraper imgUrl={ForgotPasswordImg} altText="forgot password" >
        <StyledFormContainer>
            <StyledFormHeader>
            <StyledIconContainer onClick={routeToLogin} >
                <FeatierArrowLeft />
            </StyledIconContainer>
            Forgot your password?
            </StyledFormHeader>
            <StyledDescription>
            Please enter your registered email address to reset the password
            </StyledDescription>
        <ForgotPasswordForm  onClickSendLink={onClickSendLink} />
        </StyledFormContainer>
        </AuthWraper>
    </StyledWrapper>
}

export default ForgotPassword