import {FC, Fragment, useEffect, useState} from 'react';
import LiveLottery from '../../components/LiveLottery/LiveLottery';
import UpcomingLottery from '../../components/UpcomingLottery/UpcomingLottery';
import {LotteryContainer, BannerImg, UpcomingLotteryContainer, Lottery, SectionTitle} from './StyledLotteries';
import BannerImgUrl from '../../assets/BANNER-LOTTERY-SECTION.jpg'
import {useSelector, useDispatch} from 'react-redux'
import {getLotteries,getUpcomingLotteries} from '../../features/lotteriesSlice';
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
    let upcomingLotteries = useSelector((state: RootState) => state.lotteries.upcomingLotteries);

    useEffect(() => {
        dispatch(getLotteries());
        dispatch(getUpcomingLotteries())
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

        setSelectedTicket(ticketsArray);
        setLocalStorage(localStorageActionType.SET_SELECTED_LOTTERY_OBJ, updatedObj);
        setModalVisibility(true);
    }

    const onSelectGoldMembership = (ticketObj: any) => {}

    let buyModal = selectedTicket.length > 0 ? <BuyLotteryModal ticket={selectedTicket} label={"Buy tickets"} isVisible={isBuyTicketModalVisible} 
    toggleModal={() => {setModalVisibility(!isBuyTicketModalVisible)}} /> : <div>Please wait</div>

    const onSelectyNotifyMe = (id: number) => {};

    return <Fragment>
        {/* <Navigation /> */}
        {buyModal}
        <BannerImg src={BannerImgUrl} />
        <LotteryContainer>
            <SectionTitle>
            Live lotteries
            </SectionTitle>
        {lotteriesList.map((lotteryObj) => {
            return <LiveLottery lotteryType={lotteryObj.rewardType} 
            id={lotteryObj.lotteryGameId}
            lotteryPrice={lotteryObj.rewardType === "G" ? lotteryObj.rewardGiftName : lotteryObj.rewardAmount } 
            onSelectBuy={onSelectBuyTicket}
            onSelectGoldMembership = {onSelectGoldMembership}
            lotteryEndTime = {lotteryObj.lotteryGameEndDate} 
            entryPrice={23} usersCound={1000} drawDate={lotteryObj.lotteryGameEndDate} />
        })}
<SectionTitle>
Upcoming lotteries
            </SectionTitle>
<UpcomingLotteryContainer>
        {upcomingLotteries.map((lotteryObj) => {
            return <Lottery>
            <UpcomingLottery lotteryId={lotteryObj.lotteryGameId} 
            reward={lotteryObj.rewardType === "M" ?lotteryObj.rewardAmount : lotteryObj.rewardGiftName} 
            gameType={lotteryObj.rewardType} 
            gameStartsOn={lotteryObj.lotteryGameStartDate} 
            entryTicket={10} 
            onClickNotifyMe={onSelectyNotifyMe} /> </Lottery>
        })}
        </UpcomingLotteryContainer>

        </LotteryContainer>
    </Fragment>
};

export default Lotteries