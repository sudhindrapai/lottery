import {useState} from 'react';
import FormBuilder from '../../FormBuilder/FormBuilder';
import {updateFormInputState} from '../../../Utility/Utility';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement,
     ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../../Utility/InterFacesAndEnum';
import Button from '../../../components/UI/Buttons/Button';

import {useParams} from 'react-router-dom';

interface ResetPasswordFormState {
    form: FormElement[],
    isValidForm: boolean
}

interface ResetPasswordObj {
    newPassword: string,
    confirmPassword: string,
    otp:string
}

interface ResetPasswordProps {
    onResetPassword(obj:ResetPasswordObj):void
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
            dropdownValues:[],
            slectedDate:null,
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
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.input,
            value:"",
            id:"otp",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.number,
            customValidationType: customValidationType.numberValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"6 digit OTP",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
    ],
    isValidForm: false
}

const ResetPassword:React.FC<ResetPasswordProps> = ({onResetPassword}) => {

    const [values, setValues] = useState<ResetPasswordFormState>(ResetPasswordFormInitalState);

    const param = useParams();

    const handleInputChange = (event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void => {
        let updatedStateArray = updateFormInputState(event, values.form)
        setValues({
            ...values,
            form: updatedStateArray
        });
    }

    const handleFormSubmision = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

        let resetPassword:ResetPasswordObj = {
            newPassword: "",
            confirmPassword: "",
            otp:""
        };
        for (let element of values.form){
            resetPassword["newPassword"] = element.id === "newPassword"? element.value : resetPassword.newPassword
            resetPassword["confirmPassword"] = element.id === "confirmPassword" ? element.value : resetPassword.confirmPassword
            resetPassword["otp"] = element.id === "otp" ? element.value : resetPassword.otp;
        }
        onResetPassword(resetPassword)
    }

    return <form name={"Customer password update"} html-for={"customer password update"} autoComplete="off">
                <FormBuilder formElements={values.form} onInputChange = {handleInputChange}
                onChangeDate={() => {}}
                 onSelectValueChange={() => {}} />
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

export default ResetPassword