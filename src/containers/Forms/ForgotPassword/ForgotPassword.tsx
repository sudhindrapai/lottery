import React, {useState, useEffect} from 'react';
import FormBuilder from '../../FormBuilder/FormBuilder';
import {updateFormInputState} from '../../../Utility/Utility';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement,
     ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../../Utility/InterFacesAndEnum';
import Button from '../../../components/UI/Buttons/Button';

import {RootState} from '../../../app/store';
import {useSelector, useDispatch} from 'react-redux';
import {toggleLinkSentState} from '../../../features/forgotPassword'
import {RouterPath} from '../../../routes';
import {useNavigate} from 'react-router-dom';

import {validateForgotPassword} from '../../../Utility/formValidation';

import {NotificationType} from '../../../Utility/InterFacesAndEnum';
import {toggleNotificationVisibility} from '../../../features/notificationSlice';

interface ForgotPasswordFormState {
    form: FormElement[],
    isValidForm: boolean
}

interface ForgotPassword {
    emailId: string
}

interface ForgotPasswordProps {
    onClickSendLink(obj:ForgotPassword):void
}

const ForgotPasswordFormInitalState: ForgotPasswordFormState = {
    form:[
        {
            elementType: FormElementType.input,
            value:"",
            id:"emailId",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.emailValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Your Registered Email Id",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        }
    ],
    isValidForm: false
}

const ForgotPassword:React.FC<ForgotPasswordProps> = ({onClickSendLink}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [values, setValues] = useState<ForgotPasswordFormState>(ForgotPasswordFormInitalState);

    let isLinkSent = useSelector((state:RootState) => state.forgotPassword.isLinkSent);
    let publicUserId = useSelector((state:RootState) => state.forgotPassword.publicUserId);

    useEffect(() => {
        if (isLinkSent === true) {
            navigate(`/auth/password-reset/${publicUserId}`);
        }
        return () => {
            dispatch(toggleLinkSentState({
                isLinkSent: false
            }));
        }
    },[isLinkSent]);

    const handleInputChange = (event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void => {
        let updatedStateArray = updateFormInputState(event, values.form)
        setValues({
            ...values,
            form: updatedStateArray
        });
    }

    const handleFormSubmision = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        let ForgotPassword:ForgotPassword = {
            emailId: ""
        };
        for (let element of values.form){
            ForgotPassword["emailId"] = element.id === "emailId"? element.value : ForgotPassword.emailId
        }

        let validatedObj = validateForgotPassword(ForgotPassword)

        if (validatedObj.status === true) {
            onClickSendLink(ForgotPassword);
        } else {
            dispatch(toggleNotificationVisibility({
                isVisible: true,
                status: NotificationType.error,
                message: validatedObj.message
            }));
        }
    }

    return <form name={"Forgot Password"} html-for={"Forgot Password"} autoComplete="off">
                <FormBuilder formElements={values.form} onInputChange = {handleInputChange}  onChangeDate={() => {}}
                onSelectValueChange={() => {}} />
                <Button 
                appBtnType={AppButtonType.primaryBtn}
                    disabled={false} 
                    fullWidth={true} 
                    size={ButtonSizeVariant.medium} 
                    variant={ButtonVariant.contained} 
                    type={ButtonType.submit} 
                    clicked={handleFormSubmision} >
                        Send Link
                </Button>
        </form>
};

export default ForgotPassword