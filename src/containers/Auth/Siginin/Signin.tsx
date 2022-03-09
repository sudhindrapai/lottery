import React from 'react';
import {StyledLoginBox} from './styleSignin';
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

    return <StyledLoginBox>
        {loadingState && <div>...loading</div>}
        <h1>Signin</h1>
        <SigninForm onClickSignin={signinHandler} />
    </StyledLoginBox>
};

export default Login;