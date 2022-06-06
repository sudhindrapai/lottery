import {FC, useState, useEffect, useRef} from 'react';

import FormBuilder from '../../FormBuilder/FormBuilder';
import {updateFormInputState, validateForm} from '../../../Utility/Utility';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement, ButtonSizeVariant, ButtonVariant, ButtonType} from '../../../Utility/InterFacesAndEnum';
import Button from '../../../components/UI/Buttons/Button';
import ImageUploader from '../../../components/ImageUploader/CustomImageUploader';

import {Container,FormSection} from './StyledPersonalInfo';

import * as localStorageActioinType from '../../../localStorage/ActionTypes';
import {getLocalStorage} from '../../../localStorage/GetLocalStorage';

import {updatePersonalDetails,uploadProfileImage} from '../../../features/userProfileSlice';
import {useSelector, useDispatch} from 'react-redux';

interface PersonalInfo {
    form: FormElement[],
    isValidForm: boolean
}

const PersonalInfoState:PersonalInfo  = {
    form: [
        {
            elementType: FormElementType.input,
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
            elementType: FormElementType.input,
            value:"",
            id:"secondName",
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
            customValidationType: customValidationType.numberValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Mobile Number",
            radioGroupValues:[],
            isPasswordHidden:true
        },
    ],
    isValidForm: true
}

const PersonalInfo:FC = () => {

    const dispatch = useDispatch();

    const [values, setValues] = useState<PersonalInfo>(PersonalInfoState);

    const userDetailRef = useRef({});

    useEffect(() => {
        if (Object.keys(userDetailRef.current).length === 0) {
            let userObj = getLocalStorage(localStorageActioinType.GET_USER_DETAILS);
            if (Object.keys(userObj).length > 0) {
                userDetailRef.current = userObj;
            }
            updateLocalForm(userDetailRef.current);
        }
        return () => {
            userDetailRef.current = {};
        }
    },[]);

    const handleInputChange = (event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void => {
        let updatedStateArray = updateFormInputState(event, values.form)
        setValues({
            ...values,
            form: updatedStateArray
        });
    }

    const updateLocalForm = (userObj: any) => {
        const {firstName, lastName, mobileNo} = JSON.parse(userObj);
        let updatedArry = [];
        for (let formObj of values.form) {
            if (formObj.id === "firstName") {
                formObj.value = firstName;
            }
            if (formObj.id === "secondName") {
                formObj.value = lastName;
            }
            if (formObj.id === "mobileNumber" && mobileNo) {
                formObj.value = mobileNo? "0" :parseInt(mobileNo);
            }
            updatedArry.push(formObj)
        }
        setValues({
            ...values,
            form:updatedArry,
            isValidForm: values.isValidForm
        })
    }

    const handleFormSubmision = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        interface updateProfile {
            firstName: string
            lastName: string,
            mobileNo: string
        }

        let updateProfileObj:updateProfile = {
            firstName: "",
            lastName: "",
            mobileNo: ""
        };
        for (let formObj of values.form) {
            if (formObj.id === "firstName") {
                updateProfileObj["firstName"] = formObj.value;
            }
            if (formObj.id === "secondName") {
                updateProfileObj["lastName"] = formObj.value;
            }
            if (formObj.id === "mobileNumber") {
                updateProfileObj["mobileNo"] = formObj.value;
            }
        };
        dispatch(updatePersonalDetails(updateProfileObj));
    }

    const onSelectProfileImage = (fileObj:any) => {
        console.log(fileObj,'fileObj')
        dispatch(uploadProfileImage(fileObj));
    }

    return <form name={"Customer Registration"} html-for={"customer resgistraion"} autoComplete="off">
        <Container>
        <ImageUploader url={""} onSelectImage={onSelectProfileImage} />
        <FormSection>
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
    </FormSection>
    </Container>
</form>

};

export default PersonalInfo
