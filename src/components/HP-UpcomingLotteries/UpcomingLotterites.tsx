import {FC, useEffect} from 'react';
import {Wrapper,Container,CoinImg, LotteryDetail, RewardTitle, Reward,
     StartsWrapper, Label, Value, NotifySection} from './StyledUpcomingLotteries';
import LotteryCoin from '../../assets/lotteryCoin.png';
import {transformDate} from '../../Utility/Utility';

import {RootState} from '../../app/store'
import {useSelector, useDispatch} from 'react-redux';
import {getUpcomingLotteries} from '../../features/lotteriesSlice';

const UpcomingLotteries:FC = () => {
    const dispatch = useDispatch();
    const upcomingLotteries = useSelector((state:RootState) => state.lotteries.upcomingLotteries);

    useEffect(() => {
        if (upcomingLotteries.length === 0) {
            dispatch(getUpcomingLotteries());
        }
    },[]);

    let lotteries = upcomingLotteries.map((lotteryObj) => {
        return <Container>
        <CoinImg src={LotteryCoin} />
        <LotteryDetail>
            <RewardTitle>
            Lottery Reward
            </RewardTitle>
            <Reward>
                {lotteryObj.rewardType === "M" ? `$ ${lotteryObj.rewardAmount}` : `${lotteryObj.rewardGiftName}` }
            </Reward>
            <StartsWrapper>
                <Label>
                    Starts on: 
                </Label>
                <Value>
                    {transformDate(new Date(lotteryObj.lotteryGameStartDate))}
                </Value>
            </StartsWrapper>
        </LotteryDetail>
        <NotifySection>
            Notify me
        </NotifySection>
    </Container>
    })

    return <Wrapper>
        {lotteries}
    </Wrapper>
};

export default UpcomingLotteries;