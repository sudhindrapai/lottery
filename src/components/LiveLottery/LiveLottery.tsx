import {FC} from 'react';
import {ButtonSizeVariant, ButtonType, ButtonVariant} from '../../Utility/InterFacesAndEnum';
import Button from '../UI/Buttons/Button';

import LotteryCoin from '../../assets/lotteryCoin.png';
import EntryTicketIcon from '../../assets/Entry-ticket-icon.svg';
import UserIcon from '../../assets/User-icon.svg';
import WinnerIcn from '../../assets/Winner-icon.svg'

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
    lotteryPrice: number,
    lotteryEndTime: Date,
    entryPrice: number,
    usersCound: number,
    drawDate:Date,
    onSelectBuy(obj: any): void,
    onSelectGoldMembership(obj: any):void
}

const LiveLottery:FC<LiveLotteryPrice> = (props) => {
    const {lotteryPrice, lotteryEndTime, entryPrice, usersCound, drawDate, onSelectBuy, onSelectGoldMembership} = props;

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
            &#x24; {lotteryPrice}
            </LotteryPrice>
            <EndSection>
                <EndSectinTitle>
                Hurry Lottery Ends On:
                </EndSectinTitle>
                <EndSectionTime>01 : 24 : 32 :22</EndSectionTime>
            </EndSection>
            <AuctionBtnSection>
            <Button disabled={false} 
        fullWidth={false} 
        variant={ButtonVariant.contained} 
        type={ButtonType.default} size={ButtonSizeVariant.small} clicked={onSelectBuy} >
            BUY TICKETS
        </Button>
        <Button disabled={false} 
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
                    1st April 2022 At 8PM
                    </FooterValue>
                </FooterOption>
            </FooterSection>
        </LotteryDetailSection>
    </Container>
}

export default LiveLottery