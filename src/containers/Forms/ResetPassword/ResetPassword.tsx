import React, {useState} from 'react';
import FormBuilder from '../../FormBuilder/FormBuilder';
import {updateFormInputState, validateForm} from '../../../Utility/Utility';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement, ButtonSizeVariant, ButtonVariant, ButtonType} from '../../../Utility/InterFacesAndEnum';
import Button from '../../../components/UI/Buttons/Button';

interface ResetPasswordFormState {
    form: FormElement[],
    isValidForm: boolean
}

interface ResetPassword {
    newPassword: string,
    confirmPassword: string
}

interface ResetPasswordProps {
    onResetPassword(obj:ResetPassword):void
}


const ResetPasswordFormInitalState: ResetPasswordFormState = {
    form:[
        {
            elementType: FormElementType.password,
            value:"",
            id:"newPassword",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.emailValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"New Password",
            radioGroupValues:[],
            isPasswordHidden:true
        },
        {
            elementType:FormElementType.password,
            value:"",
            id:"confirmPassword",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.password,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Confirm Password",
            radioGroupValues:[],
            isPasswordHidden:true
        }
    ],
    isValidForm: false
}

const ResetPassword:React.FC<ResetPasswordProps> = ({onResetPassword}) => {

    const [values, setValues] = useState<ResetPasswordFormState>(ResetPasswordFormInitalState);

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
        let resetPassword:ResetPassword = {
            newPassword: "",
            confirmPassword: ""
        };
        for (let element of values.form){
            resetPassword["newPassword"] = element.id === "newPassword"? element.value : resetPassword.newPassword
            resetPassword["confirmPassword"] = element.id === "confirmPassword" ? element.value : resetPassword.confirmPassword
        }
        onResetPassword(resetPassword)
    }

    return <form name={"Customer password update"} html-for={"customer password update"} autoComplete="off">
                <FormBuilder formElements={values.form} onInputChange = {handleInputChange}  />
                <Button 
                    disabled={false} 
                    fullWidth={true} 
                    size={ButtonSizeVariant.medium} 
                    variant={ButtonVariant.contained} 
                    type={ButtonType.submit} 
                    clicked={handleFormSubmision} >
                        Update
                </Button>
        </form>
};

export default ResetPassword