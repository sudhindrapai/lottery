import {useState, FC} from 'react';
import FormBuilder from '../../FormBuilder/FormBuilder';
import Button from '../../../components/UI/Buttons/Button';
import {updateFormInputState, validateForm} from '../../../Utility/Utility';
import {FormElement, FormElementType, ButtonSizeVariant,ButtonType, ButtonVariant, InputVariant, InputTypes, customValidationType} from '../../../Utility/InterFacesAndEnum';

interface TwoFAFormState {
    form: FormElement[],
    resendCodeTimer:number;
    numberOfAttempt: number;
    maxNumberOfAttempt: number;
    isValidForm: boolean;
}

interface TwoFAProps {
    onClickLogin(): void;
    onClickResendCode() : void
}

const twoFAState:TwoFAFormState = {
    form:[
        {
            elementType: FormElementType.input,
            value:"",
            id:"verificationCode",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.number,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Enter verification code",
            radioGroupValues:[],
            isPasswordHidden:true
        }
    ],
    resendCodeTimer: 180,
    numberOfAttempt: 1,
    maxNumberOfAttempt: 3,
    isValidForm: false
}

const TwoFA:FC<TwoFAProps> = ({onClickLogin, onClickResendCode}) => {
    const [values, setValues] = useState<TwoFAFormState>(twoFAState);

    const handleInputChange = (event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void => {
        let updatedStateArray = updateFormInputState(event, values.form)
        setValues({
            ...values,
            form: updatedStateArray
        });
    }

    return <form name={"Customer Registration"} html-for={"customer resgistraion"} autoComplete="off">
        <FormBuilder formElements={values.form} onInputChange = {handleInputChange}  />
    </form>
};

export default TwoFA