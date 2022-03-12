import React from 'react';
import ForgotPasswordForm from '../../Forms/ForgotPassword/ForgotPassword';
import {useSelector, useDispatch} from 'react-redux';
import {forgotPasswordHandler} from '../../../features/forgotPassword';
import { RootState } from '../../../app/store';
import Loader from '../../../components/Loader/Loader';
import {StyledWrapper, StyledFormContainer} from './StyledForgotPassword';

interface ForgotPassword {
    emailId: string
}

const ForgotPassword: React.FC = () => {

    const dispatch = useDispatch();
    let loading = useSelector((state: RootState) => state.forgotPassword.isLoading);

    const onClickSendLink = (obj:ForgotPassword):void => {
        dispatch(forgotPasswordHandler(obj))
    }

    return <StyledWrapper>
        <StyledFormContainer>
        <Loader isLoading={loading} />
        <h1>Forgot Password</h1>
        <ForgotPasswordForm  onClickSendLink={onClickSendLink} />
        </StyledFormContainer>
    </StyledWrapper>
}

export default ForgotPassword