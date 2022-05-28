import {FC, useState} from 'react';
import Modal from '@mui/material/Modal';

import {ModalHeader, Title, CloseIcon, ModalBody} from '../BuyTicketModal/StyledBuyTicketsModal'
import {ModalBox, ActionBtn} from './StyledAddAddressModal'

import FormBuilder from '../../../containers/FormBuilder/FormBuilder';
import {updateFormInputState, validateForm} from '../../../Utility/Utility';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement, ButtonSizeVariant, ButtonVariant, ButtonType} from '../../../Utility/InterFacesAndEnum';
import Button from '../../../components/UI/Buttons/Button';

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

interface AddAddressProps {
    label: string,
    isVisible: boolean,
    toggleModal():void,
    onUpdateAddress(addressObj:UpdateAddressForm):void
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
            isPasswordHidden:true
        },
    ],
    isValidForm: true
}

const AddAddressModal:FC<AddAddressProps> = (props) => {

    const {isVisible, label, toggleModal, onUpdateAddress} = props;


    const [values, setValues] = useState<AddAddress>(AddAddressState);

    const handleInputChange = (event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void => {
        let updatedStateArray = updateFormInputState(event, values.form)
        setValues({
            ...values,
            form: updatedStateArray
        });
    }

  

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

    return <Modal open={isVisible} onClose={toggleModal}
    aria-labelledby={label}
    aria-describedby={label}>
        <ModalBox>
            <ModalHeader>
                <Title>
                    {label}
                </Title>
                <CloseIcon onClick={toggleModal}  />
            </ModalHeader>
            <ModalBody>
            <FormBuilder formElements={values.form} onInputChange = {handleInputChange}  />
                <ActionBtn>
                <Button 
                    disabled={false} 
                    fullWidth={true} 
                    size={ButtonSizeVariant.large} 
                    variant={ButtonVariant.contained} 
                    type={ButtonType.submit} 
                    clicked={handleFormSubmision} >
                        Save
                </Button>
                </ActionBtn>
            </ModalBody>
        </ModalBox>
    </Modal>
};

export default AddAddressModal