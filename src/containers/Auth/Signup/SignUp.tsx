import React from 'react';
import RegistratoinForm from '../../Forms/Registration/Registration';
import {useDispatch, useSelector} from 'react-redux';
import {createSignup} from '../../../features/registrationSlice';
import { RootState } from '../../../app/store';
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

    return <div>
        {isLoading && <div>...loading</div>}
        <h1>Registration</h1>
        <RegistratoinForm onRegister={customerRegistrationHandler} /> 
        </div>
};

export default SignUp