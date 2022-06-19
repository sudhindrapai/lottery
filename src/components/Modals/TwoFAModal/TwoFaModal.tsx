import {FC, useState} from 'react';
import Modal from '@mui/material/Modal';

import {ModalHeader, Title, CloseIcon} from '../BuyTicketModal/StyledBuyTicketsModal';
import {ModalBox, ActionBtn, AccountDetails, MobileIcon, Descriptions, ModalBody} from './StyledTwoFaModal';

import FormBuilder from '../../../containers/FormBuilder/FormBuilder';
import {updateFormInputState, validateForm} from '../../../Utility/Utility';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement,
     ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../../Utility/InterFacesAndEnum';
import Button from '../../../components/UI/Buttons/Button';

import CountdownTimer from '../../Timer/Timer';

import MobileIconSrc from '../../../assets/2FactorIcon.svg'

interface AddAddress {
    form: FormElement[],
    isValidForm: boolean
}

interface AddAddressProps {
    label: string,
    isVisible: boolean,
    toggleModal():void,
    verifyCode(code:string):void
}

const AddAddressState: AddAddress = {
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
            label:"Enter Verification Code",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        }
    ],
    isValidForm: true
}

const AddAddressModal:FC<AddAddressProps> = (props) => {

    const {isVisible, label, toggleModal,verifyCode} = props;


    const [values, setValues] = useState<AddAddress>(AddAddressState);

    const handleInputChange = (event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void => {
        let updatedStateArray = updateFormInputState(event, values.form);
        setValues({
            ...values,
            form: updatedStateArray
        });
    }

    const handleFormSubmision = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        let value = values.form[0].value;
        verifyCode(value);
    }

    const toggleResendOption = () => {};

    const onClickRestart = () => {}

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
                <AccountDetails>
                    <MobileIcon src={MobileIconSrc} />
                    <Descriptions>
                    A OTP code has been sent to your email address 
kir ********001.com
                    </Descriptions>
                </AccountDetails>
            <FormBuilder formElements={values.form} onInputChange = {handleInputChange}
            onChangeDate={() => {}}
             onSelectValueChange={() => {}} />
            <CountdownTimer totalDuration={180} 
        restartCounterText = {"Resend Code"}
        onReachEnd={toggleResendOption} 
        color={"#000000"} 
        fontSize={16} 
        maxResendAttempt = {2}
        resendTextColor = {"#FFB332"}
        restartCounter={onClickRestart} />
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
            </ModalBody>
        </ModalBox>
    </Modal>
};

export default AddAddressModal