import {FC, useState} from 'react';

import FormBuilder from '../../FormBuilder/FormBuilder';
import {updateFormInputState, validateForm} from '../../../Utility/Utility';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement, ButtonSizeVariant, ButtonVariant, ButtonType} from '../../../Utility/InterFacesAndEnum';
import Button from '../../../components/UI/Buttons/Button';

import {updatePasswordHandler} from '../../../features/updatePasswordSlicd';
import {useSelector, useDispatch} from 'react-redux';

interface PasswordUpdate {
    form: FormElement[],
    isValidForm: boolean
}

interface UpdatePassword {
    oldPassword:string,
    newPassword:string,
    confirmPassword:string
}

const passwordUpdateState:PasswordUpdate  = {
    form: [
        {
            elementType: FormElementType.password,
            value:"",
            id:"oldPassword",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.password,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Old Password",
            radioGroupValues:[],
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.password,
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
            elementType: FormElementType.password,
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
        },
    ],
    isValidForm: true
}

const PersonalInfo = () => {

    const dispatch = useDispatch();

    const [values, setValues] = useState<PasswordUpdate>(passwordUpdateState);

    const handleInputChange = (event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void => {
        let updatedStateArray = updateFormInputState(event, values.form)
        setValues({
            ...values,
            form: updatedStateArray
        });
    }

    const handleFormSubmision = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        
        let updatePasswordObj:UpdatePassword = {
            "oldPassword": "",
            "newPassword": "",
            "confirmPassword": ""
        }

        for (let formObj of values.form) {

            if (formObj.id === "oldPassword") {
                updatePasswordObj["oldPassword"] = formObj.value;
            }
            if (formObj.id === "newPassword") {
                updatePasswordObj["newPassword"] = formObj.value;
            }
            if (formObj.id === "confirmPassword") {
                updatePasswordObj["confirmPassword"] = formObj.value;
            }

        }
        dispatch(updatePasswordHandler(updatePasswordObj));
    }

    return <form name={"Customer Registration"} html-for={"customer resgistraion"} autoComplete="off">
    <FormBuilder formElements={values.form} onInputChange = {handleInputChange} onDateSelect={() => {}}  />
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

export default PersonalInfo
