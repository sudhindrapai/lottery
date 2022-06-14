import styled from 'styled-components';

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
`;

export const CoinsSection = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
`;

export const Coin = styled.img`
height: 120px;
width: 120px;
margin-bottom: 8px;
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
`;

export const MainLotteryImg = styled.img`
width: 350px;
object-fit: contain;
`;

export const RewardDetail = styled.div`
font-weight: 700;
font-size: 72px;
line-height: 87px;
color: #200E32;
margin-bottom: 8px;
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
`;