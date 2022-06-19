import React, {useState} from 'react';
import FormBuilder from '../../FormBuilder/FormBuilder';
import Button from '../../../components/UI/Buttons/Button';
import {updateFormInputState, validateForm} from '../../../Utility/Utility';
import {ForgotPassword, CreateAccountContainer, CreateAccountOption} from './StyledLogin'
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement,
     ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../../Utility/InterFacesAndEnum';

interface SigninFormState {
    form: FormElement[],
    isValidForm: boolean
}

interface SigninAccount {
    emailId: string,
    password: string,
    rememberMe: boolean
}

interface SigninProps {
    onClickSignin(obj:SigninAccount):void
    onClickForgotPassword(): void
    onClickCreateAccount():void
}

const signinFormInitalState: SigninFormState = {
    form:[
        {
            elementType: FormElementType.input,
            value:"",
            id:"email",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: true,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.emailValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Email Id",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType:FormElementType.password,
            value:"",
            id:"password",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.password,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Password",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        }
    ],
    isValidForm: false
}

const SigninForm:React.FC<SigninProps> = ({onClickSignin, onClickForgotPassword, onClickCreateAccount}) => {
    const [values, setValues] = useState<SigninFormState>(signinFormInitalState);

    const handleInputChange = (event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void => {
        let updatedStateArray = updateFormInputState(event, values.form)
        setValues({
            ...values,
            form: updatedStateArray
        });
    }

    const handleFormSubmision = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        let isValidForm = validateForm(values.form);
        let createSignin:SigninAccount = {
            emailId: "",
            password: "",
            rememberMe: false
        };
        for (let element of values.form){
            createSignin["emailId"] = element.id === "email"?element.value: createSignin.emailId;
            createSignin["password"] = element.id === "password"? element.value : createSignin.password;
            createSignin["rememberMe"] = true;
        }

        onClickSignin(createSignin);
    }

    return <form name={"Customer Registration"} html-for={"customer resgistraion"} autoComplete="off">
                <FormBuilder formElements={values.form} onInputChange = {handleInputChange} onChangeDate={() => {}}  onSelectValueChange={() => {}}  />
                <ForgotPassword onClick={onClickForgotPassword}>
                    Forgot Password?
                </ForgotPassword>
                <Button 
                appBtnType={AppButtonType.primaryBtn}
                    disabled={false} 
                    fullWidth={true} 
                    size={ButtonSizeVariant.medium} 
                    variant={ButtonVariant.contained} 
                    type={ButtonType.submit} 
                    clicked={handleFormSubmision} >
                        Signin
                </Button>
                <CreateAccountContainer onClick={onClickCreateAccount}>
                    Don't have an account? <CreateAccountOption>Sign up</CreateAccountOption>
                </CreateAccountContainer>
        </form>
};

export default SigninForm