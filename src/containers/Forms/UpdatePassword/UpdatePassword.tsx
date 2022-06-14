import React, {useState} from 'react';
import FormBuilder from '../../FormBuilder/FormBuilder';
import {updateFormInputState, validateForm} from '../../../Utility/Utility';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement,
     ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../../Utility/InterFacesAndEnum';
import Button from '../../../components/UI/Buttons/Button'

interface UpdatePasswordFormState {
    form: FormElement[],
    isValidForm: boolean
}

interface updatePassword {
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
}

interface UpdatePasswordProps{
    onUpdatePassword(obj:updatePassword):void
}

const UpdatePasswordFormInitalState: UpdatePasswordFormState = {
    form:[
        {
            elementType: FormElementType.password,
            value:"",
            id:"oldPassword",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.emailValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Your Old Password",
            radioGroupValues:[],
            isPasswordHidden:true
        },
        {
            elementType:FormElementType.password,
            value:"",
            id:"newPassword",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.password,
            customValidationType: customValidationType.null,
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

const UpdatePassword:React.FC<UpdatePasswordProps> = ({onUpdatePassword}) => {

    const [values, setValues] = useState<UpdatePasswordFormState>(UpdatePasswordFormInitalState);

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
        let updatePassword:updatePassword = {
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        };
        for (let element of values.form){
            updatePassword["oldPassword"] = element.id === "oldPassword"?element.value: updatePassword.oldPassword;
            updatePassword["newPassword"] = element.id === "newPassword"? element.value : updatePassword.newPassword;
            updatePassword["confirmPassword"] = element.id === "confirmPassword" ? element.value : updatePassword.confirmPassword;
        }

        onUpdatePassword(updatePassword);
    }

    return <form name={"Customer password update"} html-for={"customer password update"} autoComplete="off">
                <FormBuilder formElements={values.form} onInputChange = {handleInputChange}  />
                <Button 
                appBtnType={AppButtonType.primaryBtn}
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

export default UpdatePassword