import React from 'react';
import RegistratoinForm from '../../Forms/Registration/Registration';
import Loader from '../../../components/Loader/Loader';
import Backdrop from '../../../components/Backdrop/Backdrop'
import {useDispatch, useSelector} from 'react-redux';
import {createSignup} from '../../../features/registrationSlice';
import { RootState } from '../../../app/store';

import {StyledWrapper, StyledFormContainer} from './StylesSignup';

interface CreateAccount {
    emailId: string,
    password: string,
    firstName:string,
    lastName:string,
}
const SignUp:React.FC = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector((state: RootState) => state.register.isLoading);

    const customerRegistrationHandler = (obj:CreateAccount):void => {
        dispatch(createSignup(obj))
    };

    return <StyledWrapper>
            <StyledFormContainer>
                <Loader isLoading={isLoading} />
                <h1>Registration</h1>
                <RegistratoinForm onRegister={customerRegistrationHandler} /> 
            </StyledFormContainer>
        </StyledWrapper>
};

export default SignUp