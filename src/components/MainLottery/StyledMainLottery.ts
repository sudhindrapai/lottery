import styled from 'styled-components';
import {FooterOption} from '../LiveLottery/StyledLiveLottery';
import * as UIConstants from '../../UIConstants';
import bgImg from '../../assets/mainLotteryBgImg.jpg';

export const Wrapper = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
`;

export const Container = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: flex-start;
${UIConstants.mobileView}{
    flex-flow: column wrap;
    align-items: center;
};
`;

export const CoinsSection = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
${UIConstants.mobileView}{
    display: none
}
`;

export const Coin = styled.img`
height: 120px;
width: 120px;
margin-bottom: 8px;
mix-blend-mode:multiply;
`;

export const CoinLabel = styled.div`
width: 100%;
box-sizing: border-box;
text-align: center;
color: #200E32;
margin-bottom: 16px;
`;

export const MainLotterySection = styled.div`
display: flex;
flex-flow: column;
${UIConstants.mobileView}{
    align-items: center;
    justify-content: center;
}
`;

export const MainLotteryImg = styled.img`
width: 350px;
object-fit: contain;
mix-blend-mode:multiply;
${UIConstants.mobileView}{
    height: 200px;
}
`;

export const RewardDetail = styled.div`
font-weight: 700;
font-size: 72px;
line-height: 87px;
color: #200E32;
margin-bottom: 8px;
${UIConstants.mobileView}{
    font-size: 40px;
    line-height: 51px;
}
`;

export const LotteryDrawWrapper = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
color: #200E32;
align-items: center;
justify-content:center;
margin-bottom: 16px;
${UIConstants.mobileView}{
    flex-flow: column;
}
`;

export const DrawLabel = styled.div`
font-weight: 300;
font-size: 16px;
line-height: 24px;
color: #200E32;
margin-right: 10px;
`;

export const AuctionBtns = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow:row nowrap;
align-items: center;
justify-content: center;
margin-bottom: 30px;
Button{
    min-width: 220px;
    width: auto;
    height: 51px;
    ${UIConstants.mobileView}{
        min-width: 50%;
    }
};
Button:first-child {
    margin-right: 15px;
}
`;

export const FooterSection = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content:center;
${FooterOption} {
    margin-bottom: 15px;
}
${UIConstants.mobileView}{
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 12px;
}
`;