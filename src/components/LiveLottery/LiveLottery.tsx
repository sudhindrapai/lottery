import {FC} from 'react';
import {ButtonSizeVariant, ButtonType, ButtonVariant, AppButtonType} from '../../Utility/InterFacesAndEnum';
import Button from '../UI/Buttons/Button';
import {transformDate} from '../../Utility/Utility';

import LotteryCoin from '../../assets/lotteryCoin.png';
import EntryTicketIcon from '../../assets/Entry-ticket-icon.svg';
import UserIcon from '../../assets/User-icon.svg';
import WinnerIcn from '../../assets/Winner-icon.svg'
import CountdownTimer from '../CountdownTimer/CountdownTimer';

import {Wrapper, 
    Container, 
    CoinImgSection, 
    LotteryDetailSection, 
    PriceTitle, 
    LotteryPrice, 
    EndSection, 
    EndSectinTitle,
    EndSectionTime, 
    AuctionBtnSection, FooterSection, FooterOption,FooterTitle, FooterValue, LotterCoinImg, FooterImg} from './StyledLiveLottery';

interface LiveLotteryPrice {
    id:number,
    lotteryType: string,
    lotteryPrice: string | number,
    lotteryEndTime: string,
    entryPrice: number,
    usersCound: number,
    drawDate:string,
    onSelectBuy(obj: any): void,
    onSelectGoldMembership(obj: any):void
}

const LiveLottery:FC<LiveLotteryPrice> = (props) => {
    const {lotteryPrice, lotteryEndTime, entryPrice, usersCound, lotteryType,id, drawDate, onSelectBuy, onSelectGoldMembership} = props;

    const redirectToLogin = () => {};

    return <Container>
        <CoinImgSection>
            <LotterCoinImg src={LotteryCoin} />
        </CoinImgSection>
        <LotteryDetailSection>
            <PriceTitle>
                Lottery Price
            </PriceTitle>
            <LotteryPrice>
            {lotteryType === "M" && <span>&#x24;</span>} {lotteryPrice}
            </LotteryPrice>
            <EndSection>
                <EndSectinTitle>
                Hurry Lottery Ends On:
                </EndSectinTitle>
                <EndSectionTime>
                    <CountdownTimer timestamp={new Date(lotteryEndTime)} />
                </EndSectionTime>
            </EndSection>
            <AuctionBtnSection>
            <Button disabled={false} 
            appBtnType = {AppButtonType.primaryBtn}
        fullWidth={false} 
        variant={ButtonVariant.contained} 
        type={ButtonType.default} size={ButtonSizeVariant.small} clicked={() => {onSelectBuy(id)}} >
            BUY TICKETS
        </Button>
        <Button disabled={false} 
        appBtnType = {AppButtonType.secondary}
        fullWidth={false} 
        variant={ButtonVariant.contained} 
        type={ButtonType.default} size={ButtonSizeVariant.small} clicked={onSelectGoldMembership} >
            BUY GOLD MEMBERSHIP
        </Button>
            </AuctionBtnSection>
            <FooterSection>
                <FooterOption>
                    <FooterImg src={EntryTicketIcon} />
                    <FooterTitle>
                    Entry Tickets
                    </FooterTitle>
                    <FooterValue>
                        {entryPrice}
                    </FooterValue>
                </FooterOption>
                <FooterOption>
                    <FooterImg src={UserIcon} />
                <FooterValue>
                        {usersCound}
                    </FooterValue>
                    <FooterTitle>
                    Users participating
                    </FooterTitle>
                </FooterOption>
                <FooterOption>
                    <FooterImg src={WinnerIcn} />
                    <FooterTitle>
                    Winner will be announced on
                    </FooterTitle>
                    <FooterValue>
                    {transformDate(new Date(lotteryEndTime))}
                    </FooterValue>
                </FooterOption>
            </FooterSection>
        </LotteryDetailSection>
    </Container>
}

export default LiveLottery