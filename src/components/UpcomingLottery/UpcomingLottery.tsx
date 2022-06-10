import {FC} from 'react';
import {ButtonSizeVariant, ButtonType, ButtonVariant} from '../../Utility/InterFacesAndEnum';
import Button from '../UI/Buttons/Button';
import {transformDate} from '../../Utility/Utility';

import LotteryCoin from '../../assets/lotteryCoin.png';
import EntryTicketIcon from '../../assets/Entry-ticket-icon.svg';
import UserIcon from '../../assets/User-icon.svg';
import WinnerIcon from '../../assets/Winner-icon.svg'
import CountdownTimer from '../CountdownTimer/CountdownTimer';

import {Wrapper,Container,ImgSection, LotteryDetail, CoinImg,
     RewardTitle, RewardDetail, CounterWrapper ,CounterTitle,
      TicketDetails, IconImg, Detail, Actions} from './StyledUpcomingLottery';

interface UpcomingLotteryProps {
    lotteryId: number,
    reward: string | number,
    gameType: "M"| "G" | string,
    gameStartsOn: string,
    entryTicket: number,
    onClickNotifyMe(id: string|number):void
}

const UpcomingLottery:FC<UpcomingLotteryProps> = (props) => {
    const {lotteryId, reward, gameType, gameStartsOn, entryTicket, onClickNotifyMe} = props;
    return <Wrapper>
        <Container>
            <ImgSection>
            <CoinImg src={LotteryCoin} />
            </ImgSection>
            <LotteryDetail>
                <RewardTitle>
                    Reward
                </RewardTitle>
                <RewardDetail>
                    {reward}
                </RewardDetail>
                <CounterWrapper>
                    <CounterTitle>
                        Starts On:
                    </CounterTitle>
                    <CountdownTimer timestamp={new Date(gameStartsOn)} />
                </CounterWrapper>
                <TicketDetails>
                    <IconImg src={EntryTicketIcon} />
                    <Detail>
                    Entry Ticket: ${entryTicket}
                    </Detail>
                </TicketDetails>
                <TicketDetails>
                    <IconImg src={WinnerIcon} />
                    <Detail>
                    Starts on: ${transformDate(new Date(gameStartsOn))}
                    </Detail>
                </TicketDetails>
                <Actions>
                <Button disabled={false} 
        fullWidth={false} 
        variant={ButtonVariant.contained} 
        type={ButtonType.default} size={ButtonSizeVariant.small} clicked={() => {onClickNotifyMe(lotteryId)}} >
            BUY TICKETS
        </Button>
                </Actions>
            </LotteryDetail>
        </Container>
    </Wrapper>
};

export default UpcomingLottery;