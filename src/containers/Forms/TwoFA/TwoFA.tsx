import {useState, FC} from 'react';
import FormBuilder from '../../FormBuilder/FormBuilder';
import Button from '../../../components/UI/Buttons/Button';
import {updateFormInputState, validateForm} from '../../../Utility/Utility';
import {FormElement, FormElementType, ButtonSizeVariant,ButtonType, ButtonVariant, InputVariant, InputTypes, customValidationType} from '../../../Utility/InterFacesAndEnum';
import CountdownTimer from '../../../components/Timer/Timer';
import {ButtonWrapper} from './StyledTwoFA';

interface TwoFAFormState {
    form: FormElement[],
    resendCodeTimer:number;
    numberOfAttempt: number;
    maxNumberOfAttempt: number;
    isValidForm: boolean;
    isResendButtonVisible:false
}

interface TwoFAProps {
    onClickLogin(code:string): void;
    onClickResendCode() : void
}

const twoFAState:TwoFAFormState = {
    form: [
        {
            elementType: FormElementType.input,
            value: "",
            id: "verificationCode",
            isRequired: true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.number,
            customValidationType: customValidationType.null,
            isValidInput: false,
            isTouched: false,
            errorMessage: "",
            label: "Enter verification code",
            radioGroupValues: [],
            isPasswordHidden: true
        }
    ],
    resendCodeTimer: 10,
    numberOfAttempt: 1,
    maxNumberOfAttempt: 3,
    isValidForm: false,
    isResendButtonVisible: false
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

    const toggleResendOption = () => {
        console.log("toggleResendOption")
    };

    const onClickRestart = () => {};

    const handleFormSubmision = () => {
        let enteredCode = values.form[0].value;
        onClickLogin(enteredCode);
    }

    return <form name={"Customer Registration"} html-for={"customer resgistraion"} autoComplete="off">
        <FormBuilder formElements={values.form} onInputChange = {handleInputChange}  />
        <CountdownTimer totalDuration={180} 
        restartCounterText = {"Resend Code"}
        onReachEnd={toggleResendOption} 
        color={"#000000"} 
        fontSize={16} 
        maxResendAttempt = {2}
        resendTextColor = {"#FFB332"}
        restartCounter={onClickRestart} />
        <ButtonWrapper>
        <Button 
                    disabled={false} 
                    fullWidth={true} 
                    size={ButtonSizeVariant.medium} 
                    variant={ButtonVariant.contained} 
                    type={ButtonType.default} 
                    clicked={handleFormSubmision} >
                        Signin
                </Button>
                </ButtonWrapper>
    </form>
};

export default TwoFA