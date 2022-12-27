import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {RouterPath} from '../../routes';
import MainLottery from '../../components/MainLottery/MainLottery';
import UpcomingLotteries from '../../components/HP-UpcomingLotteries/UpcomingLotterites';
import LotteryWinners from '../../components/HP-TopLotteriesWinners/TopLotteryWinners';
import SimilarProducts from '../AuctionSimilarProducts/SimilarProducts';
import Promotions from '../Promotions/Promotion'
import AuctionWinners from '../../components/HP-TopAuctionWinners/AuctionWinners'
import {MainPageWrapper, SectionTwo, Section, Title, AuctionSection, TitelWrapper,
     MoreAuction, AuctionWinnerSection, MoreLotteries, SectionWrapper} from './StyledHome';


const Home:FC = () => {
    const navigate = useNavigate();
    const navigateToView = (url:string) => {
        navigate(url);
    }

    return <div>
        <MainPageWrapper>
            <Promotions pageName={"HOME"} />
        <MainLottery />
        </MainPageWrapper>
        <SectionTwo>
            <Section>
                <Title>
                Top lottery contest winners
                </Title>
                <LotteryWinners />
        </Section>
        <Section>
        <Title>
        More Upcoming lotteries
                </Title>
        <UpcomingLotteries />
        <MoreLotteries onClick={() => {navigateToView(RouterPath.lotteries)}}>
        More lotteries games
        </MoreLotteries>
        </Section>
        </SectionTwo>
        {/* Fix me  */}
        {/* <SectionWrapper>
        <AuctionSection>
            <TitelWrapper>
                <Title>
                    Auctions
                </Title>
                <MoreAuction onClick={() => {navigateToView(RouterPath.auctionList)}}>
                    More auctions
                </MoreAuction>
                </TitelWrapper>
            <SimilarProducts isTitleRequired={false} />
        </AuctionSection>
        </SectionWrapper> */}
        {/* <AuctionSection>
        <Title>
        Top Auction winners
                </Title>
        <AuctionWinners />
        </AuctionSection> */}
    </div>
}

export default Home