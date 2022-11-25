import React, {useState, FC, Fragment, useEffect, useRef} from 'react';
import FormBuilder from '../../FormBuilder/FormBuilder';
import Button from '../../../components/UI/Buttons/Button';
import {updateFormInputState, validateForm} from '../../../Utility/Utility';
import {ActionBtn} from './StyledAddAddressForm';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement,
     ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../../Utility/InterFacesAndEnum';

import * as localStorageActioinType from '../../../localStorage/ActionTypes';
import {getLocalStorage} from '../../../localStorage/GetLocalStorage';

interface AddAddress {
    form: FormElement[],
    isValidForm: boolean
}

interface UpdateAddressForm {
    address:string,
    country:string,
    state:string,
    pinCode:string
}

interface AddAddressProps{
    onUpdateAddress(obj:UpdateAddressForm):void
}

const AddAddressState: AddAddress = {
    form:[
        {
            elementType: FormElementType.input,
            value:"",
            id:"address",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: true,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.characterValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Address",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.input,
            value:"",
            id:"state",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: true,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.characterValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"State",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.input,
            value:"",
            id:"country",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: true,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.characterValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Country",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.input,
            value:"",
            id:"pincode",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Pincode/Zipcode",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
    ],
    isValidForm: true
}

const AddressForm:FC<AddAddressProps> = ({onUpdateAddress}) => {

    const [values, setValues] = useState<AddAddress>(AddAddressState);

    const userDetailRef = useRef({});

    const handleInputChange = (event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void => {
        let updatedStateArray = updateFormInputState(event, values.form)
        setValues({
            ...values,
            form: updatedStateArray
        });
    }

    useEffect(() => {
        let userObj = getLocalStorage(localStorageActioinType.GET_USER_DETAILS);
        if (Object.keys(userObj).length > 0) {
            userDetailRef.current = userObj;
            let {pincCde,country,state,address} = JSON.parse(userObj);

            let updatedArry = [];
            for (let formObj of values.form) {
                if (formObj.id === "address") {
                    formObj.value = address;
                }
                if (formObj.id === "state") {
                    formObj.value = state;
                }
                if (formObj.id === "country") {
                    formObj.value = country;
                }
                if (formObj.id === "pincode") {
                    formObj.value = pincCde;
                }
                updatedArry.push(formObj)   
            }

            console.log(updatedArry,"updatedArry")

            setValues({
                ...values,
                form:updatedArry,
                isValidForm: values.isValidForm
            });

        }
    },[])

  

    const handleFormSubmision = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        let updateAddressObj:UpdateAddressForm = {
            "address":"",
            "country":"",
            "state":"",
            "pinCode":""
        };

        for (let formObj of values.form) {
            if (formObj.id === "address") {
                updateAddressObj["address"] = formObj.value;
            }
            if (formObj.id === "state") {
                updateAddressObj["state"] = formObj.value;
            }
            if (formObj.id === "country") {
                updateAddressObj["country"] = formObj.value;
            }
            if (formObj.id === "pincode") {
                updateAddressObj["pinCode"] = formObj.value;
            }
        }

        onUpdateAddress(updateAddressObj);
    }

    return <Fragment> 
        <FormBuilder formElements={values.form} onInputChange = {handleInputChange} 
        onChangeDate={() => {}}
        onSelectValueChange={() => {}}  />
    <ActionBtn>
    <Button 
    appBtnType={AppButtonType.primaryBtn}
        disabled={false} 
        fullWidth={true} 
        size={ButtonSizeVariant.large} 
        variant={ButtonVariant.contained} 
        type={ButtonType.submit} 
        clicked={handleFormSubmision} >
            Save
    </Button>
    </ActionBtn>
    </Fragment>
}

export default AddressForm