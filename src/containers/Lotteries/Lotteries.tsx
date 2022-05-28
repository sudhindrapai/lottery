import {FC, Fragment, useEffect, useState} from 'react';
import LiveLottery from '../../components/LiveLottery/LiveLottery';
import Navigation from '../../components/Navigation/DesktopNavigation';
import {LotteryContainer, BannerImg} from './StyledLotteries';
import BannerImgUrl from '../../assets/BANNER-LOTTERY-SECTION.jpg'
import {useSelector, useDispatch} from 'react-redux'
import {getLotteries} from '../../features/lotteriesSlice';
import { RootState } from '../../app/store'

import BuyLotteryModal from '../../components/Modals/BuyTicketModal/BuyTicketModal';

const Lotteries:FC = () => {
    const dispatch = useDispatch()
    const [isBuyTicketModalVisible, setModalVisibility] = useState(false);
    let lotteriesList = useSelector((state:RootState) => state.lotteries.lotteries );

    useEffect(() => {
        dispatch(getLotteries());
    },[]);

    const onSelectBuyTicket = (ticketObj: any) => {
        setModalVisibility(true);
    }

    const onSelectGoldMembership = (ticketObj: any) => {}

    return <Fragment>
        <Navigation />
        <BuyLotteryModal label={"Buy tickets"} isVisible={isBuyTicketModalVisible} 
        toggleModal={() => {setModalVisibility(!isBuyTicketModalVisible)}} />
        <BannerImg src={BannerImgUrl} />
        <LotteryContainer>
        {lotteriesList.map((lotteryObj) => {
            return <LiveLottery lotteryPrice={1000} 
            onSelectBuy={onSelectBuyTicket}
            onSelectGoldMembership = {onSelectGoldMembership}
            lotteryEndTime = {lotteryObj.lotteryStartDate} 
            entryPrice={23} usersCound={1000} drawDate={lotteryObj.lotteryStartDate} />
        })}
        </LotteryContainer>
    </Fragment>
};

export default Lotteries