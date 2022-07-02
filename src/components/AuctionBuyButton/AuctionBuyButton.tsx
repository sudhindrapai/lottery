import {FC, useState, Fragment} from 'react';
import {ButtonSizeVariant, ButtonType, ButtonVariant,AppButtonType} from '../../Utility/InterFacesAndEnum';
import Button from '../../components/UI/Buttons/Button';

import AuctionBuyTicketModal from '../Modals/AuctionBuyTicketModal/BuyTicketModal';

interface AuctionBuyBtnProps {
    auctionObj:any
}

const AuctionBuyBtn:FC<AuctionBuyBtnProps> = ({auctionObj}) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleIsModalVisible = () => {};

    const triggerTicketModal = () => {
        setIsVisible(!isVisible);
        console.log(auctionObj,"auctionObj, triggerTicketModal")
    };

    let ticketObj = [
        {
          "label": "Bronze Ticket",
          "amount": 7,
          "selected": false,
          "ticketType": "bronze"
        },
        {
          "label": "Silver Ticket",
          "amount": 10,
          "selected": false,
          "ticketType": "silver"
        },
        {
          "label": "Gold Ticket",
          "amount": 50,
          "selected": true,
          "ticketType": "gold"
        },
        {
          "label": "Platinum Ticket",
          "amount": 100,
          "selected": false,
          "ticketType": "Platinum"
        }
      ]

    return <Fragment>
        {isVisible && <AuctionBuyTicketModal isVisible={isVisible} 
        label={"Buy Auction Tickets"} 
        ticket={ticketObj} toggleModal={triggerTicketModal} />}
        <Button disabled={false} 
    appBtnType={AppButtonType.primaryBtn}
fullWidth={false} 
variant={ButtonVariant.contained} 
type={ButtonType.default} size={ButtonSizeVariant.small} clicked={triggerTicketModal} >
BUY TICKETS
</Button>
</Fragment>
}

export default AuctionBuyBtn