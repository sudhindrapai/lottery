import {FC, useEffect} from 'react';
import RegistratoinForm from '../../Forms/Registration/Registration';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import Loader from '../../../components/Loader/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {createSignup, toggleRegister} from '../../../features/registrationSlice';
import { RootState } from '../../../app/store';
import {FeatierArrowLeft} from '../../../icons';
import {useNavigate} from 'react-router-dom';
import {RouterPath} from '../../../routes';

import {StyledWrapper, StyledFormContainer, StyledFormHeader, StyledIconContainer} from './StylesSignup';

import RegImgUrl from '../../../assets/regImage.png';

interface CreateAccount {
    emailId: string,
    password: string,
    firstName:string,
    lastName:string,
    using2FA: boolean,
    agreeTC:boolean
}
const SignUp:FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoading = useSelector((state: RootState) => state.register.isLoading);
    const isSignedUp = useSelector((state: RootState) => state.register.isAccountCreated);

    const customerRegistrationHandler = (obj:CreateAccount):void => {
        dispatch(createSignup(obj))
    };

    const routeTologin = () => {
        navigate(RouterPath.signIn);
    }

    useEffect(() => {
        if (isSignedUp === true) {
            navigate(RouterPath.signIn);
        }
        return () => {
            dispatch(toggleRegister({
                isRegistered: false
            }));
        }
    },[isSignedUp])

    return <StyledWrapper>
        <Loader isLoading={isLoading} />
        <AuthWrapper imgUrl={RegImgUrl} altText={"registration image"} >
            <StyledFormContainer>
                <StyledFormHeader>
                    <StyledIconContainer onClick={routeTologin}>
                        <FeatierArrowLeft />
                    </StyledIconContainer>
                    Create an account
                </StyledFormHeader>
                <RegistratoinForm onRegister={customerRegistrationHandler} onSelectLogin={routeTologin} /> 
            </StyledFormContainer>
            </AuthWrapper>
        </StyledWrapper>
};

export default SignUp