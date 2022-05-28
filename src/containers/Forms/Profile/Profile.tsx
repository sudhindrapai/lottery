import React, {useState} from 'react';
import FormBuilder from '../../FormBuilder/FormBuilder';
import {updateFormInputState, validateForm} from '../../../Utility/Utility';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement, ButtonSizeVariant, ButtonVariant, ButtonType} from '../../../Utility/InterFacesAndEnum';
import Button from '../../../components/UI/Buttons/Button'

interface SigninFormState {
    form: FormElement[],
    isValidForm: boolean
}

interface UpdateProfileObj{
    email: string,
    firstName:string,
    lastName: string,
    gendar:string,
    address: string,
    mobileNumber: string
}

interface ProfileProps{
    onUpdateProfile(obj:UpdateProfileObj):void
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
            isPasswordHidden:true
        },
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
            isPasswordHidden:true
        },
        {
            elementType:FormElementType.input,
            value:"",
            id:"lastName",
            isRequired:false,
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
            isPasswordHidden:true
        },
        {
            elementType:FormElementType.radioGroup,
            value:"male",
            id:"gendar",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: true,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.characterValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Gendar",
            radioGroupValues:[
                {
                    title:"Male",
                    value:"male"
                },
                {
                    title:"Female",
                    value:"Female"
                },
                {
                    title:"I prefer not to say",
                    value:"other"
                }
            ],
            isPasswordHidden:true
        },
        {
            elementType:FormElementType.textArea,
            value: "",
            id:"address",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Address",
            radioGroupValues:[],
            isPasswordHidden:true,
            row:3
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
            isPasswordHidden:true
        },
    ],
    isValidForm: false
}

const SigninForm:React.FC<ProfileProps> = ({onUpdateProfile}) => {

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
        let updateProfileObj: UpdateProfileObj = {
            email: "",
            firstName: "",
            lastName: "",
            gendar:"",
            address: "",
            mobileNumber: ""
        };
        for (let element of values.form) {
            updateProfileObj["email"] = element.id == "email" ? element.value : updateProfileObj.email; 
            updateProfileObj["firstName"] = element.id == "firstName" ? element.value : updateProfileObj.firstName;
            updateProfileObj["lastName"] = element.id == "lastName" ? element.value : updateProfileObj.lastName;
            updateProfileObj["gendar"] = element.id == "gendar" ? element.value : updateProfileObj.gendar;
            updateProfileObj["address"] = element.id == "address" ? element.value : updateProfileObj.address;
            updateProfileObj["mobileNumber"] = element.id == "mobileNumber" ? element.value : updateProfileObj.mobileNumber;

        }
        // console.log(updateProfileObj,"mobileNumber");
        onUpdateProfile(updateProfileObj)
    }

    const onDateSelect = (date: Date, name: string) => {}

    return <form name={"Customer Registration"} html-for={"customer resgistraion"} autoComplete="off">
                <FormBuilder formElements={values.form} onInputChange = {handleInputChange} onDateSelect={onDateSelect}  />
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

export default SigninForm