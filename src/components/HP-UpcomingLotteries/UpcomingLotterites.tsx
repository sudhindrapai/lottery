import {FC} from 'react';
import {Wrapper,Container,CoinImg, LotteryDetail, RewardTitle, Reward,
     StartsWrapper, Label, Value, NotifySection} from './StyledUpcomingLotteries';
import LotteryCoin from '../../assets/lotteryCoin.png';
import {transformDate} from '../../Utility/Utility'

const UpcomingLotteries = () => {
    return <Wrapper>
        <Container>
            <CoinImg src={LotteryCoin} />
            <LotteryDetail>
                <RewardTitle>
                Lottery price
                </RewardTitle>
                <Reward>
                    $ 1000
                </Reward>
                <StartsWrapper>
                    <Label>
                        Starts on: 
                    </Label>
                    <Value>
                        {transformDate(new Date(new Date().setDate(new Date().getDate() + 3)))}
                    </Value>
                </StartsWrapper>
            </LotteryDetail>
            <NotifySection>
                Notify me
            </NotifySection>
        </Container>
        <Container>
            <CoinImg src={LotteryCoin} />
            <LotteryDetail>
                <RewardTitle>
                Lottery price
                </RewardTitle>
                <Reward>
                    $ 1000
                </Reward>
                <StartsWrapper>
                    <Label>
                        Starts on: 
                    </Label>
                    <Value>
                        {transformDate(new Date(new Date().setDate(new Date().getDate() + 3)))}
                    </Value>
                </StartsWrapper>
            </LotteryDetail>
            <NotifySection>
                Notify me
            </NotifySection>
        </Container>
        <Container>
            <CoinImg src={LotteryCoin} />
            <LotteryDetail>
                <RewardTitle>
                Lottery price
                </RewardTitle>
                <Reward>
                    $ 1000
                </Reward>
                <StartsWrapper>
                    <Label>
                        Starts on: 
                    </Label>
                    <Value>
                        {transformDate(new Date(new Date().setDate(new Date().getDate() + 3)))}
                    </Value>
                </StartsWrapper>
            </LotteryDetail>
            <NotifySection>
                Notify me
            </NotifySection>
        </Container>
    </Wrapper>
};

export default UpcomingLotteries;