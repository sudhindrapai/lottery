import React, {useState} from 'react';
import FormBuilder from '../../FormBuilder/FormBuilder';
import Button from '../../../components/UI/Buttons/Button';
import {updateFormInputState, validateForm} from '../../../Utility/Utility';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement, 
    ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../../Utility/InterFacesAndEnum';
import {LoginAccountContainer,LoginAccountOption,TermsConditionContainer, EmptyCheckbox,
     SelectedCheckbox, TermsText} from './StyledReg'

interface RegFormState {
    form: FormElement[],
    isValidForm: boolean
}

interface RegistrationProps {
    onRegister(obj:CreateAccount):void,
    onSelectLogin():void
}

interface CreateAccount {
    emailId: string,
    password: string,
    firstName: string,
    lastName: string
}

const registrationFormInitalState: RegFormState = {
    form:[
        {
            elementType:FormElementType.input,
            value:"",
            id:"firstName",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: true,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.characterValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"First Name",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType:FormElementType.input,
            value:"",
            id:"lastName",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: true,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.characterValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Last Name",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.input,
            value:"",
            id:"mobileNumber",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: true,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.number,
            customValidationType: customValidationType.mobileValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Mobile Number",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
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

const RegistrationForm:React.FC<RegistrationProps> = ({onRegister, onSelectLogin}) => {

    const [values, setValues] = useState<RegFormState>(registrationFormInitalState);

    const [isAgreed, setAgreeState] = useState<boolean>(false) 

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
        let createRegMethod:CreateAccount = {
            emailId: "",
            password: "",
            firstName:"",
            lastName:"",
        };
        
        for (let element of values.form){
            createRegMethod["emailId"] = element.id === "email"?element.value: createRegMethod.emailId;
            createRegMethod["password"] = element.id === "password"? element.value : createRegMethod.password;
            createRegMethod["firstName"] = element.id === "firstName"? element.value : createRegMethod.firstName;
            createRegMethod["lastName"] = element.id === "lastName"? element.value : createRegMethod.lastName;
        }
        onRegister(createRegMethod);
    }

    const toggleAgreeState = () => {
        setAgreeState(!isAgreed);
    }

    return <form name={"Customer Registration"} html-for={"customer resgistraion"} autoComplete="off">
                <FormBuilder formElements={values.form} onInputChange = {handleInputChange}
                onChangeDate={() => {}}
                 onSelectValueChange={() => {}}  />
                <TermsConditionContainer >
                    {isAgreed ? <SelectedCheckbox onClick={toggleAgreeState} /> : <EmptyCheckbox onClick={toggleAgreeState} />}
                    <TermsText>
                    Agree to <span>terms and conditions</span>
                    </TermsText>
                </TermsConditionContainer>
                <Button 
                appBtnType={AppButtonType.primaryBtn}
                    disabled={false} 
                    fullWidth={true}  
                    size={ButtonSizeVariant.medium} 
                    variant={ButtonVariant.contained} 
                    type={ButtonType.submit} 
                    clicked={handleFormSubmision}>
                    Create
                </Button>
                <LoginAccountContainer>
                    Already have an account?
                    <LoginAccountOption onClick={onSelectLogin}>
                        Login
                    </LoginAccountOption>
                </LoginAccountContainer>
        </form>
};

export default RegistrationForm