import React, {useState} from 'react';
import FormBuilder from '../../FormBuilder/FormBuilder';
import {updateFormInputState, validateForm} from '../../../Utility/Utility';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement,
     ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../../Utility/InterFacesAndEnum';
import Button from '../../../components/UI/Buttons/Button'

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
            isPasswordHidden:true
        }
    ],
    isValidForm: false
}

const ForgotPassword:React.FC<ForgotPasswordProps> = ({onClickSendLink}) => {

    const [values, setValues] = useState<ForgotPasswordFormState>(ForgotPasswordFormInitalState);

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
        let ForgotPassword:ForgotPassword = {
            emailId: ""
        };
        for (let element of values.form){
            ForgotPassword["emailId"] = element.id === "emailId"? element.value : ForgotPassword.emailId
        }

        onClickSendLink(ForgotPassword);
    }

    return <form name={"Forgot Password"} html-for={"Forgot Password"} autoComplete="off">
                <FormBuilder formElements={values.form} onInputChange = {handleInputChange}  />
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