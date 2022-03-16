import React from 'react';
import {StyledWrapper, StyledFormContainer, Image} from './styleSignin';
import Loader from '../../../components/Loader/Loader';
import SigninForm from '../../Forms/Login/Login';
import Header from '../../../components/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { createLogin } from '../../../features/loginSlice';
import { useNavigate } from "react-router-dom";


import LoginImage from '../../../assets/loginImage.png'

interface SigninAccount {
    email: string,
    password: string
}

const Login: React.FC = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const signinHandler = (obj:SigninAccount):void => {
        dispatch(createLogin(obj))
    }

    const redirectToForgotPassword = (): void => {
        navigate("/temp/account/forgot-password");
    }

    const redirectToRegister = ():void => {
        navigate("/temp/account/registration");
    } 

    let loadingState = useSelector((state:RootState) => state.login.isLoading)

    return <StyledWrapper>
        <Header isHeaderVisible={true} />
        <StyledFormContainer>
            <Loader isLoading={loadingState} />
            <Image src={LoginImage} />
            <SigninForm onClickSignin={signinHandler} 
            onClickForgotPassword={redirectToForgotPassword} 
            onClickCreateAccount={redirectToRegister} />
        </StyledFormContainer>
    </StyledWrapper>
};

export default Login;