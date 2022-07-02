import {useEffect, FC} from 'react';
import {StyledWrapper, StyledFormContainer, Image} from './styleSignin';
import Loader from '../../../components/Loader/Loader';
import SigninForm from '../../Forms/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { createLogin, toggleLogin } from '../../../features/loginSlice';
import {getUserProfileDetail} from '../../../features/userProfileSlice';
import { useNavigate } from "react-router-dom";

import {RouterPath} from '../../../routes';
import LoginImage from '../../../assets/loginImage.png';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import LoginImg from '../../../assets/loginCupImg.png'

interface SigninAccount {
    emailId: string,
    password: string,
}

const Login:FC = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    let loadingState = useSelector((state:RootState) => state.login.isLoading);
    let isLoggedIn = useSelector((state:RootState) => state.login.isLoggedin);
    let isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated)

    const signinHandler = (obj:SigninAccount):void => {
        dispatch(createLogin(obj))
    }

    const redirectToForgotPassword = (): void => {
        navigate(RouterPath.forgotPassword);
    }

    const redirectToRegister = ():void => {
        navigate(RouterPath.signUp);
    } 

    useEffect(() => {
        if (isLoggedIn) {
            if (isAuthenticated) {
                dispatch(getUserProfileDetail());
                navigate(RouterPath.root);
            } else if (isAuthenticated === false) {
                navigate(RouterPath.twoFA);
            }
        } 
        return () => {
            dispatch(toggleLogin({
                isLoggedin: false,
                isAuthenticated: false
            }));
        } 
    }, [isLoggedIn]);

    return <StyledWrapper>
        <AuthWrapper imgUrl={LoginImg} altText={"loginImage"} >
        <StyledFormContainer>
            <Loader isLoading={loadingState} />
            <Image src={LoginImage} />
            <SigninForm onClickSignin={signinHandler} 
            onClickForgotPassword={redirectToForgotPassword} 
            onClickCreateAccount={redirectToRegister} />
        </StyledFormContainer>
        </AuthWrapper>
    </StyledWrapper>
};

export default Login;