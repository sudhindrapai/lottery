import {FC} from 'react';
import {Wrapper, Container,CoinsSection, Coin, CoinLabel,
    MainLotterySection, MainLotteryImg, RewardDetail, LotteryDrawWrapper, DrawLabel, AuctionBtns, FooterSection} from './StyledMainLottery';

import {ButtonSizeVariant, ButtonType, ButtonVariant} from '../../Utility/InterFacesAndEnum';
import Button from '../UI/Buttons/Button';
import LotteryCoin from '../../assets/lotteryCoin.png';
import EntryTicketIcon from '../../assets/Entry-ticket-icon.svg';
import UserIcon from '../../assets/User-icon.svg';
import WinnerIcn from '../../assets/Winner-icon.svg';
import Coin1Src from '../../assets/coin1.png';
import Coin2Src from '../../assets/coin2.png';
import Coin3Src from '../../assets/coin3.png';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import {transformDate} from '../../Utility/Utility';

import * as LiveLotteryStyle from '../LiveLottery/StyledLiveLottery'

const MainLottery = () => {
    return<Wrapper>
        <Container>
            <CoinsSection>
                <Coin src={Coin1Src} />
                <CoinLabel>
                Gold Coin
                </CoinLabel>
                <Coin src={Coin2Src} />
                <CoinLabel>
                Ancient Coin
                </CoinLabel>
                <Coin src={Coin3Src} />
                <CoinLabel>
                Live Science 
                The Profound His...
                </CoinLabel>
            </CoinsSection>
            <MainLotterySection>
                <MainLotteryImg src={LotteryCoin} />
                <RewardDetail>
                        100,00
                </RewardDetail>
                    <LotteryDrawWrapper>
                        <DrawLabel>
                        Hurry Lottery Ends On:
                        </DrawLabel>
                        <CountdownTimer timestamp={new Date(new Date().setDate(new Date().getDate() + 2))} />
                    </LotteryDrawWrapper>
                    <AuctionBtns>
                    <Button disabled={false} 
        fullWidth={false} 
        variant={ButtonVariant.contained} 
        type={ButtonType.default} size={ButtonSizeVariant.small} clicked={() => {}} >
            BUY TICKETS
        </Button>
        <Button disabled={false} 
        fullWidth={false} 
        variant={ButtonVariant.contained} 
        type={ButtonType.default} size={ButtonSizeVariant.small} clicked={() => {}} >
            BUY TICKETS
        </Button>
                    </AuctionBtns>
            </MainLotterySection>
            <CoinsSection>
                <Coin src={Coin1Src} />
                <CoinLabel>
                Gold Coin
                </CoinLabel>
                <Coin src={Coin2Src} />
                <CoinLabel>
                Ancient Coin
                </CoinLabel>
                <Coin src={Coin3Src} />
                <CoinLabel>
                Live Science 
                The Profound His...
                </CoinLabel>
            </CoinsSection>
            </Container>
        <FooterSection>
                <LiveLotteryStyle.FooterOption>
                    <LiveLotteryStyle.FooterImg src={EntryTicketIcon} />
                    <LiveLotteryStyle.FooterTitle>
                    Entry Tickets
                    </LiveLotteryStyle.FooterTitle>
                    <LiveLotteryStyle.FooterValue>
                        {"10"}
                    </LiveLotteryStyle.FooterValue>
                </LiveLotteryStyle.FooterOption>
                <LiveLotteryStyle.FooterOption>
                    <LiveLotteryStyle.FooterImg src={UserIcon} />
                <LiveLotteryStyle.FooterValue>
                        {10}
                    </LiveLotteryStyle.FooterValue>
                    <LiveLotteryStyle.FooterTitle>
                    Users participating
                    </LiveLotteryStyle.FooterTitle>
                </LiveLotteryStyle.FooterOption>
                <LiveLotteryStyle.FooterOption>
                    <LiveLotteryStyle.FooterImg src={WinnerIcn} />
                    <LiveLotteryStyle.FooterTitle>
                    Winner will be announced on
                    </LiveLotteryStyle.FooterTitle>
                    <LiveLotteryStyle.FooterValue>
                    {transformDate(new Date())}
                    </LiveLotteryStyle.FooterValue>
                </LiveLotteryStyle.FooterOption>
            </FooterSection>
        
    </Wrapper>
};

export default MainLottery