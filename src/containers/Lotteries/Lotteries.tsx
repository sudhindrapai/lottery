import {FC, Fragment, useEffect, useState} from 'react';
import LiveLottery from '../../components/LiveLottery/LiveLottery';
import Navigation from '../../components/Navigation/DesktopNavigation';
import {LotteryContainer, BannerImg} from './StyledLotteries';
import BannerImgUrl from '../../assets/BANNER-LOTTERY-SECTION.jpg'
import {useSelector, useDispatch} from 'react-redux'
import {getLotteries} from '../../features/lotteriesSlice';
import { RootState } from '../../app/store';

import * as localStorageActionType from '../../localStorage/ActionTypes';
import {setLocalStorage} from '../../localStorage/SetLocalStorage';

import BuyLotteryModal from '../../components/Modals/BuyTicketModal/BuyTicketModal';

interface SelectedTicket {
    label: string,
    amount: number,
    selected: boolean,
    ticketType: string
}

const Lotteries:FC = () => {
    const dispatch = useDispatch()
    const [isBuyTicketModalVisible, setModalVisibility] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState<SelectedTicket[] | []>([])
    let lotteriesList = useSelector((state:RootState) => state.lotteries.lotteries );

    useEffect(() => {
        dispatch(getLotteries());
    },[]);

    const onSelectBuyTicket = (id: number) => {
        let selectedTicketObj = lotteriesList.filter((lotteryObj) => {
            return id === lotteryObj.lotteryGameId
        })[0];

        let ticketsArray = [
            {
                label: "Bronze Ticket",
                amount: selectedTicketObj.bronzeTicketPrice,
                selected: false,
                ticketType: "bronze"
            },
            {
                label: "Silver Ticket",
                amount: selectedTicketObj.silverTicketPrice,
                selected: false,
                ticketType: "silver"
            },
            {
                label: "Gold Ticket",
                amount: selectedTicketObj.goldTicketPrice,
                selected: true,
                ticketType: "gold"
            },
            {
                label: "Platinum Ticket",
                amount: selectedTicketObj.platinumTicketPrice,
                selected: false,
                ticketType: "Platinum"
            }
        ];
        
        let updatedObj = {
            ...selectedTicketObj,
            lotteryGameEndDate: (new Date(selectedTicketObj.lotteryGameEndDate).getTime()).toString()
        }

        console.log(updatedObj,"selectedTicketObj")

        setSelectedTicket(ticketsArray);
        setLocalStorage(localStorageActionType.SET_SELECTED_LOTTERY_OBJ, updatedObj);
        setModalVisibility(true);
    }

    const onSelectGoldMembership = (ticketObj: any) => {}

    let buyModal = selectedTicket.length > 0 ? <BuyLotteryModal ticket={selectedTicket} label={"Buy tickets"} isVisible={isBuyTicketModalVisible} 
    toggleModal={() => {setModalVisibility(!isBuyTicketModalVisible)}} /> : <div>Please wait</div>

    return <Fragment>
        <Navigation />
        {buyModal}
        <BannerImg src={BannerImgUrl} />
        <LotteryContainer>
        {lotteriesList.map((lotteryObj) => {
            return <LiveLottery lotteryType={lotteryObj.rewardType} 
            id={lotteryObj.lotteryGameId}
            lotteryPrice={lotteryObj.rewardType === "G" ? lotteryObj.rewardGiftName : lotteryObj.rewardAmount } 
            onSelectBuy={onSelectBuyTicket}
            onSelectGoldMembership = {onSelectGoldMembership}
            lotteryEndTime = {lotteryObj.lotteryGameEndDate} 
            entryPrice={23} usersCound={1000} drawDate={lotteryObj.lotteryGameEndDate} />
        })}
        </LotteryContainer>
    </Fragment>
};

export default Lotteries