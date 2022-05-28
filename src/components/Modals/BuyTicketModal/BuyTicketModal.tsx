import {FC, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Modal from '@mui/material/Modal';
import FormBuilder from '../../../containers/FormBuilder/FormBuilder';

import {updateFormInputState, validateForm} from '../../../Utility/Utility';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement, ButtonSizeVariant, ButtonVariant, ButtonType} from '../../../Utility/InterFacesAndEnum';
import Button from '../../../components/UI/Buttons/Button'

import {ModalBox, ModalHeader, CloseIcon, Title, ModalBody, SectionTitle, 
    TicketsLists, Ticket, SummarySection, ActionSection} from './StyledBuyTicketsModal';

import {RouterPath} from '../../../routes';

    interface BuyTicketFormState {
        form: FormElement[],
        isValidForm: boolean
    }

interface BuyTicketModalProps {
    label: string,
    isVisible: boolean,
    toggleModal():void
}

const buyTicketForm:BuyTicketFormState = {
    form:[
        {
            elementType: FormElementType.input,
            value:"",
            id:"numberOfTickets",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: true,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.numberValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Enter Number of Tickets",
            radioGroupValues:[],
            isPasswordHidden:true
        }
    ],
    isValidForm: false
}; 

const ticketsList = [
    {
        label: "Bronze Ticket",
        amount: 10,
        selected: true,
        ticketType: "bronze"
    },
    {
        label: "Silver Ticket",
        amount: 100,
        selected: false,
        ticketType: "silver"
    },
    {
        label: "Gold Ticket",
        amount: 200,
        selected: false,
        ticketType: "gold"
    },
    {
        label: "Platinum Ticket",
        amount: 500,
        selected: false,
        ticketType: "Platinum"
    }
];

const BuyTicketModal:FC<BuyTicketModalProps> = (props) => {
    const {isVisible, label, toggleModal} = props;

    const navigate = useNavigate();

    const [values, setValues] = useState<BuyTicketFormState>(buyTicketForm);

    const handleInputChange = (event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void => {
        let updatedStateArray = updateFormInputState(event, values.form)
        setValues({
            ...values,
            form: updatedStateArray
        });
    }

    const handleFormSubmision = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
    }

    let tickets = ticketsList.map((ticketObj) => {
        console.log(ticketObj,"console.log")
        return <Ticket type={ticketObj.ticketType}>
            {ticketObj.label} 
            <span>{ticketObj.amount}</span>
        </Ticket>
    });

    const redirectToPaymentView = () => {
        navigate(RouterPath.lotteryPaymentView);
    };

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
                <SectionTitle>
                Select ticket type
                </SectionTitle>
                <TicketsLists>
                    {tickets}
                </TicketsLists>
                <FormBuilder formElements={values.form} onInputChange = {handleInputChange}  />
                <SummarySection>
                    Total Cost <span>$ 100</span>
                </SummarySection>
                <ActionSection>
                <Button 
                    disabled={false} 
                    fullWidth={false} 
                    size={ButtonSizeVariant.large} 
                    variant={ButtonVariant.contained} 
                    type={ButtonType.submit} 
                    clicked={handleFormSubmision} >
                        Buy Gold Membership
                </Button>
                <Button 
                    disabled={false} 
                    fullWidth={false} 
                    size={ButtonSizeVariant.large} 
                    variant={ButtonVariant.contained} 
                    type={ButtonType.submit} 
                    clicked={redirectToPaymentView} >
                        Proceed
                </Button>
                </ActionSection>
            </ModalBody>
        </ModalBox>
    </Modal>
};

export default BuyTicketModal