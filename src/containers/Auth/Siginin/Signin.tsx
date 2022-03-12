import React from 'react';
import {StyledWrapper, StyledFormContainer} from './styleSignin';
import Loader from '../../../components/Loader/Loader';
import SigninForm from '../../Forms/Login/Login'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import {createLogin} from '../../../features/loginSlice';

interface SigninAccount {
    email: string,
    password: string
}

const Login: React.FC = () => {

    const dispatch = useDispatch();

    const signinHandler = (obj:SigninAccount):void => {
        dispatch(createLogin(obj))
    }

    let loadingState = useSelector((state:RootState) => state.login.isLoading)

    return <StyledWrapper>
        <StyledFormContainer>
            <Loader isLoading={loadingState} />
            <h1>Signin</h1>
            <SigninForm onClickSignin={signinHandler} />
        </StyledFormContainer>
    </StyledWrapper>
};

export default Login;