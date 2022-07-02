import {FC, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Modal from '@mui/material/Modal';
import FormBuilder from '../../../containers/FormBuilder/FormBuilder';

import {updateFormInputState} from '../../../Utility/Utility';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement,
     ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../../Utility/InterFacesAndEnum';
import Button from '../../../components/UI/Buttons/Button';

import * as localStorageActionType from '../../../localStorage/ActionTypes';
import {setLocalStorage} from '../../../localStorage/SetLocalStorage';

import {ModalBox, ModalHeader, CloseIcon, Title, ModalBody, SectionTitle, 
    TicketsLists, Ticket, SummarySection, ActionSection} from './StyledBuyTicketsModal';

import {RouterPath} from '../../../routes';

    interface BuyTicketFormState {
        form: FormElement[],
        isValidForm: boolean
    }

    interface SelectedTicket {
        label: string,
        amount: number,
        selected: boolean,
        ticketType: string,
    }

interface BuyTicketModalProps {
    label: string,
    isVisible: boolean,
    ticket:SelectedTicket[],
    toggleModal():void
}

const buyTicketForm:BuyTicketFormState = {
    form:[
        {
            elementType: FormElementType.input,
            value:"1",
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
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        }
    ],
    isValidForm: false
}; 


const BuyTicketModal:FC<BuyTicketModalProps> = (props) => {
    const {isVisible, label, ticket, toggleModal} = props;

    const navigate = useNavigate();

    const [values, setValues] = useState<BuyTicketFormState>(buyTicketForm);

    const [ticketsList, setTickets] = useState<SelectedTicket[] | []>([]);

    const [totalValue, setTotalValue] = useState(0)

    const handleInputChange = (event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void => {
        let updatedStateArray = updateFormInputState(event, values.form);
        setValues({
            ...values,
            form: updatedStateArray
        });
        calculateTotalValue(ticketsList);
    }

    useEffect(() => {
        if (ticketsList.length === 0) {
            console.log(ticket,"ticketticketticketticket")
            setTickets(ticket);
            calculateTotalValue(ticket);
        }
    },[]);

    const calculateTotalValue = (ticketsArray:SelectedTicket[]) => {
        let selectedTicketObj = ticketsArray.filter((ticketObj) => {
            return ticketObj.selected
        })[0];
        let totalNoOfTickets = values.form[0].value;
        let ticketAmount = 0;
        if (selectedTicketObj !== undefined && Object.keys(selectedTicketObj).length > 0) {
            ticketAmount = selectedTicketObj.amount;
        }

        setTotalValue(parseInt(totalNoOfTickets) * ticketAmount);
    };

    const handleFormSubmision = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
    }

    const toggleSelcetionState = (ticketType:string) => {
        let updatedTicket = ticketsList.map((ticketObj) => {
            return {
                ...ticketObj,
                selected: ticketObj.ticketType === ticketType
            };
        });
        setTickets(updatedTicket);
        calculateTotalValue(updatedTicket)
    };

    let tickets = ticketsList.map((ticketObj) => {
        return <Ticket onClick={() => {toggleSelcetionState(ticketObj.ticketType)}} selected = {ticketObj.selected}
        type={ticketObj.ticketType}>
            {ticketObj.label} 
            <span>{ticketObj.amount}</span>
        </Ticket>
    });

    const redirectToPaymentView = () => {
        let selectedTicketObj = ticketsList.filter((ticketObj) => {
            return ticketObj.selected
        })[0];
        let totalNoOfTickets = values.form[0].value;

        let ticketDetailObj = {
            ...selectedTicketObj,
            noOfTickets: totalNoOfTickets,
            totalAmount:totalValue
        };

        // Fixme
        // setLocalStorage(localStorageActionType.SET_TICKET_DETAIL_OBJ,ticketDetailObj);

        // Fixme
        navigate(RouterPath.auctionPaymentSuccess);
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
                <FormBuilder formElements={values.form} onInputChange = {handleInputChange}  onChangeDate={() => {}}
                 onSelectValueChange={() => {}} />
                <SummarySection>
                    Total Cost <span>$ {isNaN(totalValue) ? 0 : totalValue}</span>
                </SummarySection>
                <ActionSection>
                <Button 
                appBtnType={AppButtonType.secondaryBordered}
                    disabled={false} 
                    fullWidth={false} 
                    size={ButtonSizeVariant.large} 
                    variant={ButtonVariant.contained} 
                    type={ButtonType.submit} 
                    clicked={handleFormSubmision} >
                        Buy Gold Membership
                </Button>
                <Button 
                appBtnType={AppButtonType.primaryBtn}
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