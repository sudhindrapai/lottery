import React from 'react';
import RegistratoinForm from '../../Forms/Registration/Registration';
import Loader from '../../../components/Loader/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {createSignup} from '../../../features/registrationSlice';
import { RootState } from '../../../app/store';
import {FeatierArrowLeft} from '../../../icons';
import {useNavigate} from 'react-router-dom';
import Header from '../../../components/Header/Header';
import {RouterPath} from '../../../routes';

import {StyledWrapper, StyledFormContainer, StyledFormHeader, StyledIconContainer} from './StylesSignup';

interface CreateAccount {
    emailId: string,
    password: string,
    firstName:string,
    lastName:string,
}
const SignUp:React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoading = useSelector((state: RootState) => state.register.isLoading);

    const customerRegistrationHandler = (obj:CreateAccount):void => {
        dispatch(createSignup(obj))
    };

    const routeTologin = () => {
        navigate(RouterPath.signIn);
    }

    return <StyledWrapper>
        <Header isHeaderVisible={true} />
        <Loader isLoading={isLoading} />
            <StyledFormContainer>
                <StyledFormHeader>
                    <StyledIconContainer onClick={routeTologin}>
                        <FeatierArrowLeft />
                    </StyledIconContainer>
                    Sign up
                </StyledFormHeader>
                <RegistratoinForm onRegister={customerRegistrationHandler} onSelectLogin={routeTologin} /> 
            </StyledFormContainer>
        </StyledWrapper>
};

export default SignUp