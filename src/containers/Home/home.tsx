import {FC} from 'react';
import Navigation from '../../components/Navigation/DesktopNavigation';
import {useNavigate} from 'react-router-dom';
import {RouterPath} from '../../routes';
import MainLottery from '../../components/MainLottery/MainLottery';
import UpcomingLotteries from '../../components/HP-UpcomingLotteries/UpcomingLotterites';
import LotteryWinners from '../../components/HP-TopLotteriesWinners/TopLotteryWinners';
import SimilarProducts from '../AuctionSimilarProducts/SimilarProducts';
import AuctionWinners from '../../components/HP-TopAuctionWinners/AuctionWinners'
import {MainPageWrapper, SectionTwo, Section, Title, AuctionSection, TitelWrapper,
     MoreAuction, AuctionWinnerSection, MoreLotteries} from './StyledHome';

const Home:FC = () => {
    const navigate = useNavigate();
    const navigateToView = (url:string) => {
        navigate(url);
    }

    return <div>
        <Navigation />
        <MainPageWrapper>
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
        <AuctionWinnerSection>
        <Title>
        Top Auction winners
                </Title>
        <AuctionWinners />
        </AuctionWinnerSection>
    </div>
}

export default Home